import { getNameAndGreet } from './hello.js';
import { renderAddContainer } from './add.js';

// Ensure the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function () {
    // TODO: Call one of the function based on the route path
    getNameAndGreet();
    renderAddContainer();
});