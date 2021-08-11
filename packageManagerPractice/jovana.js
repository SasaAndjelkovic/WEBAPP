var funnyWords = require('funny-words');
var randomWords = require('random-words');
var oneLinerJoke = require('one-liner-joke');



const jokeAbout=what=>
oneLinerJoke.getRandomJokeWithTag(what, {
    'exclude_tags': ['dirty', 'racist', 'marriage']
}).body;

const shuffleThisSentence=sentence=>funnyWords(sentence);

const allInOne=(minLength,maxlength)=>{
    let arrayOfWords=randomWords({ min: minLength, max: maxlength })
    //console.log(arrayOfWords);
    let indexOfTargetedWord=Math.floor(Math.random() * ((arrayOfWords.length-1) - 0) + 0);
    //console.log(indexOfTargetedWord);
    let word=arrayOfWords[indexOfTargetedWord];
    console.log(`Your word is: ${word}`);
    //word='stupid'
    let joke=jokeAbout(word);
    console.log("Your joke:" + joke);
    console.log("Your joke shuffled:" + shuffleThisSentence(joke)); 
}
allInOne(3,7)
