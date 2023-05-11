
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

async function count_words(filepath) {
    const data = await readFile(filepath, { encoding: "utf8", flag: "r" });
    const words = data.split(" ");

    const odd_words = [];
    const even_words = [];

    for (let word in words) {
        if (word.length % 2 === 0) {
            even_words.push(words[word]);
        } else {
            odd_words.push(words[word]);
        }
    }

    fs.writeFileSync("out-odd.txt", odd_words.join(" "));
    fs.writeFileSync("out-even.txt", even_words.join(" "));
}

try {
    count_words("./input.txt");
} catch (err) {
    console.error(err);
}
