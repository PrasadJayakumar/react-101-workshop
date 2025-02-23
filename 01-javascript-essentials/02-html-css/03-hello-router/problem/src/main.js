import { getNameAndGreet } from './hello.js';
import { renderAddContainer } from './add.js';

// Ensure the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function () {
    getNameAndGreet();
    add();
});