let ul = document.querySelector("ul");
let input = document.querySelector("input");
const addItem = document.querySelector("button");

addItem.addEventListener( "click", () => 
{
    const currentValue = input.value;
    input.value = "";

    let li = document.createElement("li");
    let span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    span.textContent = currentValue;
    li.appendChild(button);
    button.textContent = "Delete";
    ul.appendChild(li);

    button.addEventListener("click", () => 
    {
        ul.removeChild(li);
    });

});
