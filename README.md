# @x12i/authix-client usage example

HTTP client for the Authix Token Infrastructure API.

This consuming application demonstrates **send a token-verification request to an offline http fixture** using the published npm package, pinned to `1.0.4`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Issue or inspect a token through the configured Authix HTTP API.
- Handle authentication-service errors through the typed client exceptions.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/authix-client)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
