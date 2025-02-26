import * as _ from 'lodash';

function createForm() {
  // Create a div element
  const div = document.createElement('div');

  // Create a label element
  const label = document.createElement('label');
  label.setAttribute('for', 'name');
  label.innerText = 'Enter your name:';

  // Create an input element
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'name');

  // Create a button element
  const button = document.createElement('button');
  button.setAttribute('id', 'Submit');
  button.innerText = 'Submit';

  // Append label, input, and button to the div
  div.appendChild(label);
  div.appendChild(input);
  div.appendChild(button);

  // Append the div to the body
  document.body.appendChild(div);
}

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
  greeting.innerText = _.startCase(name) || 'No name provided';

  // show the greeting in console
  console.log(`Hello, ${name}!`);
}

export function renderHelloContainer() {
  createForm();

  // SOLUTION: Accept name in query string
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');

  // SOLUTION: Set the name in the input field
  document.getElementById('name').value = name;

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