// Create a function to create textbox which accepts id, placeholder and value as arguments.
function createTextBox(id, placeholder, value) {
    const textBox = document.createElement('input');
    textBox.setAttribute('type', 'text');
    textBox.setAttribute('id', id);
    textBox.setAttribute('placeholder', placeholder);
    textBox.setAttribute('value', value);

    // TODO: Set Tailwind CSS classes

    return textBox;
}

function createSpanElement(textContent) {
    const span = document.createElement('span');
    span.textContent = textContent;

    // TODO: Set Tailwind CSS classes

    return span;
}

function createForm(a, b, sum) {
    // Create a container
    const container = document.createElement('div');
    // TODO: Set Tailwind CSS classes
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