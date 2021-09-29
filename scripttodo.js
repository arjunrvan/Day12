var listHolder = document.getElementById('list-holder');

var taskInput = document.getElementById('task-input');

var add = document.getElementById('add');

function addTask () {

    if (taskInput.value != "") {
        var taskList = document.createElement('div');
        var taskTitle = document.createElement('h1');
        taskTitle.innerHTML = taskInput.value;

        var taskBtn = document.createElement('button');
        taskBtn.innerHTML = "Done";

        taskBtn.onclick = deleteNode;

        taskList.append(taskTitle);
        taskList.append(taskBtn);

        add.append(taskList);

        taskInput.value = "";
    }

}

function deleteNode () {
    console.log(this.parentNode);
    var parentDiv = this.parentNode;
    parentDiv.remove();
}