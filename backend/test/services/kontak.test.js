const assert = require('assert');
const app = require('../../src/app');

describe('\'kontak\' service', () => {
  it('registered the service', () => {
    const service = app.service('kontaks');

    assert.ok(service, 'Registered the service');
  });
});
