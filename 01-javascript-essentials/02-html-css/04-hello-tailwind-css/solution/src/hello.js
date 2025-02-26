import * as _ from 'lodash';

function createForm() {
  // Create a div element
  const div = document.createElement('div');
  div.id = 'form-container';
  // SOLUTION: Set Tailwind CSS classes
  div.className = 'container p-4';

  // Create an input element
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'name');
  input.setAttribute('placeholder', 'Enter your name');

  // SOLUTION: Set Tailwind CSS classes
  input.className = 'p-2 border rounded';

  // Create a button element
  const button = document.createElement('button');
  button.setAttribute('id', 'Submit');
  button.innerText = 'Submit';

  // SOLUTION: Set Tailwind CSS classes
  button.className = 'p-2 m-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500';

  // Append input and button to the inputButtonContainer
  div.appendChild(input);
  div.appendChild(button);

  // create a paragraph tag with id "greeting" within body
  const greeting = document.createElement('p');
  greeting.id = 'greeting';
  // SOLUTION: Set Tailwind CSS classes
  greeting.className = 'p-2 mt-4 text-xl font-semibold text-gray-800 h-6';

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