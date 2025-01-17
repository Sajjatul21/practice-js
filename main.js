function test(){
    var msg = 'I am learning scope and closure'

    return function(){
        console.log(msg)
    }

}

var sayMsg = test()
sayMsg()