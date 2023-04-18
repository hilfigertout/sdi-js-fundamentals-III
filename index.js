let inputField = document.querySelector("#input1");
let text = "";
inputField.addEventListener("input", (eventObject) => {
    text = eventObject.target.value;
});
let btnForm = document.querySelector("#to-do-input-form");
btnForm.addEventListener("submit", (eventObject) => {
    eventObject.preventDefault();
    if (text !== "") {
        let newItem = document.createElement("li");
        newItem.addEventListener('click', (eventObject) => {
            eventObject.target.remove();
        });
        newItem.innerHTML = text;
        document.querySelector('ul').appendChild(newItem);
        inputField.value = "";
        text = "";
    }
});

