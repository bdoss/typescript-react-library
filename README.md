# typescript-react-library
Boilerplate for React component library using TypeScript.

Peer Dependencies:

* react
* react-dom

Dev Dependencies:

* cross-env
* rimraf
* typescript
* tslint
* ts-node (run typescript files directly in node)
* jsdom (simulated DOM environment for nodejs)
* nyc (istanbul code coverage)
* mocha (nodejs test runner)
* chai (assertions)
* enzyme (React test utility)
* sinon (utils for mocking, stubs, etc)

## Building
`npm run build`

## Testing
Single run: `npm test`

No lint check: `npm run testonly`

Watch mode: `npm test-watch`