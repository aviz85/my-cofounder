#!/usr/bin/env node
// Start a Codex thread against this repo and also open a Desktop deep link.
import { spawn } from "node:child_process";

const CWD = "/Users/aviz/my-cofounder";
const WS_URL = process.env.CODEX_WS_URL || "ws://127.0.0.1:4500";
const PROMPT = `דמו מלא בתיקייה הזו. בלי Python. מפתחות רק מ-./.env.

תריץ לפי הסדר ותדווח מה נוצר:
1. node routines/scripts/daily-review.mjs
2. node routines/scripts/whatsapp-attention.mjs
3. אם ElevenLabs מחובר: תקליט את second-brain/outputs/2026-08-17-voice-script.md אל ./voice.mp3
4. אם WhatsApp מחובר: שלח לי את ./voice.mp3 כהודעה קולית (רק לעצמי)
5. סכם: אילו קבצים נכתבו, האם ההקלטה נשלחה, ומה סומן בתשומת לב

תשתמש בתוספים $whatsapp ו-$elevenlabs אם הם מותקנים. אל תשלח לקבוצה.`;

function rpc(ws, id, method, params = {}) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("timeout " + method)), 20000);
    const onMsg = (ev) => {
      let p;
      try {
        p = JSON.parse(ev.data);
      } catch {
        return;
      }
      if (p.id === id) {
        clearTimeout(timer);
        ws.removeEventListener("message", onMsg);
        resolve(p);
      }
    };
    ws.addEventListener("message", onMsg);
    ws.send(JSON.stringify({ jsonrpc: "2.0", id, method, params }));
  });
}

const qs = new URLSearchParams({ path: CWD, prompt: PROMPT });
const deep = "codex://threads/new?" + qs.toString();
spawn("open", [deep], { detached: true, stdio: "ignore" }).unref();
console.log("opened desktop deep link");

if (typeof WebSocket === "undefined") {
  console.log("no WebSocket in this Node - deep link only");
  process.exit(0);
}

const ws = new WebSocket(WS_URL);
await new Promise((resolve, reject) => {
  ws.addEventListener("open", resolve);
  ws.addEventListener("error", reject);
});

const init = await rpc(ws, 1, "initialize", {
  clientInfo: { name: "atomi-lesson-demo", version: "1.0.0" },
  protocolVersion: "0.1",
  capabilities: { experimentalApi: true },
});
if (init.error) {
  console.error("init failed", init.error);
  process.exit(1);
}
ws.send(JSON.stringify({ jsonrpc: "2.0", method: "initialized" }));
await new Promise((r) => setTimeout(r, 800));

const thread = await rpc(ws, 2, "thread/start", { cwd: CWD, path: CWD });
const threadId = thread.result?.thread?.id || thread.result?.id;
console.log("thread", threadId || JSON.stringify(thread).slice(0, 300));
if (!threadId) process.exit(1);

await new Promise((r) => setTimeout(r, 1500));
const turn = await rpc(ws, 3, "turn/start", {
  threadId,
  turnKind: "turn",
  input: [{ type: "text", text: PROMPT }],
});
if (turn.error) {
  console.error("turn failed", turn.error);
  process.exit(1);
}
console.log("turn started");
await new Promise((r) => setTimeout(r, 2000));
ws.close();
