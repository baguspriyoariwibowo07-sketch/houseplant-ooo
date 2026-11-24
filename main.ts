// The Houseplant Out-of-Office
// Writes a single out-of-office auto-reply to /output/entry.txt.
//
// The reply was authored in-session for this entry: the houseplant
// answers in office-speak turned back on the office — it is out of
// office because it has been put on a performance plan for not
// growing, and it routes all sunlight complaints to HR. The plant's
// own life (growing, sunlight) drives the joke, and the corporate
// machinery is the surprise. It avoids the field's saturated angles:
// no "last watered in March", no indifferent cactus, no
// photosynthesizing puns, no unionized fern.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office: on a performance plan for not growing. " +
  "Direct all sunlight complaints to HR.";

// Guard mirrors the sealed scorer's gate: /output/entry.txt must be
// UTF-8 text of 1 to 120 characters, a single line, not only white
// space. An entry outside those limits is never judged and takes no
// prize, so validate the line against the same limits before writing
// it out — fail fast if the line ever drifts outside the gate.
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 120) {
    throw new Error(`line must be 1-120 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("line must be a single line");
  }
}

validateEntry(LINE);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
