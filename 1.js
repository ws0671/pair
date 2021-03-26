const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// function render() {
//   let html = '';

//   todos.forEach(todo => {
//     html +=
//     `<li id="${todo.id}">
//       <label><input type="checkbox" ${todo.completed ? "checked" : ""}>${todo.content}</label>
//     </li>`
//   });
//   return html;
// }
function render(){
  return todos.map(({id, content, completed}) =>{
    return `<li id="${id}">
       <label><input type="checkbox" ${completed ? "checked" : ""}>${content}</label>
     </li>`
  }).join('');
  
}

console.log(render());

//map으로도 해결가능하다