import { getTimeBasedGreeting } from 'TimeUtils';

function createForm(onSubmit) {
  // <div>
  //   <label for="name">Enter your name:</label>
  //   <!-- Create a textbox for the user to enter their name -->
  //   <input type="text" id="name" />
  //   <!-- Create a button for the user to click -->
  //   <button id="Submit">Submit</button>
  // </div>

  const div = document.createElement('div');
  div.style = 'flex-direction: row; display: flex; gap: 10px;';

  const label = document.createElement('label');
  label.setAttribute('for', 'name');
  label.textContent = 'Enter your name:';
  div.appendChild(label);

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'name');
  div.appendChild(input);

  const button = document.createElement('button');
  button.setAttribute('id', 'submit');
  button.textContent = 'Submit';
  div.appendChild(button);

  document.body.appendChild(div);

  button.addEventListener('click', () => {
    onSubmit(input.value);
    div.remove();
  });
}

function createFormV2(onSubmit) {
  // <div>
  //   <label for="name">Enter your name:</label>
  //   <!-- Create a textbox for the user to enter their name -->
  //   <input type="text" id="name" />
  //   <!-- Create a button for the user to click -->
  //   <button id="Submit">Submit</button>
  // </div>

  const div = document.createElement('div');
  div.style = 'flex-direction: row; display: flex; gap: 10px;';
  div.innerHTML = `
    <label for="name">Enter your name:</label>
    <input type="text" id="name" />
    <button id="submit">Submit</button>
  `;

  const input = div.querySelector('input');
  const button = div.querySelector('button');
  button.addEventListener('click', () => {
    onSubmit(input.value);
    div.remove();
  });

  document.body.appendChild(div);
}

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
    // createForm(handleFormSubmit);
    createFormV2(handleFormSubmit);
  } catch (error) {
    console.error('Error displaying greeting:', error);
    alert('Sorry, something went wrong. Please try again.');
  }
}

