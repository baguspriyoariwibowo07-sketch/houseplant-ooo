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

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
