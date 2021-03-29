// State
let todos = [];
const $todoInput = document.querySelector('.input-todo');
const $todo = document.querySelector('.todos');

todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
].sort((todo1,todo2)=>todo2.id-todo1.id);

const render = ()=>{
  $todo.innerHTML = todos.map(({id,content,completed})=>{
    return `<li id='${id}' class="todo-item">
        <input id="ck-${id}" class="checkbox" type="checkbox"${completed ? "checked":""}>
        <label for="ck-${id}">${content}</label>
        <i class="remove-todo far fa-times-circle"></i>
      </li>`
  }).join('');
  document.querySelector('.completed-todos').textContent = todos.filter(todo => todo.completed).length + '';
  document.querySelector('.active-todos').textContent = todos.filter(todo => !todo.completed).length + '';
};

//브라우저 켰을때 render를 가장 먼저 실행시켜라
document.addEventListener('DOMContentLoaded', render);

const generateNextId = () => {
  return Math.max(...todos.map(todo => todo.id), 0) + 1;
};

const addTodo = () => {
  todos = [ { id: generateNextId(), content: $todoInput.value, completed: false }, ... todos ];
  render();
};

const toggleTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? {...todo, completed: !todo.completed} : todo));
  render();
}

$todoInput.onkeydown = e => {
  if ( e.key !== 'Enter') return;
  if ($todoInput.value === "") return;
  addTodo();
  $todoInput.value = '';
};

$todo.onclick = e => {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
  // todos = todos.filter(todo => e.target.parentNode.id !== todo.id );
  render();
};

$todo.onchange = e => {
  const {id} = e.target.parentNode;
  toggleTodo(id);
};

document.getElementById('ck-complete-all').onchange = e => {
  todos = todos.map(todo => ({ ... todo, completed: e.target.checked}));
  render();
};

document.querySelector('.btn').onclick = () => {
  todos = todos.filter(todo => !todo.completed);
  render();
}