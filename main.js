let listItem = document.getElementsByTagName('li');
// let listItems = Array.from(listItem);

[...listItem].forEach((i, index) => {
    let text = i.innerHTML;
    i.innerHTML = `(${index + 1} ${text})`;
});