function add (a,b,c){
    return a + b +c
}
console.log(add(2,3,4))

function curring(a){
    return function(b){
        return  function(c){
            return a + b +c
        }
    }
}
var result = curring(2)(3)(4)
console.log(result)