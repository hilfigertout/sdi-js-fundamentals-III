let inputField = document.querySelector('#input1');
let text = '';
inputField.addEventListener('input', (eventObject) => {
    text = eventObject.target.value;
});


let renderListItem = (itemText, listID) => {
    let newItem = document.createElement('li');
    if (listID === '#active') {
        newItem.addEventListener('click', (eventObject) => {
            let currentList = localStorage.getItem('currentToDoItems').split('|||');
            currentList.splice(currentList.indexOf(eventObject.target.innerHTML), 1);
            localStorage.setItem('currentToDoItems', currentList.join('|||'));
            renderListItem(eventObject.target.innerHTML, '#completed');
            eventObject.target.remove();
        });
    } else {
        newItem.addEventListener('click', (eventObject) => {
            let newList = localStorage.getItem('currentToDoItems').concat('|||', eventObject.target.innerHTML);
            localStorage.setItem('currentToDoItems', newList);
            renderListItem(eventObject.target.innerHTML, '#active');
            eventObject.target.remove();
        });
    }

    newItem.innerHTML = itemText;
    document.querySelector(listID).appendChild(newItem);
}

let currentItems = localStorage.getItem('currentToDoItems');
if (currentItems === undefined || currentItems === null) {
    localStorage.setItem('currentToDoItems', '');
}
let oldItems = currentItems.split('|||')
for (let i = 1; i < oldItems.length; i++) {
    renderListItem(oldItems[i], '#active')
};

let btnForm = document.querySelector('#to-do-input-form');
btnForm.addEventListener('submit', (eventObject) => {
    eventObject.preventDefault();
    if (text !== "") {
        renderListItem(text, '#active')
        let newList = localStorage.getItem('currentToDoItems').concat('|||', text);
        inputField.value = '';
        text = '';
        localStorage.setItem('currentToDoItems', newList);
    }
});



