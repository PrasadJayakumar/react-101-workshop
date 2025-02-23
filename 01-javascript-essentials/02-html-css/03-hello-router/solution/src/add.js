// Create a function to create textbox which accepts id, placeholder and value as arguments.
function createTextBox(id, placeholder, value) {
    const textBox = document.createElement('input');
    textBox.setAttribute('type', 'text');
    textBox.setAttribute('id', id);
    textBox.setAttribute('placeholder', placeholder);
    textBox.setAttribute('value', value);
    return textBox;
}

export function renderAddContainer() {
    // SOLUTION: Accept a and b from query string
    const urlParams = new URLSearchParams(window.location.search);
    const a = urlParams.get('a') || 0;
    const b = urlParams.get('b') || 0;
    const sum = parseInt(a) + parseInt(b);

    // SOLUTION: Create three textboxes and a button dynamically using JavaScript.

    // Create a container
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
    document.body.appendChild(container);

    // Create textbox for a
    // SOLUTION: Set the value of a and b in the first and second textbox
    const textBoxA = createTextBox('txtA', 'Enter a', a);
    container.appendChild(textBoxA);

    // Create textbox for b
    const textBoxB = createTextBox('txtB', 'Enter b', b);
    container.appendChild(textBoxB);

    // SOLUTION: Show the sum in the third textbox onload
    // Create textbox for sum
    const textBoxSum = createTextBox('txtSum', 'Sum', sum);
    container.appendChild(textBoxSum);


}