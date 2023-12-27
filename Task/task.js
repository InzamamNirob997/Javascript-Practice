let form = document.querySelector("#Task");
let tasklist = document.querySelector("ul");
let clearBtn = document.querySelector("#Clear_task");
let filtering = document.querySelector("#filtering");
let input = document.querySelector("#new_text");

// Define Event Listener:
form.addEventListener('submit', addList);
tasklist.addEventListener("click", removeList);
clearBtn.addEventListener("click", clearList);
filtering.addEventListener("keyup", filterTask);
document.addEventListener("DOMContentLoaded", getTasks);

// Created list and added them:
function addList(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    if (input.value === "") {
        alert("Add a task!");
    } else {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value + " "));
        let link = document.createElement('a');
        link.setAttribute("href", "#");
        link.innerHTML = "x";
        li.appendChild(link);
        tasklist.appendChild(li);
        storeTaskInLocalStorage(input.value);
        input.value = "";
    }
}

// RemoveList:
function removeList(e) {
    if (e.target.hasAttribute("href")) {
        if (confirm("Are you sure")) {
            let element = e.target.parentElement;
            element.remove();
            removeFromLs(element);
        }
    }
}

// ClearAllList
function clearList(e) {
    tasklist.innerHTML = "";
    clearTasksFromLs();
}

// Filtertask:
function filterTask(e) {
    let text = e.target.value.toLowerCase();

    document.querySelectorAll("li").forEach(task => {
        let name = task.firstChild.textContent;
        if (name.toLowerCase().indexOf(text) !== -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}

// store in local storage:
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem('tasks') == null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(task + " "));
        let link = document.createElement('a');
        link.setAttribute("href", "#");
        link.innerHTML = "x";
        li.appendChild(link);
        tasklist.appendChild(li);
    });
}

// Remove from local storage:
function removeFromLs(element) {
    let tasks;
    if (localStorage.getItem('tasks') == null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    // Extract the text content from the removed element
    let removedTask = element.firstChild.textContent.trim();

    // Remove the task from the tasks array
    tasks = tasks.filter(task => task !== removedTask);

    // Update local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear all tasks from local storage:
function clearTasksFromLs() {
    localStorage.removeItem('tasks');
}
