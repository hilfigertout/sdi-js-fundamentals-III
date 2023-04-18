let inputField = document.querySelector('#input1');
let text = '';
inputField.addEventListener('input', (eventObject) => {
    text = eventObject.target.value;
});
let btnForm = document.querySelector('#to-do-input-form');
btnForm.addEventListener('submit', (eventObject) => {
    eventObject.preventDefault();
    if (text !== "") {
        let newItem = document.createElement('li');
        newItem.addEventListener('click', (eventObject) => {
            let currentList = localStorage.getItem('currentToDoItems').split('|||');
            currentList.splice(currentList.indexOf(eventObject.target.innerHTML), 1);
            localStorage.setItem('currentToDoItems', currentList.join('|||'));
            eventObject.target.remove();
            
        });
        newItem.innerHTML = text;
        document.querySelector('ul').appendChild(newItem);
        let newList = localStorage.getItem('currentToDoItems').concat('|||', text);
        inputField.value = '';
        text = '';
        localStorage.setItem('currentToDoItems', newList);
    }
});
let currentItems = localStorage.getItem('currentToDoItems');
if (currentItems === undefined || currentItems === null) {
    localStorage.setItem('currentToDoItems', '');
}
let oldItems = currentItems.split('|||')
for (let i = 1; i < oldItems.length; i++) {
    let newItem = document.createElement('li');
    newItem.innerHTML = oldItems[i];
    newItem.addEventListener('click', (eventObject) => {
        let currentList = localStorage.getItem('currentToDoItems').split('|||');
        currentList.splice(currentList.indexOf(eventObject.target.innerHTML), 1);
        localStorage.setItem('currentToDoItems', currentList.join('|||'));
        eventObject.target.remove();
        
    });
    document.querySelector('ul').appendChild(newItem);
};
