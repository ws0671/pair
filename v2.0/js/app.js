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
  document.querySelector('.completed-todos').textContent = todos.filter(todo => todo.completed).length + '';
  document.querySelector('.active-todos').textContent = todos.filter(todo => !todo.completed).length + '';
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
  if (!e.target.matches('.remove-todo')) return;
    todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
  // todos = todos.filter(todo => e.target.parentNode.id !== todo.id );
  render();
};

const toggleTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? {...todo, completed: !todo.completed} : todo));
  render();
}

document.querySelector('.todos').onchange = e => {
  const {id} = e.target.parentNode;
  toggleTodo(id);
};

document.getElementById('ck-complete-all').onchange = e => {
  todos = todos.map(todo => ({ ... todo, completed: e.target.checked }));
  render();
};