// Code your solutions in this file

function writeCards(names) {
  let thankYou = [];
  for (let i = 0; i < names.length; i++) {
    thankYou.push("Thank you, " + names[i] + ", for the wonderful surprise gift!");
  }
  return thankYou;
}

function countdown(count) {
  for (let i = 0; i <= count; i++){
    console.log(i)
  }
}
