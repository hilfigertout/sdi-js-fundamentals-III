let inputField = document.querySelector("#input1");
let text = "";
inputField.addEventListener("input", (eventObject) => {
    text = eventObject.target.value;
});
let btn = document.querySelector("#button1");
btn.addEventListener("click", (eventObject) => {
    eventObject.preventDefault();
    let newItem = document.createElement("li");
    newItem.addEventListener('click', (eventObject) => {
        eventObject.target.remove();
    });
    newItem.innerHTML = text;
    document.querySelector('ul').appendChild(newItem);
    inputField.value = "";
})

