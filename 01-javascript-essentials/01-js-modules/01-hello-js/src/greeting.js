function getTimeBasedGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

function showGreetingPrompt() {
  try {
    // prompt(): Gets input from the user.
    const name = prompt("Enter your name:", "Guest");

    // Trim whitespace and check for empty string
    const sanitizedName = name?.trim();

    if (!sanitizedName) {
      alert("Please enter a valid name!");
      return;
    }

    const greeting = getTimeBasedGreeting();
    const h1 = document.querySelector('h1') || document.createElement('h1');
    h1.textContent = `${greeting}, ${sanitizedName}!`;

    if (!h1.parentElement) {
      document.body.appendChild(h1);
    }
  } catch (error) {
    console.error('Error displaying greeting:', error);
    alert('Sorry, something went wrong. Please try again.');
  }
}

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  showGreetingPrompt();
});