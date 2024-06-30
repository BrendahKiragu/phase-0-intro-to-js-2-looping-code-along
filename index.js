//Test 1
// creates an array of names list
const names =  ["Guadalupe", "Ollie", "Aki"]

function writeCards (names){
  //creates a new empty array to hold the "thank you" messages
  let cardsMessage = [];

  //iterates through the input array
  for (let i=0; i< names.length; i++) {
  
  //creates the `thank you..` message using string interpolation
    let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`

    //adds the message to the new array
    cardsMessage.push(message)
  }
  return cardsMessage; 
}

console.log(writeCards(names));

//# Test 2

/*const numbers = [0, 1, 2, 3, 4]

function countDown (numbers) {
  let i = numbers.length -1;
  while ( i >=0){
    console.log(numbers[i]);
    i--;
  }
return i;
}*/

function countDown(){
  let i = 10;
  while (i >= 0){
    console.log(i);
    i--
  }
}

console.log(countDown())