import { renderHelloContainer } from './hello.js';
import { renderAddContainer } from './add.js';

// Ensure the DOM is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;
    if (path === '/hello') {
        renderHelloContainer();
    } else if (path === '/add') {
        renderAddContainer();
    }
});