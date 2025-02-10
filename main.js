let listItem = document.getElementsByTagName('li');
// let listItems = Array.from(listItem);

[...listItem].forEach((i, index) => {
    let text = i.innerHTML;
    i.innerHTML = `(${index + 1} ${text})`;
});

let li = document.createElement('li');
li.className = 'list-group-item';
li.setAttribute('title', 'i am four item');
li.innerHTML = 'four';
let list = document.getElementById('list');
list.appendChild(li);