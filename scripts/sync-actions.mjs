#!/usr/bin/env node
/**
 * Regenerate src/generated.ts and tests/generated.test.ts.
 *
 * The API has 122 client actions. Writing them by hand would put every future
 * API change in five places — the n8n node, the MCP tools, the PHP SDKs, the
 * Python SDK and here — so they come from the same OpenAPI specification the
 * others use, via `sdk:generate-methods` in the proxy repository.
 *
 * Everything generated lands in files this script overwrites whole. Nothing
 * hand-written lives in them, so a regeneration can never lose an edit.
 *
 *     node scripts/sync-actions.mjs ../eazewhatsapp-proxy
 */

import { execFileSync } from "node:child_process";
import { existsSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const HEADER = `/**
 * Client actions generated from the WaAPI OpenAPI specification.
 *
 * DO NOT EDIT. Regenerate with:
 *
 *     node scripts/sync-actions.mjs ../eazewhatsapp-proxy
 *
 * Hand-written methods belong in client.ts, which extends this class.
 */
`;

const TEST_HEADER = `/**
 * Generated payload tests — one per client action.
 *
 * DO NOT EDIT. Regenerate with:
 *
 *     node scripts/sync-actions.mjs ../eazewhatsapp-proxy
 *
 * These methods hold no logic: they name an action and forward named fields.
 * So their real failure modes are a wrong action string and a field that is
 * dropped or swapped with its neighbour, and both are visible in the request
 * that leaves the SDK. Sample values carry each field's own name for exactly
 * that reason — identical values could not tell a swap from a correct call.
 */

import { test } from "vitest";
import { expectAction, fake } from "./helpers.js";
`;

function generate(proxy, ...args) {
  const stdout = execFileSync("php", ["artisan", "sdk:generate-methods", ...args], {
    cwd: proxy,
    encoding: "utf8",
    maxBuffer: 32 * 1024 * 1024,
  });
  // The command also reports how many methods it wrote, which is useful in a
  // terminal and a syntax error in a TypeScript file.
  return `${stdout.replace(/^\s*INFO\s+\d+ methods generated\.\s*$/gm, "").trimEnd()}\n`;
}

const count = (source, pattern) => (source.match(pattern) ?? []).length;

const proxy = resolve(process.argv[2] ?? "../eazewhatsapp-proxy");
if (!existsSync(join(proxy, "artisan"))) {
  console.error(`not a Laravel checkout: ${proxy}`);
  process.exit(1);
}

const methods = generate(proxy, "--flavour=typescript");
const interfaces = generate(proxy, "--flavour=typescript-types");
const tests = generate(proxy, "--flavour=typescript", "--tests");

const nMethods = count(methods, /^ {2}async \w+\(/gm);
const nInterfaces = count(interfaces, /^export interface /gm);
const nTests = count(tests, /^test\(/gm);

if (nMethods === 0) {
  console.error("the generator emitted nothing — check the spec path");
  process.exit(1);
}
if (nMethods !== nInterfaces) {
  console.error(`methods and option types disagree: ${nMethods} vs ${nInterfaces}`);
  process.exit(1);
}

writeFileSync(
  join(ROOT, "src", "generated.ts"),
  `${HEADER}${interfaces}
/** Every client action. \`WaAPI\` extends this. */
export abstract class GeneratedActions {
  /** Implemented by the client. */
  abstract action(
    name: string,
    payload?: Record<string, unknown>,
    instanceId?: number | string,
  ): Promise<any>;
${methods}}
`,
);

writeFileSync(join(ROOT, "tests", "generated.test.ts"), `${TEST_HEADER}${tests}`);

console.log(`wrote ${nMethods} methods, ${nInterfaces} option types and ${nTests} tests`);
