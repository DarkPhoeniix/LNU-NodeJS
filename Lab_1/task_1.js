const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter a: ", function (a) {
    rl.question("Enter b: ", function (b) {
        rl.question("Enter c: ", function (c) {
            const discriminant = b * b - 4 * a * c;

            if (discriminant < 0) {
                console.log("No solution");
            } else if (discriminant === 0) {
                const root = -b / (2 * a);
                console.log(`x1 = ${root}`);
            } else {
                const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                console.log(`x1 = ${root1}; x2 = ${root2}`);
            }
            
            rl.close();
        });
    });
});
