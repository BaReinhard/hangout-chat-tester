const assert = require('assert');
const hangoutChatTester = require('../index.js');

describe('hangoutChatTester', () => {
  it('Text is a valid prop', () => {
    assert(true, hangoutChatTester({ text: '' }));
  });
  it('Number is an invalid prop and should throw error of incorrect property', () => {
    try {
      hangoutChatTester({ number: '' }, true);
    } catch (err) {
      assert('number is not a valid property', err.description);
    }
  });
  it('Number is an invalid prop and should not throw error of incorrect property', () => {
    assert(!hangoutChatTester({ number: '' }));
  });
  it('Empty object should return false', () => {
    assert(!hangoutChatTester({}));
  });
  it('Should be true', () => {
    function createTextCard(text) {
      return { text };
    }
    let result = hangoutChatTester(createTextCard('hi'));
    assert(result);
    console.log(result);

  });
});
