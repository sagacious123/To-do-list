const form = document.querySelector(".task-form"); //task-input form
const taskInput = document.querySelector(".task-input"); //input
const ul = document.querySelector(".task-collection"); //ul
const clearBtn = document.querySelector(".clear-task"); //clear button
const filter = document.querySelector(".filter-input"); //filter
const p = document.querySelector("p");




form.addEventListener("submit", function(e) {
    if(taskInput.value === "") {
        p.textContent = "Please add a task!";
        // alert("Please add a task");
    } else {
        // create "li" element, add class and add text node
        const taskList = document.createElement("li");
        taskList.className = "task-list";
        taskList.appendChild(document.createTextNode(taskInput.value));
        
        // create link element, add class, add delete icon, append link to li and append li to ul
        const link = document.createElement("a");
        link.className = "delete-icon";
        link.innerHTML = '<i class="fa fa-trash"></i>';
        taskList.appendChild(link);
        ul.appendChild(taskList);
        taskInput.value = "";
        p.textContent = "";

        e.preventDefault()
    }
})

ul.addEventListener("click", function(e) {
        if(e.target.parentElement.classList.contains("delete-icon")) {
            if(confirm("Are you sure?")) {
            // e.target.parentElement.parentElement.style.display = "none";
            e.target.parentElement.parentElement.remove();
        }
    }
    if(e.target.parentElement.classList.contains("task-collection")) {
        // alert("okay");
        e.target.classList.toggle("checked");
    }
    
})
 

clearBtn.addEventListener("click", function() {
        if(confirm("Are you sure?")) {
        // ul.innerHTML = "";
        while(ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
})

// filter.addEventListener("input", function(e) {
//     const text = filter.value;
//     const taskLi = document.querySelectorAll(".task-list");
//     taskLi.forEach(function(task) {
//         const item = task.firstChild.textContent;
//         if(item.indexOf(text) != -1) {
//             task.style.display = "block";
//         } else {
//             task.style.display = "none";
//         }
//     });
// })

filter.addEventListener("keyup", function(e) {
    const text = e.target.value;
    const taskLi = document.querySelectorAll(".task-list");
    
    for(i = 0; i < taskLi.length; i++) {
        const item = taskLi[i].firstChild.textContent;
        if(item.indexOf(text) != -1) {
            taskLi[i].style.display = "block";
        } else {
            taskLi[i].style.display = "none";
        }
    }
})