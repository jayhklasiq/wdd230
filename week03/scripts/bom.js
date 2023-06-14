const input = document.querySelector("#favchap");
const addChapter = document.querySelector("button");
const list = document.querySelector("#list");

function getChapterList() {}
// Declare an array named chaptersArray and assign it to the results 
// of a defined function named getChapterList
let chaptersArrays = getChapterList() || [];
// Use a forEach on the chaptersArray to process each entry named 
// chapter. Use an arrow function within the loop to call a new 
// defined function named displayList and pass it the argument of 
// chapter.
chaptersArrays.forEach(chapter => { displayList(chapter); });

// Create the displayList defined function that receives one parameter named item.
// Put all the code that builds a list item from the previous button click event listener 
// into this new displayList function and use the item parameter as the input. 
// A deleteChapter function will need to be called within the delete button click 
// event to remove the chapter from the array and localStorage.
function displayList(item)
{

    let li = document.createElement("li");
    // Create a delete button for the chapter   
    const x = document.createElement("button");

    // li.appendChild(span);
    li.textContent = item;
    x.innerHTML = "<strong>X</strong"
    li.appendChild(x);
    list.appendChild(li);

    x.addEventListener("click", () => 
    {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

// Define the setChapterList function to set the localStorage item that
//  you have already named. Use JSON.stringify() to stringify the array.
function setChapterList()
{
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArrays));
}

// Define the getChapterList function to get the localStorage item. 
// No parameter is needed. Since this function returns to an awaiting array, 
// we will need to use JSON.parse on the string.
function getChapterList() 
{
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter)
{
    chapter = chapter.slice(0, chapter.lenghht -1); //reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when we called the deleteChapter function. Use string.slice() method to extract the last character.
    chaptersArrays = chaptersArray.filter((item) => item != chapter);
    setChapterList();
}
// Change the button click event listener to only do the following tasks (the other tasks in that original function will be used in a separate function named displayList):
// check if the input is empty, if not, then
// call displayList with the input.value argument,
// push the input.value into the chaptersArray,
// update the localStorage with the new array by calling a function named setChapterList,
// set the input.value to nothing, and
// set the focus back to the input.
addChapter.addEventListener("click", () =>
{
    if (input.value != "")
    {
        displayList(input.value);
        chaptersArrays.push(input.value);
        setChapterList();
        input.value = "";
        input.focus(); 
    }
        
});

