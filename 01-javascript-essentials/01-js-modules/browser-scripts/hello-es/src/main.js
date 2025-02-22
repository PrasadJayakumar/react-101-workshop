import { greet } from './hello.js';

function getNameAndGreet() {
    const name = prompt("Enter your name:");
    if (name) {
        greet(name);
    }
}

getNameAndGreet();