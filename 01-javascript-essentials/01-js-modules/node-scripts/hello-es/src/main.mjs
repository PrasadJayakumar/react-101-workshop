import readline from 'readline';
import { greet } from './hello.mjs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// readline.question(): Prompts the user for input and executes a callback function when the input is received.
rl.question('Enter your name: ', name => {
    greet(name);

    // readline.close(): Closes the input stream.
    rl.close();
});