import startCase from 'lodash/startCase';

function greet(name) {
  // check if greeting already exists
  let greeting = document.getElementById('greeting');

  if (!greeting) {
    // create a paragraph tag with id "greeting" within body
    greeting = document.createElement('p');
    greeting.id = 'greeting';
    document.body.appendChild(greeting);
  }

  // show the greeting in paragraph tag
  // https://lodash.com/docs/4.17.15#startCase
  greeting.innerText = startCase(name) || 'No name provided';

  // show the greeting in console
  console.log(`Hello, ${name}!`);
}

export function getNameAndGreet() {
  // TODO: Handle URL query parameters. Extract 'name' and populate textbox.

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