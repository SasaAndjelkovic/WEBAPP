let funnyWords = require('funny-words');
const movieQuote = require("popular-movie-quotes");
var oneLinerJoke = require('one-liner-joke');

const shuffleLetters = t => funnyWords (t);
console.log (shuffleLetters('Da li radi ovako'))
// Output could be something "Da li radi ovako!"

 
console.log(movieQuote.getRandomQuote())


