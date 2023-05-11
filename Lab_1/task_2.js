
function are_anagrams(lhs, rhs) {
    letters = {};

    for (let letter in lhs) {
        if (letter in letters) {
            letters[letter] += 1;
        } else {
            letters[letter] = 1;
        }
    }

    for (let letter in rhs) {
        if (letter in letters) {
            letters[letter] -= 1;
        } else {
            return false;
        }
    }

    for (let item in letters) {
        if (letters[item] != 0) {
            return false;
        }
    }

    return true;
}

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter first word: ", function (word1) {
    rl.question("Enter second word: ", function (word2) {
        console.log(are_anagrams(word1, word2) ? "Words are anagrams" : "Words are not anagrams");
        rl.close();
    });
});
