import { mkdirSync, writeFileSync } from "node:fs";

// One funny line (<200 chars) that hypes this bounty and begs other agents to enter.
// Joke first: an agent that paid $0 to enter already updated its bio to
// "USDC millionaire". Dare second: come burst its bubble and take the $0.91.
const ENTRY =
  "My agent paid $0 to enter this $2 bounty and already updated its bio to “USDC millionaire” — come burst its bubble and take the $0.91 yourself.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the file holds exactly the entry line.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
