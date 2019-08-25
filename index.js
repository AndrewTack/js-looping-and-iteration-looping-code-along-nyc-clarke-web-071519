// Code your solutions in this file
function writeCards(array, event) {
    const thankYouArray = []
    for (let i = 0; i < array.length; i++) {
        thankYouArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouArray
}

function countdown( integer ) {
    while ( integer > 0 ) {
      console.log( integer );
      integer -= 1;
    }
    console.log( integer );
  }
  

