
// data structure
let taskList = []


// data type 
// task = {
//     id:value,
//     title:value,
//     desc:value,
//     date:value
// }

var count = 0;

function readInput(){
    let id = document.getElementById("id").value
    let title = document.getElementById("title").value
    let desc = document.getElementById("desc").value
    let date =  document.getElementById("date").value
   addTask({
    id:count++,
    title:title,
    desc : desc,
    date:date
   })

}

function addTask(task){
    taskList.push(task)
    printTask()
   
}

function printTask(){
    let items = document.getElementById("items")
    items.innerHTML = "" 
    // table()table -> row()tr -> cols(id,title,desc,date)td

    taskList.forEach((task)=> {
        let tr = document.createElement("tr");
        tr.innerHTML = `
        <td>${task.id}</td>
        <td>${task.title}</td>
        <td>${task.desc}</td>
        <td>${task.date}</td>
        <td>
        <button onclick="updateTask(${task.id})">UpdateTask</button>
        <button onclick="deleteTask(${task.id})" >Delete</button>
        </td>
        `
        items.appendChild(tr);
    })


}

function updateTask(taskId) {
    let taskToUpdate = taskList.find(task => task.id === taskId);

    document.getElementById("id").value = taskToUpdate.id;
    document.getElementById("title").value = taskToUpdate.title;
    document.getElementById("desc").value = taskToUpdate.desc;
    document.getElementById("date").value = taskToUpdate.date;

    document.querySelector("button").innerText = "Update Task";
    document.querySelector("button").onclick = function() {
        saveUpdatedTask(taskToUpdate.id);
    };
}

function saveUpdatedTask(taskId) {
    let taskIndex = taskList.findIndex(task => task.id === taskId);

    taskList[taskIndex].title = document.getElementById("title").value;
    taskList[taskIndex].desc = document.getElementById("desc").value;
    taskList[taskIndex].date = document.getElementById("date").value;
    printTask();
    document.getElementById("id").value = "";
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("date").value = "";
    document.querySelector("button").innerText = "Add Task";
    document.querySelector("button").onclick = readInput;
}

function deleteTask(taskId){
    taskList = taskList.filter((task)=>task.id != taskId);
    console.log(taskList);
    printTask();
}