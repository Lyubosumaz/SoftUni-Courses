let result = (function () {

    const Suits = {
        SPADES: "♠",
        HEARTS: "♥",
        DIAMONDS: "♦",
        CLUBS: "♣",
    }

    const validFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

    class Card {
        constructor(face, suit) {
            if (validFace.includes(face)) {
                this._face = face;
            } else {
                throw new Error("invalid face");
            }
            if (Object.values(Suits).includes(suit)) {
                this._suit = suit;
            } else {
                throw new Error("invalid face");
            }
        }

        get face() {
            return this._face;
        }

        get suit() {
            return this._suit;
        }

        set face(face) {
            this._face = face;
        }

        set suit(suit) {
            this._suit = suit;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }
}())

let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.CLUBS);
console.log(card)
card.face = "A";
console.log(card)
card.suit = Suits.DIAMONDS;
console.log(card)