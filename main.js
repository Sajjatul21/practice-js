let listItem = document.getElementsByTagName('li')
// console.log(listItem)
// let listItems = Array.from(listItem)
// console.log(listItems)
let listItems =[...listItem]
listItems.forEach((i, index)=>{
    console.log(i,index)
    let text= i.innerHTML
    i.innerHTML =   `${index+ 1} ${text}`
})