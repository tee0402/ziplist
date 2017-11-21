/* eslint-env mocha, chai */
/* global ziplist, ziplistTheSimpleWay chai */

describe('ziplist', function () {
  const list1 = [1, 2, 3];
  const list2 = [4, 5, 6];
  describe('ziplist()', function () {
    it('should return the list [1, 4, 2, 5, 3, 6]', function () {
      chai.expect(ziplist(list1, list2)).to.eql([1, 4, 2, 5, 3, 6]);
    });
  });
  describe('ziplistTheSimpleWay()', function () {
    it('should return the list [1, 4, 2, 5, 3, 6]', function () {
      chai.expect(ziplistTheSimpleWay(list1, list2)).to.eql([1, 4, 2, 5, 3, 6]);
    });
  });
});
