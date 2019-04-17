var assert = require('assert');
var test = require('../index');

describe('bitwise', () => {
    it('should be true', () => {
        assert.ok(test(0, false, false, false));
    });
    it('should be true', () => {
        assert.ok(test(1, true, false, false));
    });
    it('should be true', () => {
        assert.ok(test(2, false, true, false));
    });
    it('should be true', () => {
        assert.ok(test(3, true, true, false));
    });
    it('should be true', () => {
        assert.ok(test(4, false, false, true));
    });
    it('should be true', () => {
        assert.ok(test(5, true, false, true));
    });
    it('should be true', () => {
        assert.ok(test(6, false, true, true));
    });
    it('should be true', () => {
        assert.ok(test(7, true, true, true));
    });
});