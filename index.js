let inputField = document.querySelector('#input1');
let text = '';
let currentItems = localStorage.getItem('currentToDoItems');
if (currentItems === undefined || currentItems === null || currentItems === "") {
    localStorage.setItem('currentToDoItems', '[]');
}

inputField.addEventListener('input', (eventObject) => {
    text = eventObject.target.value;
});



// Helper function to create a list item in the DOM from the text it should contain.
// Requires list ID ('#active' or '#completed') to determine which callback function to add.
let renderListItem = (itemText, listID) => {
    let newItem = document.createElement('li');
    if (listID === '#active') {
        newItem.addEventListener('click', (eventObject) => {
            let currentList = JSON.parse(localStorage.getItem('currentToDoItems'));
            currentList.splice(currentList.indexOf(eventObject.target.innerHTML), 1);
            localStorage.setItem('currentToDoItems', JSON.stringify(currentList));
            renderListItem(eventObject.target.innerHTML, '#completed');
            eventObject.target.remove();
        });
    } else {
        newItem.addEventListener('click', (eventObject) => {
            let newList = JSON.parse(localStorage.getItem('currentToDoItems'));
            newList.push(newItem);
            localStorage.setItem('currentToDoItems', JSON.stringify(newList));
            renderListItem(eventObject.target.innerHTML, '#active');
            eventObject.target.remove();
        });
    }

    newItem.innerHTML = itemText;
    document.querySelector(listID).appendChild(newItem);
}

let oldItems = JSON.parse(currentItems);
for (let i = 0; i < oldItems.length; i++) {
    renderListItem(oldItems[i], '#active')
};

let btnForm = document.querySelector('#to-do-input-form');
btnForm.addEventListener('submit', (eventObject) => {
    eventObject.preventDefault();
    if (text !== '') {
        renderListItem(text, '#active')
        let newList = JSON.parse(localStorage.getItem('currentToDoItems'));
        newList.push(text)
        inputField.value = '';
        text = '';
        localStorage.setItem('currentToDoItems', JSON.stringify(newList));
    }
});
