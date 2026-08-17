#!/usr/bin/env node
// Scan recent WhatsApp traffic and flag things that need attention. Node 18+ only.
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { projectRoot, todayStamp, findWaScript, ensureGitignoreEnv } from "./project-env.mjs";

const root = projectRoot();
ensureGitignoreEnv(root);
const day = todayStamp();
const outDir = path.join(root, "second-brain/outputs");
fs.mkdirSync(outDir, { recursive: true });

const wa = findWaScript();
const outFile = path.join(outDir, `${day}-whatsapp-attention.md`);

function write(body) {
  fs.writeFileSync(outFile, body);
  console.log("wrote: second-brain/outputs/" + path.basename(outFile));
}

if (!wa) {
  write(`---
title: תשומת לב וואטסאפ
date: ${day}
status: blocked
---

# תשומת לב וואטסאפ ${day}

לא נמצא \`wa.mjs\`. התקינו את תוסף WhatsApp מ-\`aviz85/atomi-whatsapp\` ואז הריצו שוב.
`);
  process.exit(2);
}

const group = process.argv.includes("--group")
  ? process.argv[process.argv.indexOf("--group") + 1]
  : process.env.WA_ATTENTION_GROUP;

const args = ["read", "--count", "40", "--json"];
if (group) args.push("--group", group);

const ran = spawnSync(process.execPath, [wa, ...args], {
  cwd: root,
  env: { ...process.env, WA_NO_OPEN: "1" },
  encoding: "utf8",
  timeout: 60000,
});

if (ran.status !== 0) {
  write(`---
title: תשומת לב וואטסאפ
date: ${day}
status: blocked
---

# תשומת לב וואטסאפ ${day}

\`wa.mjs read\` נכשל (exit ${ran.status}).

\`\`\`
${(ran.stderr || ran.stdout || "").trim().slice(0, 800)}
\`\`\`

אם חסרים מפתחות: הריצו \`$whatsapp\` וחברו \`.env\` מקומי.
`);
  process.exit(ran.status || 1);
}

let msgs = [];
try {
  const parsed = JSON.parse(ran.stdout || "[]");
  msgs = Array.isArray(parsed) ? parsed : [];
} catch {
  msgs = [];
}

const now = Date.now();
const dayMs = 24 * 60 * 60 * 1000;

function ts(m) {
  const raw = m.timestamp || m.time || m.messageTimestamp || 0;
  const n = Number(raw);
  if (!n) return 0;
  return n < 1e12 ? n * 1000 : n;
}

function textOf(m) {
  return (
    m.textMessage ||
    m.extendedTextMessage?.text ||
    m.caption ||
    m.fileMessageData?.caption ||
    ""
  );
}

const recent = msgs.filter((m) => {
  const t = ts(m);
  return !t || now - t <= dayMs;
});

const flags = [];
for (const m of recent) {
  const text = String(textOf(m));
  const who = m.senderName || m.chatId || "?";
  const reasons = [];
  if (/[?؟]/.test(text) || /שאלה|מתי|איפה|למה|אפשר/.test(text)) reasons.push("שאלה");
  if (/תאשר|מאשר|אישור|ok\?|בסדר\?/.test(text.toLowerCase())) reasons.push("ממתין לאישור");
  if (m.downloadUrl || m.fileMessageData?.downloadUrl) reasons.push("קובץ");
  if (/דחוף|היום|עכשיו|asap|דחיפות/.test(text.toLowerCase())) reasons.push("דחיפות");
  if (/כסף|תשלום|חשבונית|מחיר/.test(text)) reasons.push("כסף");
  if (reasons.length) {
    flags.push({ who, reasons, text: text.slice(0, 180) });
  }
}

const lines = flags.length
  ? flags
      .slice(0, 20)
      .map((f, i) => `${i + 1}. **${f.who}** (${f.reasons.join(", ")})\n   ${f.text || "[בלי טקסט]"}`)
      .join("\n\n")
  : "לא זוהו פריטים שדורשים תשומת לב ב-24 השעות האחרונות (או שהתור ריק).";

write(`---
title: תשומת לב וואטסאפ
date: ${day}
status: generated
routine: whatsapp-attention
scanned: ${recent.length}
flagged: ${flags.length}
group: ${group || "inbox"}
---

# תשומת לב וואטסאפ ${day}

נסרקו ${recent.length} הודעות מ-24 השעות האחרונות. סומנו ${flags.length}.

## לשים לב

${lines}

## כלל

לא לשלוח תשובה לקבוצה בלי אישור מפורש. הטיוטה נשארת כאן.
`);
