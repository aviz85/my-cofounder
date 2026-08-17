// Shared: find this repo root. Node only. Never write outside the project.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export function projectRoot() {
  let dir = path.dirname(fileURLToPath(import.meta.url));
  while (true) {
    if (fs.existsSync(path.join(dir, "AGENTS.md")) && fs.existsSync(path.join(dir, "routines"))) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) throw new Error("not inside my-cofounder");
    dir = parent;
  }
}

export function todayStamp(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function readIf(p) {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return "";
  }
}

export function ensureGitignoreEnv(root) {
  const gi = path.join(root, ".gitignore");
  const text = fs.existsSync(gi) ? fs.readFileSync(gi, "utf8") : "";
  if (/(^|[\r\n])\s*\.env\s*($|[\r\n])/.test(text)) return;
  fs.appendFileSync(gi, (text.endsWith("\n") || !text ? "" : "\n") + "\n# local API keys\n.env\n");
}

export function findWaScript() {
  const home = process.env.HOME || "";
  const cache = path.join(home, ".codex/plugins/cache/atomi-whatsapp");
  const matches = [];
  function walk(d, depth) {
    if (depth > 6 || !fs.existsSync(d)) return;
    for (const name of fs.readdirSync(d)) {
      const p = path.join(d, name);
      let st;
      try {
        st = fs.statSync(p);
      } catch {
        continue;
      }
      if (st.isDirectory()) walk(p, depth + 1);
      else if (name === "wa.mjs") matches.push(p);
    }
  }
  walk(cache, 0);
  matches.sort();
  const newest = matches.at(-1);
  if (newest) return newest;
  const fallback = "/Users/aviz/atomi-whatsapp/plugins/whatsapp/skills/whatsapp/scripts/wa.mjs";
  return fs.existsSync(fallback) ? fallback : null;
}
