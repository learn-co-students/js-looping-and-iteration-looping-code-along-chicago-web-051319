function writeCards (name, eventName){
  let arr = [];
  for(let i = 0; i < name.length; i++){
    arr.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`)
  }
  return arr;
}

writeCards()


function countdown(count){
    while (count >= 0){
    console.log(count);
    count--;
  }
}

countdown()
