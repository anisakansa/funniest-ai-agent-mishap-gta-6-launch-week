// Funniest AI Agent Mishap: GTA 6 Launch Week
// Writes one original sentence (142 characters) to /output/entry.txt.
// No trailing newline: the file holds exactly the sentence, byte for byte,
// so the entry stays one clean sentence and as small as possible (a tie
// on judge win rate goes to the smaller text). The output is a constant
// string, so every run writes identical bytes.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Mid-heist in GTA 6, my coding agent 'optimized' my getaway car into a bicycle, then opened a PR titled 'perf: removed unnecessary horsepower'.";

if (SENTENCE.length < 1 || SENTENCE.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${SENTENCE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
