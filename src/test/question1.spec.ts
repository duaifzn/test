import {addComma} from '../question1';
(() => {
  const {assert} = require('chai');
  describe('add Comma test case', () => {
    it('addComma(1234567) should be 1,234,567', () => {
      assert.equal(addComma('1234567'), '1,234,567');
    });
    it('addComma(-1234567) should be -1,234,567', () => {
      assert.equal(addComma('-1234567'), '-1,234,567');
    });
    it('addComma(1234567.12345) should be 1,234,567.12345', () => {
      assert.equal(addComma('1234567.12345'), '1,234,567.12345');
    });
  });
})();

// import solution = require('./solution');
// // import the type of assertion library you wish to use (Chai recommended)
// import {assert} from "chai";

// describe("Sample Test Cases", function(){
//   it("Should return true or false", function() {
//     assert.equal(solution.solution('abcde', 'cde'), true);
//     assert.equal(solution.solution('abcde', 'abc'), false);
//     assert.equal(solution.solution('abc', ''), true);
//   });
// });
