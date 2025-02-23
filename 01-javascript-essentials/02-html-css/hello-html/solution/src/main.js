import { greet } from './hello.js';

function getNameAndGreet() {
    // When the button is clicked, call the greet function
    const submitButton = document.getElementById('Submit');
    const handleClick = function () {
        const name = document.getElementById('name').value;
        greet(name);
    };

    // Remove any existing event listener before adding a new one
    submitButton.removeEventListener('click', handleClick);
    submitButton.addEventListener('click', handleClick);
}

// Ensure the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function () {
    getNameAndGreet();
});