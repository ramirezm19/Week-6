var expect = chai.expect

describe('MyWarGameFunctions', function() {
    describe('#createHand', function () {
        it('should be an array', function() {
            const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
                expect(typeof(suits)).to.equal("object");
        })
    })
    describe('#createHand', function () {
        it('should be an array', function() {
            const values = "2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14"
                expect(typeof(values)).to.equal("object");
        })
    })
})

