document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('registrar');  // Access and stores the form reference.
  const input = form.querySelector('input');  // Access and stores input element reference in form.
  const ul = document.getElementById('invitedList');  // Access and stores 'ul' reference.

  form.addEventListener('submit', (e) => {  // Adds an event listener to the form's submit event.
    e.preventDefault();  // Cancels the browser's default submit behavior.
    // Create list item to hold the name
    // Append list item to the 'ul'
    const text = input.value;  // Stores the input value
    input.value = null;  // Sets form input to an empty string

    const li = document.createElement('li');  // Create list item element

    const span = document.createElement('span');
    span.textContent = text;

    const label = document.createElement('label');  // Create label for checkbox element
    label.textContent = 'Confirmed';  // Adds the text of 'confirmed to the label attribute'

    const checkbox = document.createElement('input');  // Create checkbox element.
    checkbox.type = 'checkbox';  // Set checkbox attribute type to 'checkbox'

    const editButton = document.createElement('button');
    editButton.textContent = 'edit';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';

    li.appendChild(span);
    label.appendChild(checkbox);  // Appends the checkbox to label
    li.appendChild(label);    // Appends the label to the 'li'
    li.appendChild(editButton);
    li.appendChild(removeButton);
    ul.appendChild(li);  // Adds the 'li' to the 'ul'
  });

  ul.addEventListener('change', (e) => {  // Listens for checkbox whether checked or unchecked
    const checkbox = e.target;  // Stores the checkbox reference. In this case the value true or false
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;  // Checkbox -> parentNode = label -> parentNode = li. The listItem reference is stored
    if (checked) {  // Adds class of responded if checked is true, removes class if checked is false
      listItem.className = 'responded';
    } else {
      listItem.className = '';
    }
  });

  ul.addEventListener('click', (e) => {  // Handles the edit, save, and remove button behaviors
    if (e.target.tagName === 'BUTTON') {  // If object clicked has tagName of 'BUTTON', if statement executes
      const button = e.target;  // Saves object reference
      const li = button.parentNode;  // Saves parent of the button -> li
      const ul = li.parentNode;  // Saves parent of the li -> ul

      if (button.textContent === 'remove') {
        ul.removeChild(li);
      } else if (button.textContent === 'edit') {
        const span = li.firstElementChild;
        const input = document.createElement('input');

        input.type = 'text';
        input.value = span.textContent;
        li.insertBefore(input, span);
        li.removeChild(span);
        button.textContent = 'save';
      } else if (button.textContent === 'save') {
        const input = li.firstElementChild;
        const span = document.createElement('span');

        span.textContent = input.value;
        li.insertBefore(span, input);
        li.removeChild(input);
        button.textContent = 'edit';
      }
    }
  });

});
