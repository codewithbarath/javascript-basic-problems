/*
the syntax of the arrow function is 
const function name =(para1,para2.......paran)=>expression
or
const function name =(para1,para2.......paran)=>{
    }

*/

const oddeven=(a)=>{
    if(a%2==0){
        return "even"
    }
    return "odd"
}
console.log(oddeven(4))
