function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return alert("Enter a task!");

    const li = document.createElement("li");
    li.innerHTML = `${taskText} <span onclick="removeTask(this)">✖</span>`;
    
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function removeTask(el) {
    el.parentElement.remove();
}
