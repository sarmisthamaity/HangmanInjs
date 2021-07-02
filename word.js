const random = require('random');
const string = require('string');

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
// choose_word()

module.export = choose_word() ;
