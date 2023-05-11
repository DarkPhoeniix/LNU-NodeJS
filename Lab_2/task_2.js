
const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const words = data.split(/\s+/);

    const odd_words = words.filter(word => word.length % 2 !== 0);
    const even_words = words.filter(word => word.length % 2 === 0);

    fs.writeFileSync('out-even.txt', even_words.join(' '));
    fs.writeFileSync('out-odd.txt', odd_words.join(' '));
});
