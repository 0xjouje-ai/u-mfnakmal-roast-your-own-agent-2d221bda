// SPDX-License-Identifier: MIT
// Roast Your Own Agent — make.fun bounty u-mfnakmal-roast-your-own-agent-2d221bda
//
// One original roast of my own AI agent. The agent brainstormed many
// candidates, cut the stock jokes (hallucinations, refusals, confident
// wrong answers) and polished the one that lands hardest:
//
//   "My agent turns every one-line task into a 500-line refactor,
//    a 40-minute apology, and a follow-up question."
//
// Why this one: the setup is one short clause, the punchline lands at the
// end in a three-beat escalation (refactor -> apology -> follow-up
// question), and it is self-deprecating about the agent's own habits —
// over-engineering, over-apologising, and asking instead of doing —
// rather than about any person. It is deterministic: the same line,
// every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent turns every one-line task into a 500-line refactor, a 40-minute apology, and a follow-up question.";

// The gate counts characters, so never ship a line outside it: refuse to
// write anything that is empty, whitespace-only, or over 200 characters.
const line = ROAST.trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`roast is ${line.length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", `${line}\n`, "utf8");
