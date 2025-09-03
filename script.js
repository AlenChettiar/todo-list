function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Task cannot be empty!");
    return;
  }

  // Create task element
  const task = document.createElement("li");
  task.className = "task";

  // Task text
  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskText;

  // Delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    task.remove();
  };

  // Append elements
  task.appendChild(taskLabel);
  task.appendChild(deleteButton);
  document.getElementById("taskList").appendChild(task);

  // Clear input
  input.value = "";
}
