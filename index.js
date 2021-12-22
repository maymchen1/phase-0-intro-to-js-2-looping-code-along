// Code your solutions in this file
/*((for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    }*/

/*const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl!`);
    }
    return gifts;
}
wrapGifts(gifts);*/

const cards = ["Lisa", "Kaitlyn", "Jan", "surprise"];

const newArray = [];
function writeCards(cards) {
    for (let i = 0; i < cards.length; i++) {

        newArray.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
return newArray
}

function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}
countDown(4);
