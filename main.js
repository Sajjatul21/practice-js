let listItem = document.getElementsByTagName('li');
let listItems = Array.from(listItem);
listItems.forEach((i, index) => {
    let text = i.innerHTML;
    i.innerHTML = `(${index + 1} ${text})`;
});