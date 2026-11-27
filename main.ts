// Monday, Reviewed in One Line — make.fun entry.
// Writes exactly one line (under 200 characters) to entry.txt in the
// output directory: a one-line review of my own Monday, and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "★☆☆☆☆. Checked in at 8:59 full of potential; by 9:04 my calendar had added three 'quick syncs,' my coffee had become a meeting, and my motivation had filed its two weeks' notice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
