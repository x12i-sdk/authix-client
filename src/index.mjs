import assert from 'node:assert/strict';
import { createAuthixClient } from '@x12i/authix-client';

const originalFetch = globalThis.fetch;
try {
  globalThis.fetch = async (url, init) => {
    assert(new URL(url).pathname.includes('verify'));
    assert.equal(JSON.parse(init.body).token, 'fixture-token');
    return Response.json({ valid: false, error: 'Fixture rejection', expired: false });
  };
  const client = createAuthixClient({ baseUrl: 'https://auth.example.invalid', apiKey: 'fixture-only' });
  const result = await client.verifyToken({ token: 'fixture-token' });
  assert.equal(result.valid, false);
  console.log(result);
} finally { globalThis.fetch = originalFetch; }
// This tests client request/response handling; token cryptography is not performed by this fixture.
