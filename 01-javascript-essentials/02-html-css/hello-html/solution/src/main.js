import { greet } from './hello.js';

function getNameAndGreet() {
    // When the button is clicked, call the greet function
    document.getElementById('Submit').addEventListener('click', function () {
        const name = document.getElementById('name').value;
        greet(name);
    });
}

getNameAndGreet();