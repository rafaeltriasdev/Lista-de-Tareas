// Obtener elementos del DOM
var addTaskButton = document.getElementById('addTaskButton');
var taskInput = document.getElementById('taskInput');
var taskList = document.getElementById('taskList');
var errorDiv = document.getElementById('error');

// Función para agregar tarea
addTaskButton.onclick = function() {
    var taskText = taskInput.value.trim(); // Obtener texto de la tarea

    // Verificar si el input está vacío
    if (taskText === '') {
        errorDiv.textContent = 'Por favor, ingresa una tarea.';
        errorDiv.style.display = 'block'; // Mostrar mensaje de error
        return; // Salir de la función
    }
    
    errorDiv.style.display = 'none'; // Ocultar mensaje de error

    // Crear un nuevo div para la tarea
    var taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.innerHTML = `
        <span>${taskText}</span>
        <button class="edit-button">Editar</button>
        <button class="delete-button">Eliminar</button>
    `;
    
    // Agregar la nueva tarea a la lista
    taskList.appendChild(taskDiv);
    taskInput.value = ''; // Limpiar el input

    // Funcionalidad de editar
    var editButton = taskDiv.querySelector('.edit-button');
    editButton.onclick = function() {
        var newTaskText = prompt('Editar tarea:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskDiv.querySelector('span').textContent = newTaskText.trim();
        }
    };

    // Funcionalidad de eliminar
    var deleteButton = taskDiv.querySelector('.delete-button');
    deleteButton.onclick = function() {
        taskList.removeChild(taskDiv); // Eliminar la tarea de la lista
    };
};
