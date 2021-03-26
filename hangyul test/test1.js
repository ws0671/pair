// 1. html 생성
// 아래 배열을 사용하여 html을 생성하는 함수를 작성하라.

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];
// map을 써보자

// function render(){
//   return todos.map(todo => {
//     return `<li id="${todo.id}">
//     <label><input type="checkbox" ${todo.completed? "checked":""}>${todo.content}</label>
//     </li>`
//   }).join('');
// }

// 객체 디스트럭쳐링 할당을 활용해보자
function render(){
  return todos.map(({id, content, completed}) => {
    return `<li id="${id}">
    <label><input type="checkbox" ${ completed ? "checked" : "" }>${content}</label>
    </li>`
  }).join('');
}
console.log(render());

// forEach 사용

// function render() {
//   let html = '';

//   todos.forEach(todo => {
//     html += `<li id=${todo.id}>
//     <label><input type="checkbox" ${todo.completed ? "checked":""}>${todo.content}</label>
//     </li>`
//   });

//   return html;
// }

// console.log(render());
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
*/