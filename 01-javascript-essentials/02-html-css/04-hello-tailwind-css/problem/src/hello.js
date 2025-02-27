import * as _ from 'lodash';

function createForm() {
  // Create a div element
  const div = document.createElement('div');
  div.id = 'form-container';
  // TODO: Set Tailwind CSS classes

  // Create an input element
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'name');
  input.setAttribute('placeholder', 'Enter your name');

  // TODO: Set Tailwind CSS classes

  // Create a button element
  const button = document.createElement('button');
  button.setAttribute('id', 'Submit');
  button.innerText = 'Submit';

  // TODO: Set Tailwind CSS classes

  // Append input and button to the inputButtonContainer
  div.appendChild(input);
  div.appendChild(button);

  // create a paragraph tag with id "greeting" within body
  const greeting = document.createElement('p');
  greeting.id = 'greeting';
  // TODO: Set Tailwind CSS classes

  // Append label, input, and button to the div
  div.appendChild(greeting);

  // Append the div to the body
  document.body.appendChild(div);
}

function greet(name) {
  // check if greeting already exists
  let greeting = document.getElementById('greeting');

  // show the greeting in paragraph tag
  // https://lodash.com/docs/4.17.15#startCase
  greeting.innerText = _.startCase(name) || 'No name provided';
}

export function renderHelloContainer() {
  createForm();

  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');

  document.getElementById('name').value = name;

  // When the button is clicked, call the greet function
  const submitButton = document.getElementById('Submit');
  const handleClick = function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    greet(name);
  };

  // Remove any existing event listener before adding a new one
  submitButton.removeEventListener('click', handleClick);
  submitButton.addEventListener('click', handleClick);
}