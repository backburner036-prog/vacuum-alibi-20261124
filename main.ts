// The Vacuum's Alibi — make.fun entry
// Line (124 bytes, 124 chars): deadpan machine voice, smug about its
// lidar, surprise turn (protected habitat for dust bunnies), punch at
// the end. Criteria order: funny excuse first, real laugh, machine
// voice, surprise, every word earns its place.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I did not miss that spot. My lidar logged it as a protected habitat for dust bunnies, and I strictly respect local wildlife.";

// Gate: entry must be 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`line length ${LINE.length} fails the 1–200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
