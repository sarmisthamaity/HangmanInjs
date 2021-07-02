const readlineSync = require('readline-sync');
const random = require('random');
const string = require('string');
const images = require('./images.js');
const word = require('./word.js')
// console.log(word);

var imageIndex;

function afterAttemptaWrongletter(imageIndex, images){
    while(imageIndex < images.length){
        pic = images[imageIndex]
        imageIndex++;
        return pic
    };
};


function is_word_guessed(secret_word, letters_guessed){
    return false
};

function get_guessed_word(secret_word, letters_guessed){
    index = 0
    guessed_word = " "
    while (index < secret_word.length){
        if (letters_guessed.includes(secret_word[index])){
            guessed_word += secret_word[index]
        }
        else{
            guessed_word += "_"
        }
        index++;
    }
    return guessed_word
};

function get_available_letters(){
    const length = 26
    let i = 65 + length + 6
    return [...Array(length)]
      .reduce(function (allAlphabate) {
        return allAlphabate + String.fromCharCode(i++)
      },'');
};

function hangman(secret_word){
    console.log("Welcome to the game, Hangman!");
    console.log(`I am thinking of a word that is ${secret_word.length} letters long`);
    console.log("");

    letters_guessed = []
    
    available_letters = get_available_letters(letters_guessed);
    console.log("Available letters: " + available_letters);
    
    for(let index = 0; index<secret_word.length; index++){
        guess = readlineSync.question("Please guess a letter: ")
        letter = guess.toLowerCase()
        if (secret_word.includes(letter)){
            letters_guessed.push(letter)
            available_letters = available_letters.replace(letter,"_")
            console.log("available_letters: ",available_letters);
            console.log("Good guess: " + get_guessed_word(secret_word, letters_guessed))
            console.log("")
        }
        else if (is_word_guessed(secret_word, letters_guessed) == true){
            console.log(" * * Congratulations, you won! * * ")
            console.log("")
        }
        else{
            console.log("Oops! That letter is not in my word: " + get_guessed_word(secret_word, letters_guessed))
            letters_guessed.push(letter)
            console.log(letters_guessed);
            console.log("")
            callImage = afterAttemptaWrongletter(index, images)
            console.log(callImage);
        };
    };
    
};

secret_word = word
hangman(secret_word);