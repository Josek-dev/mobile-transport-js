
const readline = require('readline');
const Line = require('./line.js').Line;

let line = new Line();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Generating complete! Write 'start' to run first train!\n", (answer) => {
    if(answer == 'start'){
        console.log("Starting!");
        line.setTrains();
        line.startTrains(10);
    } else if (answer == 'exit'){
        console.log("Goodbye!");
        rl.close();
    }
});