// Code your solutions in this file
function writeCards(arr, wrd) {

  const arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    arr2.push(`Thank you, ${arr[i]}, for the wonderful ${wrd} gift!`);
  };

  return arr2;
}

function countdown(num) {
  let countdown = 0;
  while(num >= countdown) {
    console.log(num);
    num--;
  };
};
