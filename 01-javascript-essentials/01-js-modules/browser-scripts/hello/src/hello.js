function greet() {
  // prompt(): Gets input from the user.
  const name = prompt("Enter your name:");

  if (name) {
    // alert(): Displays the greeting in a pop-up.
    alert(`Hello, ${name}!`);
  }
}

greet();