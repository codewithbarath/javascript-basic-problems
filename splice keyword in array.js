a=[10,20,30,40,50]

//to remove only numbers
a.splice(1,2)
console.log(a)

//to remove and add element in that space

a.splice(1,2,1000000)
console.log(a)

//without removing element and add element in particular index

a.splice(2,0,234,9987,66655443)
console.log(a)
