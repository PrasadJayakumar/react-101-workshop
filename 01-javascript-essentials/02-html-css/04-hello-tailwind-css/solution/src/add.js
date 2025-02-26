// Create a function to create textbox which accepts id, placeholder and value as arguments.
function createTextBox(id, placeholder, value) {
    const textBox = document.createElement('input');
    textBox.setAttribute('type', 'text');
    textBox.setAttribute('id', id);
    textBox.setAttribute('placeholder', placeholder);
    textBox.setAttribute('value', value);

    // SOLUTION: Set Tailwind CSS classes
    textBox.className = 'border rounded p-2';

    return textBox;
}

function createSpanElement(textContent) {
    const span = document.createElement('span');
    span.textContent = textContent;

    // SOLUTION: Set Tailwind CSS classes
    span.className = 'mx-2';

    return span;
}

function createForm(a, b, sum) {
    // Create a container
    const container = document.createElement('div');
    // SOLUTION: Set Tailwind CSS classes
    container.className = 'container p-4';
    document.body.appendChild(container);

    // Create textbox for a
    const textBoxA = createTextBox('txtA', 'Enter a', a);
    container.appendChild(textBoxA);

    // Create a plus sign
    const plusSign = createSpanElement('+',);
    container.appendChild(plusSign);

    // Create textbox for b
    const textBoxB = createTextBox('txtB', 'Enter b', b);
    container.appendChild(textBoxB);

    // Create an equals sign
    const equalsSign = createSpanElement('=');
    container.appendChild(equalsSign);

    // Create textbox for sum
    const textBoxSum = createTextBox('txtSum', 'Sum', sum);
    container.appendChild(textBoxSum);
}

export function renderAddContainer() {
    const urlParams = new URLSearchParams(window.location.search);
    const a = urlParams.get('a') || 0;
    const b = urlParams.get('b') || 0;
    const sum = parseInt(a) + parseInt(b);

    createForm(a, b, sum);
}