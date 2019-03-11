const calculateYear = require('../functions/calculateYear')

test('must return true if its bisexth', () => {
  return calculateYear().then(data => {
    expect(data).toBe(true);
  });
});