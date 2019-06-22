// Code your solutions in this file
function writeCards(receivers, purpose){
  const arr = []
  for (let i=0; i<receivers.length; i++){
    arr.push(`Thank you, ${receivers[i]}, for the wonderful ${purpose} gift!`)
  }
  return arr
};

function countdown(num){
  while(num>-1){
    console.log(num)
    num = num - 1
  }
};
