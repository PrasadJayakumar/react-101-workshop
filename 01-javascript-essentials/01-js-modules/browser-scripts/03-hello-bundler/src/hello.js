function greet(name) {
  alert(`Hello, ${name}!`);
}

function getNameAndGreet() {
  const name = prompt("Enter your name:");
  if (name) {
    greet(name);
  }
}