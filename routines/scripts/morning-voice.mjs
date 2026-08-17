#!/usr/bin/env node
// Morning voice brief: review the project, speak it, send to MY_PHONE only. Node 18+.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { projectRoot, todayStamp, findWaScript } from "./project-env.mjs";

const root = projectRoot();
const day = todayStamp();
const review = path.join(root, "second-brain/outputs", `${day}-daily-review.md`);
const script = path.join(root, "second-brain/outputs", `${day}-voice-script.md`);
const fallback = path.join(root, "second-brain/outputs/2026-08-17-voice-script.md");
const src = fs.existsSync(script) ? script : fs.existsSync(review) ? review : fallback;
if (!fs.existsSync(src)) {
  console.error("אין טקסט לסקירה. הריצו קודם: node routines/scripts/daily-review.mjs");
  process.exit(1);
}

const home = process.env.HOME || "";
function findTts() {
  const cache = path.join(home, ".codex/plugins/cache/atomi-whatsapp");
  const found = [];
  function walk(d, n) {
    if (n > 6 || !fs.existsSync(d)) return;
    for (const name of fs.readdirSync(d)) {
      const p = path.join(d, name);
      let st;
      try {
        st = fs.statSync(p);
      } catch {
        continue;
      }
      if (st.isDirectory()) walk(p, n + 1);
      else if (name === "tts.mjs") found.push(p);
    }
  }
  walk(cache, 0);
  if (found.length) return found.sort().at(-1);
  const fb = "/Users/aviz/atomi-whatsapp/plugins/elevenlabs/skills/elevenlabs/scripts/tts.mjs";
  return fs.existsSync(fb) ? fb : null;
}

const tts = findTts();
const wa = findWaScript();
if (!tts || !wa) {
  console.error("חסר תוסף. התקינו WhatsApp ו-ElevenLabs מ-aviz85/atomi-whatsapp");
  process.exit(2);
}

const outMp3 = path.join(root, "voice.mp3");
const spoken = spawnSync(process.execPath, [tts, "speak", "--file", src, "--out", "./voice.mp3"], {
  cwd: root,
  env: { ...process.env, TTS_NO_OPEN: "1" },
  encoding: "utf8",
});
process.stdout.write(spoken.stdout || "");
process.stderr.write(spoken.stderr || "");
if (spoken.status !== 0) process.exit(spoken.status || 1);

const sent = spawnSync(process.execPath, [wa, "send", "--self", "--voice", "./voice.mp3"], {
  cwd: root,
  env: { ...process.env, WA_NO_OPEN: "1" },
  encoding: "utf8",
});
process.stdout.write(sent.stdout || "");
process.stderr.write(sent.stderr || "");
if (sent.status !== 0) process.exit(sent.status || 1);
console.log("morning-voice: sent ./voice.mp3 from " + path.relative(root, src));
void outMp3;
void day;
