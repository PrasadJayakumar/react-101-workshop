import { getTimeBasedGreeting } from 'TimeUtils';
import { createForm } from './createForm.js';

// Tree-shaking
// import _ from 'lodash';
import * as _ from 'lodash';

export function showGreetingPrompt() {
  try {

    const handleFormSubmit = (name) => {
      // Trim whitespace and check for empty string
      const sanitizedName = name?.trim();

      if (!sanitizedName) {
        alert("Please enter a valid name!");
        return;
      }

      const greeting = getTimeBasedGreeting();
      const startCaseName = _.startCase(sanitizedName)
      const h1 = document.querySelector('h1') || document.createElement('h1');
      h1.textContent = `${greeting}, ${startCaseName}!`;

      if (!h1.parentElement) {
        document.body.appendChild(h1);
      }
    }

    // Gets input from the user.
    createForm(handleFormSubmit);
  } catch (error) {
    console.error('Error displaying greeting:', error);
    alert('Sorry, something went wrong. Please try again.');
  }
}

