// Code your solutions in this file
function writeCards(array, event) {
  const cards = []
  for (let i = 0; i < array.length; i++)
  {
    cards.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
  }
  return cards
};

function countdown(number) {
  let i = 0;
  while (i <= number) {
    console.log(number--);
  }
}
