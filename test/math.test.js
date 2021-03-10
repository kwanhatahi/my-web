const chai = require('chai');
const math = require('../src/math');
var expect = chai.expect

describe('add' , function(){
    it('expect return 3' , function(){
        expect(math.add(1,2)).to.eq(3);
    });

    it('expect return 5' , function(){
        expect(math.add(3,2)).to.eq(5);
    });
});

describe('sub' , function(){
    it('expect return -1' , function(){
        expect(math.sub(4,5)).to.eq(-1);
    });

    it('expect return 1' , function(){
        expect(math.sub(3,2)).to.eq(1);
    });
});