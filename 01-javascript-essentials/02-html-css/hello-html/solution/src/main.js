import { greet } from './hello.js';

function getNameAndGreet() {
    // Create a textbox for the user to enter their name
    // Create a button for the user to click
    // ???

    // When the button is clicked, call the greet function
    document.getElementById('Submit').addEventListener('click', function () {
        const name = document.getElementById('name').value;
        greet(name);
    });
}

getNameAndGreet();