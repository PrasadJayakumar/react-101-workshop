export function createForm(onSubmit) {
    // <div>
    //   <label for="name">Enter your name:</label>
    //   <!-- Create a textbox for the user to enter their name -->
    //   <input type="text" id="name" />
    //   <!-- Create a button for the user to click -->
    //   <button id="Submit">Submit</button>
    // </div>

    const div = document.createElement('div');
    div.style.display = 'flex';
    div.style.flexDirection = 'row';
    div.style.gap = '10px';

    const label = document.createElement('label');
    label.setAttribute('for', 'name');
    label.textContent = 'Enter your name:';
    div.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'name');
    div.appendChild(input);

    const button = document.createElement('button');
    button.setAttribute('id', 'submit');
    button.textContent = 'Submit';
    div.appendChild(button);

    document.body.appendChild(div);

    button.addEventListener('click', () => {
        onSubmit(input.value);
        div.remove();
    });
}

export function createFormV2(onSubmit) {
    // <div>
    //   <label for="name">Enter your name:</label>
    //   <!-- Create a textbox for the user to enter their name -->
    //   <input type="text" id="name" />
    //   <!-- Create a button for the user to click -->
    //   <button id="Submit">Submit</button>
    // </div>

    const div = document.createElement('div');
    div.style.cssText = 'display: flex; flex-direction: row; gap: 10px;';
    div.innerHTML = `
      <label for="name">Enter your name:</label>
      <input type="text" id="name" />
      <button id="submit">Submit</button>
    `;

    const input = div.querySelector('input');
    const button = div.querySelector('button');
    button.addEventListener('click', () => {
        onSubmit(input.value);
        div.remove();
    });

    document.body.appendChild(div);
}