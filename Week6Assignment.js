//Put all your classes at the top
//This class creates a card

class Card {
    constructor (suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}
//this class combines all the suits and values to create a full 52-card deck
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

//console.logging to be able to see the deck
let newDeck = new Deck();
console.log(newDeck);

//this class is to describe/create a player
class Player {
    constructor (name) {
        this.name = name;
        this.hand = [];
        this.score = 0
    }
}

//The StartGame class is to start the game by having the deck be shuffled and dealt between the two players.
class StartGame {
    constructor(deck, players) {
        this.deck = deck;
        this.players = players;
    }

    shuffleCards() {
        for (let i = this.deck.deckOfCards.length - 1; i > 0; i--){
            let z = Math.floor(Math.random() * (i + 1));
            let temp = this.deck.deckOfCards[i];
            this.deck.deckOfCards[i] = this.deck.deckOfCards[i];
            this.deck.deckOfCards[z] =temp;
        }
    }

    dealCards() {
        let list = this.deck.deckOfCards;
        let half = Math.ceil(list.length / 2);

//this console.log was to verify that the dealing of the cards would work to give each player 26 cards.
        //console.log("this half the deck", half);

        this.players[0].hand = list.slice (0, half);
        this.players[1].hand = list.slice (-half);
    }     
 //created this function to be able to display what player was the winner of the game.   
    displayWinner(score) {
        if (score[0] > score[1]) {
            alert('Game over. Happy wins the war!')
        } else alert('Game over. Ruby wins the war!')    
    } 

//created this function is to compare cards between the players and be able to decide who wins the round and also add points to the winning player each round.
    compareCards() {
        let player1Score = 0;
        let player2Score = 0;
        let playersScore = [];

    for (let i = 0; i < this.players[0].hand.length; i++) {
        if (player1.hand[i].value < player2.hand[i].value) {
            player2Score++     
            alert(`Ruby wins round ${i+1}
            Happy's card: ${player1.hand[i].rank} of ${player1.hand[i].suit}
            Ruby's card: ${player2.hand[i].rank} of ${player2.hand[i].suit}
            Happy's score: ${player1Score}
            Ruby's score: ${player2Score}`);
        } else if (player1.hand[i].value > player2.hand[i].value) {    
            player1Score++
            alert(`Happy wins round ${i+1}
            Happy's card: ${player1.hand[i].rank} of ${player1.hand[i].suit}
            Ruby's card: ${player2.hand[i].rank} of ${player2.hand[i].suit}
            Happy's score: ${player1Score}
            Ruby's score: ${player2Score}`);
        } else {
                alert(`Round: ${i+1} is a tie. No points awarded.
                Happy's card: ${player1.hand[i].rank} of ${player1.hand[i].suit}
                Ruby's card: ${player2.hand[i].rank} of ${player2.hand[i].suit}
                Happy's score: ${player1Score}
                Ruby's's score: ${player2Score}`);
        }

    }
    playersScore.push(player1Score, player2Score) 
        return playersScore;
}
        
    
}

let fullDeck = new Deck();
let player1 = new Player("Happy");
let player2 = new Player("Ruby");
let score 

console.log(player1);
console.log(player2);

const game = new StartGame(fullDeck, [player1, player2]);

game.shuffleCards();
game.dealCards();
score = game.compareCards();
game.displayWinner(score);

//this console.logs were to verify that each player was getting a shuffled 26-card hand.
// console.log('this is player1 hand', player1.hand);
// console.log('this is player2 hand', player2.hand);

//use this console to print one card at a time per player. The number in the [] is the position of the card. You can use this to iterate/create a loop so that it iterates through all the cards for both players.
// console.log(player1.name, player1.hand[0]);
// console.log(player2.name, player2.hand[0]);

