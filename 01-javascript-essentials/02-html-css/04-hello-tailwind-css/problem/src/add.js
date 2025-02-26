// Create a function to create textbox which accepts id, placeholder and value as arguments.
function createTextBox(id, placeholder, value) {
    const textBox = document.createElement('input');
    textBox.setAttribute('type', 'text');
    textBox.setAttribute('id', id);
    textBox.setAttribute('placeholder', placeholder);
    textBox.setAttribute('value', value);
    // TODO: Set Tailwind CSS classes
    textBox.setAttribute('class', 'border rounded p-2');
    return textBox;
}

function createSpanElement(textContent) {
    const span = document.createElement('span');
    span.textContent = textContent;
    // TODO: Set Tailwind CSS classes
    span.setAttribute('class', 'mx-2');
    return span;
}

export function renderAddContainer() {
    const urlParams = new URLSearchParams(window.location.search);
    const a = urlParams.get('a') || 0;
    const b = urlParams.get('b') || 0;
    const sum = parseInt(a) + parseInt(b);

    // Create a container
    const container = document.createElement('div');
    // TODO: Tailwind CSS classes
    container.setAttribute('class', 'container p-4');
    document.body.appendChild(container);

    // Create a flex container for the textboxes
    const flexContainer = document.createElement('div');
    // TODO: Tailwind CSS classes
    flexContainer.setAttribute('class', 'flex items-center');
    container.appendChild(flexContainer);

    // Create textbox for a
    const textBoxA = createTextBox('txtA', 'Enter a', a);
    flexContainer.appendChild(textBoxA);

    // Create a plus sign
    const plusSign = createSpanElement('+',);
    flexContainer.appendChild(plusSign);

    // Create textbox for b
    const textBoxB = createTextBox('txtB', 'Enter b', b);
    flexContainer.appendChild(textBoxB);

    // Create an equals sign
    const equalsSign = createSpanElement('=');
    flexContainer.appendChild(equalsSign);

    // Create textbox for sum
    const textBoxSum = createTextBox('txtSum', 'Sum', sum);
    flexContainer.appendChild(textBoxSum);
}