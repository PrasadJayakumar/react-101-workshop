function greet(name) {
  // SOLUTION: Show the greeting in paragraph tag
  let greeting = document.getElementById('greeting');

  if (!greeting) {
    // create a paragraph tag with id "greeting" within body
    greeting = document.createElement('p');
    greeting.id = 'greeting';
    document.body.appendChild(greeting);
  }

  // show the greeting in paragraph tag
  greeting.innerText = name;

  // show the greeting in console
  console.log(`Hello, ${name}!`);
}

export function getNameAndGreet() {
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