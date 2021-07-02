const readlineSync = require('readline-sync');
const random = require('random');
const string = require('string');
const images = require('./images.js');
// // const word = require('./word.js')
// // console.log(word);
// // console.log(images);
var imageIndex = 0;
function load_words(){
    word_list = ["navgurukul", "learning", "kindness"]
    return word_list
};

function choose_word() {
    word_list = load_words()
    secret_word = word_list[Math.floor(Math.random() * word_list.length)];
    secret_word = secret_word.toLowerCase();
    return secret_word
};
// // console.log(choose_word());

function afterAttemptaWrongletter(images){
    
};
// afterAttemptawongletter()



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
      .reduce(function (accumulator) {
        return accumulator + String.fromCharCode(i++)
      }, '');
};

function hangman(secret_word){
    console.log("Welcome to the game, Hangman!");
    console.log(`I am thinking of a word that is ${secret_word.length} letters long`);
    console.log("");

    letters_guessed = []
    
    available_letters = get_available_letters(letters_guessed);
    console.log("Available letters: " + available_letters);
    
    for(let secretIndex = 0; secretIndex<secret_word.length; secretIndex++){
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
            console.log(letters_guessed, "IIIIIIII");
            console.log("")
            callImage = afterAttemptawongletter(, images)
            console.log(callImage);
        };
    };
    // else{
    //     console.log("Oops! That letter is not in my word: " + get_guessed_word(secret_word, letters_guessed))
    //     letters_guessed.push(letter)
    //     console.log("")
    // };
   
    // if (is_word_guessed(secret_word, letters_guessed) == true){
    //     console.log(" * * Congratulations, you won! * * ")
    //     console.log("")
    // }
          
    // else{
    //     console.log("Oops! That letter is not in my word: " + get_guessed_word(secret_word, letters_guessed))
    //     letters_guessed.push(letter)
    //     console.log("")
    // };
};

secret_word = choose_word()
hangman(secret_word);