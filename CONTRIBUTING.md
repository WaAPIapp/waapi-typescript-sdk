# Contributing

## The method surface is generated

The API exposes 122 client actions. They come from the same OpenAPI
specification the n8n node and the MCP tools are built from, via
`sdk:generate-methods` in the proxy repository:

```bash
node scripts/sync-actions.mjs ../eazewhatsapp-proxy
# wrote 122 methods, 122 option types and 122 tests
```

That overwrites two files whole, and nothing hand-written lives in either:

- `src/generated.ts` — `GeneratedActions` plus one `*Options` interface per action
- `tests/generated.test.ts` — one payload test per action

The script refuses to write if the method count and the option-type count
disagree, or if the generator emitted nothing.

Hand-written code lives in `src/client.ts`, which extends `GeneratedActions`.
Add something there only if it cannot come from the spec — the instance
endpoints are the current example, because they are ordinary REST routes rather
than client actions.

## Conventions

- One options object per method. TypeScript has no keyword arguments, and
  `sendMedia` has 11 optional fields; a positional signature would force
  callers to pass `undefined` repeatedly to reach the last one.
- Property names keep the API's `camelCase` spelling, so the emitted payload
  needs no translation layer.
- Optional fields are `?:` and are dropped from the body by `prune()`. Never
  send explicit nulls.
- Anything checkable without a request — a missing instance id, an empty token
  — throws before the call goes out.

## Tests

```bash
npm test
```

No test may touch the network: pass a `fetch` into the client, as `tests/helpers.ts` does.

## Releasing

`npm publish` takes its version from `package.json` and ignores the git tag, so
the two have to be moved together. `npm version` does both in one step:

```bash
npm version patch          # bumps package.json, commits, creates the v* tag
git push --follow-tags     # pushes the commit and the tag
```

The tag triggers `publish.yml`, which refuses to run if the tag and
`package.json` disagree — tagging without bumping would otherwise republish the
previous version and fail at the last step, on a tag that cannot be reused.
