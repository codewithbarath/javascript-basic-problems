function  operations(op,a,b){
    
    return op(a,b)

}

function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function multiply(a,b){
    return a*b
}
console.log(operations(multiply,5,1))