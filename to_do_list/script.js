function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    var taskList = document.getElementById('taskList');
    var li = document.createElement('li');
    li.textContent = taskText;
    
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function() {
      li.remove();
    };
    
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
  }