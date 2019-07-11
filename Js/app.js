// var doesCoreyLikePizza = prompt('Does Corey like pizza?'); 


// if (doesCoreyLikePizza.toLowerCase() === 'yes') {
//   alert('Absolutely he likes pizza');
// } else {
//   alert('You have entered the complete wrong answer, TRY AGAIN');
// }

// while(condition is !== yes){
//  prompt(Wrong answer, try again)

// var doesCoreyLikePizza = prompt('Does Corey like Pizza?');
// if (doesCoreyLikePizza.toLowerCase() === 'yes' || doesCoreyLikePizza.toLowerCase() === 'y') {
//   alert('Absolutely Correct!');
// } else if (doesCoreyLikePizza.toLowerCase() != 'no' || doesCoreyLikePizza.toLowerCase() != 'n') {
//   alert('WRONG!');
// } else {
//   alert('WRONG!');
// }

// var doesCoreyLikeTheOffice = prompt('Does Corey like the Office?');
// if (doesCoreyLikeTheOffice.toLowerCase() === 'yes' || doesCoreyLikeTheOffice.toLocaleLowerCase() === 'y') {
//   alert('Abosultely Right!');
// } else if (doesCoreyLikeTheOffice.toLowerCase() != 'no' || doesCoreyLikeTheOffice.toLowerCase() != 'n') {
//   alert('Wrong anwser!');
// } else {
//   alert('Wrong answer!');
// }

// var doesCoreyLikeWine = prompt('Does Corey like wine?');
// if (doesCoreyLikeWine.toLowerCase() === 'yes' || doesCoreyLikeWine.toLowerCase() === 'y') {
//   alert('Abosultely wrong!');
// } else if (doesCoreyLikeWine.toLowerCase() != 'no' || doesCoreyLikeWine.toLowerCase() != 'n') {
//   alert('Correct!');
// } else {
//   alert('Correct!');
// }

// var doesCoreyLikeSalad = prompt('Does Corey like Salads?');
// if (doesCoreyLikeSalad.toLowerCase() === 'yes' || doesCoreyLikeSalad.toLowerCase() === 'y') {
//   alert('Abosultely Right!');
// } else if (doesCoreyLikeSalad.toLowerCase() != 'no' || doesCoreyLikeSalad.toLowerCase != 'n') {
//   alert('Wrong anwser!');
// } else {
//   alert('Wrong answer!');
// }

// var doesCoreyLikeNeckCramps = prompt('Does Corey like neck cramps?');
// if (doesCoreyLikeNeckCramps.toLowerCase() === 'yes' || doesCoreyLikeNeckCramps.toLowerCase() === 'y') {
//   alert('Abosultely wrong!');
// } else if (doesCoreyLikeNeckCramps.toLowerCase() != 'no' || doesCoreyLikeNeckCramps.toLowerCase() != 'n') {
//   alert('Right anwser!');
// } else {
//   alert('Right answer!');
// }

// var likesStrangerThings = prompt('Do you like Stranger Things?');
// likesStrangerThings = likesStrangerThings.toLowerCase();

// if(likesStrangerThings === 'yes'){
//   alert('I like it too!');
// } else {
//   alert('That sucks');

// }


var coreysFavoriteDogArray = ['Golden Retriever','bulldog','german sheppard','labs'];
var coreysFavoriteDog = 'Golden Retriever';
var guessCounter = 0; 

while(guessCounter < 3) {

  var guessCoreysFavoriteDog = prompt('What is Corey\'s favorite Dog?');

  if(guessCoreysFavoriteDog === coreysFavoriteDog) {
    alert('Great Job!!!')
    break;
  } else {
    alert('Your the worst')
  }
  console.log('My favorite Dog is a ' + coreysFavoriteDog)
  guessCounter++;
}


var coreysFavoriteFoodArray = ['Pizza', 'Spaghetti', 'Pasta', 'Cheese'];
var coreysFavoriteFood = 'Pizza';
guessCounter = 0; 

while(guessCounter < 3) {

  var guessCoreysFavoriteFood = prompt('What is Corey\'s favorite food?');

  if(guessCoreysFavoriteFood === coreysFavoriteFood) {
    alert('Great Job!!!')
    break;
  } else {
    alert('Pathetic')
  }
  console.log('My favorite food is ' + coreysFavoriteFood)
  guessCounter++;
}

var coreysFavoriteSportArray = ['Lacrosse', 'baseball', 'football','basketball'];
var coreysFavoriteSport = 'Lacrosse';
guessCounter = 0;

while(guessCounter < 3) {
  var guessCoreysFavoriteSport = prompt('What is Corey\'s favorite sport?');

  if(guessCoreysFavoriteSport === coreysFavoriteSport) {
    alert('Great Job, nicely done1!')
    break;
  } else {
    alert('You shouldn/t have been born')
  }
  console.log('My favorite sport is ' + coreysFavoriteSport)
  guessCounter++;
}







// for (var i = 0; i < 4; i++) {

//   if (coreysFavoriteDog === guessCoreysFavoriteDog) {
//     console.log('My favorite Dog is ' + coreysFavoriteDog);
//   alert('Congrats, you are correct!');
// } else {
//   alert('Wrong answer, try again!');
// }

// }
