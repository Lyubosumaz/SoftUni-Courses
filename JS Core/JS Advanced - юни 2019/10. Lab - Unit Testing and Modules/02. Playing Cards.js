function solve(string1, string2) {
    let result = "";
    let face = false;
    let suit = false;
    switch (string1) {
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
        case "J":
        case "Q":
        case "K":
        case "A":
            face = true;
            result = string1;
            break;
    }
    switch (string2) {
        case "S":
            suit = true;
            result += "\u2660";
            break;
        case "H":
            suit = true;
            result += "\u2665";
            break;
        case "D":
            suit = true;
            result += "\u2666";
            break;
        case "C":
            suit = true;
            result += "\u2663";
            break;
    }

    if (face === true && suit === true) {
        return result;
    } else {
        throw new Error("Error");
    }
}


// function makeCard(face, inputSuit) {
//     let validFace  = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
//     let validSuit = {
//         S:'\u2660',
//         H:'\u2665',
//         D:'\u2666',
//         C:'\u2663'
//     };

//     if(!validFace.includes(face) || !validSuit[inputSuit] ){
//         throw new Error('Error');
//     }

//     let card = {
//         face: face,
//         suit: validSuit[inputSuit],
//         toString: function () {
//             return `${this.face}${this.suit}`;
//         }
//     };
//     return card;
// }