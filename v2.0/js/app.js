// State
let todos = [];

const render = ()=>{
  document.querySelector('.todos').innerHTML = todos.map(({id,content,completed})=>{
    return `<li id='${id}' class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox"${completed ? "checked":""}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`
  }).join('');
};

document.addEventListener('DOMContentLoaded', render);

const generateNextId = () => {
  return Math.max(...todos.map(todo => todo.id), 0) + 1;
};

const addTodo = () => {
  todos = [ { id: generateNextId(), content: document.querySelector('.input-todo').value, completed: false }, ... todos ];
  render();
};

document.querySelector('.input-todo').onkeydown = e => {
  if ( e.key !== 'Enter') return;
  addTodo();
  document.querySelector('.input-todo').value = '';
};

document.querySelector('.todos').onclick = e => {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
  // todos = todos.filter(todo => e.target.parentNode.id !== todo.id );
  render();
};