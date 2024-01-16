const inputBox =  document.getElementById("input-box");
const listContainer =  document.getElementById("list-container");
function addTask(){
    if(inputBox.value === '') {
        alert("Error, write a task!");
    }
    else {

        let currentDate = new Date().toLocaleDateString();
        let taskWithDate = `${inputBox.value}: ${currentDate}`;  // prints out tasks and date

        let li = document.createElement("li");
        li.innerHTML = taskWithDate;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }

    inputBox.value = ""; 
    saveData();

}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


inputBox.addEventListener("keypress", function (e) {  //enter button works when adding tasks
  if (e.key === "Enter")  {
    addTask();
  }
}); 



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();