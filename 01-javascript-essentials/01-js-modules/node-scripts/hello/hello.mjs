import readline from 'readline';

// readline: A built-in Node.js module for reading input from the console.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// readline.question(): Prompts the user for input and executes a callback function when the input is received.
rl.question('Enter your name: ', name => {
    // console.log(): Displays the greeting in the console.
    console.log(`Hello, ${name}!`);

    // readline.close(): Closes the input stream.
    rl.close();
});
