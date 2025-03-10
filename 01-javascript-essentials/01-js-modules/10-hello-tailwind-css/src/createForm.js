export function createForm(onSubmit) {
    // <div>
    //   <label for="name">Enter your name:</label>
    //   <!-- Create a textbox for the user to enter their name -->
    //   <input type="text" id="name" />
    //   <!-- Create a button for the user to click -->
    //   <button id="Submit">Submit</button>
    // </div>

    const div = document.createElement('div');
    div.className = 'flex flex-row gap-2.5 mt-4';

    const label = document.createElement('label');
    label.setAttribute('for', 'name');
    label.textContent = 'Enter your name:';
    label.className = 'p-2';
    div.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'name');
    input.className = 'p-1 border rounded';
    div.appendChild(input);

    const button = document.createElement('button');
    button.setAttribute('id', 'submit');
    button.textContent = 'Submit';
    button.className = 'p-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500';
    div.appendChild(button);

    document.body.appendChild(div);

    button.addEventListener('click', () => {
        onSubmit(input.value);
        div.remove();
    });
}
