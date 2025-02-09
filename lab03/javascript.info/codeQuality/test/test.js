const assert = require('assert'); 
const pow = require('../pow'); 

describe("pow", function() {  
    it("2 в степени 3 должно быть 8", function() {
        assert.equal(pow(2, 3), 8);
    });

    it("3 в степени 3 должно быть 27", function() {
        assert.equal(pow(3, 3), 27);
    });

    it("4 в степени 0 должно быть 1", function() {
        assert.equal(pow(4, 0), 1);
    });
});
