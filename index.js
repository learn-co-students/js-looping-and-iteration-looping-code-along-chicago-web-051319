// Code your solutions in this file
function writeCards(nameArr , eventName){
    temp = []
    for(let i = 0; i < nameArr.length; i++){
        temp[i] = (`Thank you, ${nameArr[i]}, for the wonderful ${eventName} gift!`)
        console.log(temp[i])
    }
    return temp
}

function countdown(num){
    while(num >= 0){
        console.log(num);
        num--;
    }
}