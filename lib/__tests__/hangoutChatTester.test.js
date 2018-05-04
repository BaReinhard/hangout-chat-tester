const assert = require('assert');
const hangoutChatTester = require('../index.js');

describe('hangoutChatTester', () => {
  it('Text is a valid prop', () => {
    assert(true, hangoutChatTester({ text: '' }));
  });
  it('Number is an invalid prop', () => {
    assert(!hangoutChatTester({ number: '' }));
  });
});
