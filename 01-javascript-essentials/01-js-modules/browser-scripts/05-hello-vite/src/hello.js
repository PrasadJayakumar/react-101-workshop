export function greet(name) {
  alert(`Hello, ${name}!`);
}

export function renderHelloContainer() {
  const name = prompt("Enter your name:");
  if (name) {
    greet(name);
  }
}