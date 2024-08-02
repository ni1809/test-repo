document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      addTask(input.value);
      input.value = '';
    });
  
    list.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        removeTask(e.target.parentElement);
      } else if (e.target.tagName === 'LI') {
        toggleComplete(e.target);
      }
    });
  
    function addTask(task) {
      const li = document.createElement('li');
      li.textContent = task;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      li.appendChild(removeButton);
      list.appendChild(li);
    }
  
    function removeTask(task) {
      list.removeChild(task);
    }
  
    function toggleComplete(task) {
      task.classList.toggle('completed');
    }
  });
  