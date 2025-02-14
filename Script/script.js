document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const errorText = document.getElementById('errorText');
    const taskList = document.getElementById('taskList');
    const totalTasks = document.getElementById('totalTasks');
    const completedTasks = document.getElementById('completedTasks');
    const pendingTasks = document.getElementById('pendingTasks');

    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        errorText.textContent = 'Por favor, introduce una tarea.';
        return;
    }

    errorText.textContent = '';

    const li = document.createElement('li');
    li.textContent = taskValue;

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('change', function() {
        li.classList.toggle('completed');
        updateStats();
    });

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', function() {
        const newTask = prompt('Editar tarea:', taskValue);
        if (newTask) {
            taskValue = newTask;
            li.firstChild.textContent = taskValue;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);
        updateStats();
    });

    li.appendChild(checkBox);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
    updateStats();
});

function updateStats() {
    const tasks = document.querySelectorAll('#taskList li');
    const total = tasks.length;
    const completed = document.querySelectorAll('#taskList li.completed').length;
    const pending = total - completed;

    document.getElementById('totalTasks').textContent = total;
    document.getElementById('completedTasks').textContent = completed;
    document.getElementById('pendingTasks').textContent = pending;
}
