// Code your solutions in this file
function writeCards(arr){
    let cards = []
    for (let i = 0; i < arr.length; i++){
        cards.push(`Thank you, ${arr[i]}, for the wonderful surprise gift!`) 
    };
    return cards;
};

function countdown(num){
    let i = num
    while (i >= 0){
        console.log(i--)
    }
};