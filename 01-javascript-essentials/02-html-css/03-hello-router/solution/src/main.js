import { getNameAndGreet } from './hello.js';

// Ensure the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function () {
    getNameAndGreet();
});