// State
let todos = [];

todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const render = ()=>{
  document.querySelector('.todos').innerHTML = todos.map(({id,content,completed})=>{
    return `<li id='${id}' class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox"${completed ? "checked":""}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`
  }).join('');
}

document.addEventListener('DOMContentLoaded', render);

const addTodo = () => {
  todos = [ { id: 3, content: document.querySelector('.input-todo').value, completed: false }, ... todos ];
  render();
}

document.querySelector('.input-todo').onkeydown = e => {
  if ( e.key !== 'Enter') return;
  addTodo();
}
