function greet(name) {
  let greeting = document.getElementById('greeting');

  if (!greeting) {
    // SOLUTION: Create a pragraph dynamically
    greeting = document.createElement('p');
    greeting.id = 'greeting';

    // SOLUTION: Append the paragraph to the body
    document.body.appendChild(greeting);
  }

  // SOLUTION: Show the greeting in the paragraph tag
  greeting.innerText = name;

  // show the greeting in console
  console.log(`Hello, ${name}!`);
}

export function renderHelloContainer() {
  // When the button is clicked, call the greet function
  const submitButton = document.getElementById('Submit');
  const handleClick = function () {
    const name = document.getElementById('name').value;
    greet(name);
  };

  // Remove any existing event listener before adding a new one
  submitButton.removeEventListener('click', handleClick);

  // SOLUTION: When the button is clicked, call the greet function
  submitButton.addEventListener('click', handleClick);
}