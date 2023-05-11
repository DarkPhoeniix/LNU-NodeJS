
const fs = require('fs');

try {
    const data = fs.readFileSync('input.txt', 'utf8');

    const words = data.split(/\s+/);

    const even_words = words.filter(word => word.length % 2 === 0);
    const odd_words = words.filter(word => word.length % 2 !== 0);

    fs.writeFileSync('out-even.txt', even_words.join(' '));
    fs.writeFileSync('out-odd.txt', odd_words.join(' '));
} catch (err) {
    console.error(err);
}
