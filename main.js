// let n = Number.parseInt(52.35)
// let n = Number.parseInt("52.35")
// let n = Number.parseInt([])
// let n = Number.parseInt({})
// console.log(n)

function changeToInt(v) {
    let result = Number.parseInt(v);
    /* if (result == Nan) {
        return 'Please Provide a value which is able to convert in Integer';
    } */
    if (!result) {
        return 'Please Provide a value which is able to convert in Integer';
    }
    return result;
}

// let result = changeToInt(42.5);
// let result = changeToInt("42.5")
let result = changeToInt("trqerqew")


console.log(result);