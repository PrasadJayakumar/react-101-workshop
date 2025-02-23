import { getNameAndGreet } from './hello.js';
import { renderAddContainer } from './add.js';

// Ensure the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function () {
    //SOLUTION: Call one of the function based on the route path
    const path = window.location.pathname;
    if (path === '/hello') {
        getNameAndGreet();
    } else if (path === '/add') {
        renderAddContainer();
    }
});