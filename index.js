class Deck {
    constructor () {
        this.deckOfCards = [];
        this.createHand();
    }

    createHand() {
        const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
        let ranks = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                    this.deckOfCards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }
}