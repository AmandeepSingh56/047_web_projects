let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let filter = "all";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("dueDate").value;

    if (taskInput.value.trim() === "") return;

    const task = {
        text: taskInput.value,
        priority: priority,
        dueDate: dueDate,
        completed: false
    };

    tasks.push(task);
    taskInput.value = "";
    saveTasks();
    displayTasks();
}

function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        if (filter === "completed" && !task.completed) return;
        if (filter === "pending" && task.completed) return;

        const li = document.createElement("li");
        li.classList.add(`priority-${task.priority}`);
        if (task.completed) li.classList.add("completed");

        li.innerHTML = `
            <div class="task-info">
                <strong>${task.text}</strong><br>
                <small>Priority: ${task.priority} | Due: ${task.dueDate || "No date"}</small>
            </div>
            <div class="task-actions">
                <button class="complete-btn" onclick="toggleComplete(${index})">✓</button>
                <button class="delete-btn" onclick="deleteTask(${index})">✗</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    displayTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

function filterTasks(type) {
    filter = type;
    displayTasks();
}

displayTasks();
