#!/usr/bin/env node
// Daily review: read the cofounder project and write today's brief. Node 18+ only.
import fs from "node:fs";
import path from "node:path";
import { projectRoot, todayStamp, readIf } from "./project-env.mjs";

const root = projectRoot();
const day = todayStamp();
const outDir = path.join(root, "second-brain/outputs");
fs.mkdirSync(outDir, { recursive: true });

function excerpt(text, max = 800) {
  const t = String(text || "").trim();
  if (t.length <= max) return t || "(ריק)";
  return t.slice(0, max) + "\n…";
}

function listOutputs() {
  if (!fs.existsSync(outDir)) return [];
  return fs
    .readdirSync(outDir)
    .filter((n) => n.endsWith(".md") && n !== "README.md")
    .sort()
    .slice(-12);
}

const goal = excerpt(readIf(path.join(root, "GOAL.md")));
const loops = excerpt(readIf(path.join(root, "OPEN-LOOPS.md")));
const actions = excerpt(readIf(path.join(root, "second-brain/wiki/actions/register.md")));
const runLog = excerpt(readIf(path.join(root, "routines/run-log.md")), 500);
const outputs = listOutputs();

const body = `---
title: סקירה יומית
date: ${day}
status: generated
routine: daily-review
---

# סקירה יומית ${day}

נוצר אוטומטית מתוך הפרויקט. לא נשלח החוצה.

## יעד

${goal}

## חוטים פתוחים

${loops}

## פעולות רשומות

${actions}

## פלטים אחרונים בפרויקט

${outputs.map((n) => `- \`second-brain/outputs/${n}\``).join("\n") || "- אין עדיין"}

## ריצת רוטינות אחרונה

${runLog}

## מה לשים לב אליו היום

1. לפתוח את קובץ תשומת הלב מוואטסאפ אם רץ \`whatsapp-attention\`.
2. לא לשלוח לקבוצה בלי אישור.
3. כל מפתח נשאר ב-\`.env\` המקומי.
`;

const outFile = path.join(outDir, `${day}-daily-review.md`);
fs.writeFileSync(outFile, body);
console.log("wrote: second-brain/outputs/" + path.basename(outFile));
