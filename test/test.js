import assert from 'assert'
import { expect } from 'chai';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      expect([1,2,3].indexOf()).to.be.a('number');
    });
  });
});
