const input = document.querySelector("#favchap");
const addChapter = document.querySelector("button");
const list = document.querySelector("#list");

addChapter.addEventListener("click", () =>
{
    // These lines ensure that user can always add to the list
    const currentInput = input.value;
    input.value = "";

    if (currentInput != "")
    {
    let li = document.createElement("li");
    // create a span for the chapter input from user
    // let span = document.createElement("span");
    // Create a delete button for the chapter   
    const x = document.createElement("button");

    // li.appendChild(span);
    li.textContent = currentInput;
    li.appendChild(x);
    x.innerHTML = "<strong>X</strong"
    list.appendChild(li);

    x.addEventListener("click", () => 
    {
        list.removeChild(li);
    });
    input.focus();
    }
});