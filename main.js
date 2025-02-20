let li = document.createElement("li");
console.dir(li);
li.className = 'list-group-item';
li.innerHTML = 'Four';
let list = document.getElementById('list');
list.appendChild(li);