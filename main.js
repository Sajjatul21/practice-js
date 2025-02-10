let list = document.getElementById('list');

const parent = list.parentElement;
const children = list.children;
console.log(parent);
console.log(children);
console.log(list.previousElementSibling);
console.log(list.nextElementSibling);

let li = document.querySelector("li");
console.log(li.previousElementSibling);
console.log(li.nextElementSibling);

console.log(list.firstChild);
console.log(list.firstElementChild);
console.log(list.lastElementChild);
console.log(list.lastElementChild);