export function greet(name) {
  // check if greeting already exists
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