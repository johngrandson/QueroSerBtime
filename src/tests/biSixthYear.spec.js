const api = require('../');

test('must return true if its bisexth', () => {
  return api().then(data => {
    expect(data).toBe(true);
  });
});