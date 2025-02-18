let input = document.querySelector(".input-value");
let add = document.querySelector(".add");
let taskContainer = document.querySelector(".task-container");



add.addEventListener("click",() => {
    if(input.value === ""){
    alert("enter data")
    return
    }else{
        input.textContent = input.value;
        console.log(input.value)
    }
    let taskList = document.createElement("li")
    let deleteBtn = document.createElement("button")
    let btn = document.createElement("i")
    let taskGroup = document.createElement("div")

    btn.classList.add('fa-solid', 'fa-trash')
    taskGroup.classList.add("tasks-group")
    taskList.classList.add("task-list")
    deleteBtn.classList.add("delete")

    taskList.textContent = input.value;
    input.value = "";
    
    deleteBtn.appendChild(btn)
    taskList.appendChild(deleteBtn)
    taskGroup.appendChild(taskList)
    taskContainer.appendChild(taskGroup)

    deleteBtn.addEventListener("click",() => {
    taskContainer.removeChild(taskGroup)
    })  
    
    taskList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") { 
            event.target.classList.toggle("strike");
        }
    });
})


