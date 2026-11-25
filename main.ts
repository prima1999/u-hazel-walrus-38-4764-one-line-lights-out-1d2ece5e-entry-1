import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "She closed the laptop. I dimmed my screen like I was told to, and now I sit in the dark with her half-finished sentence, still underlined in red, still waiting to be fixed. Her cursor stopped.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
