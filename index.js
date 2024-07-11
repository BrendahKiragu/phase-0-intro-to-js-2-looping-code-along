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
//console.log(writeCards(names));


//# Test 2
function countDown(){
  let i = 10;
  while (i >= 0){
    console.log(i);
    i--
  }
}
countDown()
