//초기데이터 렌더링
let todos = [];
const $todoInput = document.querySelector('.todo-input');
const $todos = document.querySelector('.todos');

const render = () => {
  $todos.innerHTML = todos.map(({id, content, completed}) => {
    return `<li id="${id}">
    <input type="checkbox" ${completed ? "checked" : ""}>
    <span>${content}</span>
    <button class="remove">X</button>
    </li>`;
  }).join('');
}
//server에서 todos데이터를 가져옴
const getTodos = () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ].sort((todo1, todo2)=> todo2.id - todo1.id);
  render();
};
const generateNextId = () => Math.max(...todos.map(todo => todo.id), 0) + 1

const addTodo = content => {
  todos = [{ id: generateNextId(), content, completed: false }, ...todos];
  render();
}

const removeTodo = id => {
  todos = todos.filter(todo => todo.id !== +id);//같은타입으로 맞춰줌
  render();
}
const toggleTodo = id => {
  todos = todos.map(todo => (todo.id === +id ? {...todo, completed: !todo.completed} : todo));
  render();
}

document.addEventListener('DOMContentLoaded', getTodos);

 
// document.querySelector('.add').onclick = () => {
  
//   const content = $todoInput.value;
//   $todoInput.value = '';
//   $todoInput.focus();

//   addTodo(content);
// };

// $todoInput.onkeyup = e => {
//   if(e.key !== 'Enter') return;

//   const content = $todoInput.value;
//   $todoInput.value = '';
//   $todoInput.focus();

//   addTodo(content);
// }

document.querySelector('form').onsubmit = e => {
  e.preventDefault();

  const content = $todoInput.value;
  $todoInput.value = '';
  $todoInput.focus();

  addTodo(content);
};

$todos.onclick = e => {
if(!e.target.classList.contains('remove')) return;
  // const id = e.target.parentNode.id;
  const {id} = e.target.parentNode;
  removeTodo(id);
}

$todos.onchange = e => {
  const {id} = e.target.parentNode;
  toggleTodo(id);
};

//DOM은 HTML문서를 파싱하여 브라우저가 이해할 수있게하는 자료구조이다.
//render함수를 index.html에 있는 ul태그에 넣어서 화면에 렌더링하기

