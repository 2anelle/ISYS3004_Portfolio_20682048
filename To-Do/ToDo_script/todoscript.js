/* S1 find the element (everything in the HTML document) */
var addTaskButton = document.getElementById("add-task");
var newTaskInput = document.getElementById("task-input");
var todoListContainer = document.getElementById("todo-list");

var showAllButton = document.getElementById("show-all");
var showActiveButton = document.getElementById("show-active");
var showCompletedButton = document.getElementById("show-completed");

/* Locate the <script> tag that contain the template  */
var templateElement = document.getElementById("list-item-template");
/* get the template of HTML between the <script> tag */
var template = templateElement.innerHTML;

/* S2 write the behaviour (function to handle the 'click' event) */
function onAddTaskClicked(event) {
    /* get inserted value from text box in the form*/
    var taskName = newTaskInput.value;
    /* clear the text box after */
    newTaskInput.value = "";
    var taskHTML = template.replace("<!-- TASK_NAME -->", taskName);
    /* after HTML is updated, insert it in the DOM tree */
    todoListContainer.insertAdjacentHTML('beforeend', taskHTML);
    /* save the task */
    saveTask(taskName, false);
}

function onTodoListContainerClicked(event){
    /* find out which element triggered this click event */
    var targetElement = event.target;
    while (!targetElement.classList.contains("task")){
        targetElement = targetElement.parentElement;
    }
  
    /* at the parent, retrieve the .checkbox element to see if it is checked */
    var checkbox = targetElement.querySelector(".checkbox");

    if (checkbox.checked){
        targetElement.classList.add("completed")
    } else {
        targetElement.classList.remove("completed")
    }

    /* get the element of the task and save it as checked */
    let taskNameElement = targetElement.querySelector(".task-name");
    let taskName = taskNameElement.innerHTML;

    saveTask(taskName, checkbox.checked);
}

function showActiveTasks(){
    /* collects all the tasks inserted and filter out active (yet to be completed) task only */
    let tasks = document.getElementsByClassName("task");
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){
            /* sets the display property to none */
            tasks[i].style.display = "none";
        } else {
            /* sets the display property to show */
            tasks[i].style.display = "block";
        }
    }
}

/* function showActiveTasks is the opposite of function showCompletedTasks */

function showCompletedTasks(){
    /* collects all the tasks inserted and filter out completed task only */
    let tasks = document.getElementsByClassName("task");
    for (let i = 0; i < tasks.length; i++){
        if (tasks[i].classList.contains("completed")){
            /* sets the display property show */
            tasks[i].style.display = "block";
        } else {
            /* sets the display property to none */
            tasks[i].style.display = "none";
        }
    }
}

function showAllTasks(){
    /* collects all the tasks inserted and display all tasks */
    let tasks = document.getElementsByClassName("task");
    for (let i = 0; i < tasks.length; i++){
        tasks[i].style.display = "block";
    }
}

/* S3 link event to handler (make events trigger the functions) */
addTaskButton.addEventListener('click', onAddTaskClicked);
todoListContainer.addEventListener('click', onTodoListContainerClicked);
showActiveButton.addEventListener('click', showActiveTasks);
showAllButton.addEventListener('click', showAllTasks);
showCompletedButton.addEventListener('click', showCompletedTasks);

renderTasks();