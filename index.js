const writeCards = (arr, eventName) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
  }
  return output;
};


const countdown = n => {
  while (n >= 0){
    console.log(--n+1);
  }
};
