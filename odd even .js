year=2021

if (year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log("even")
        }else{
            console.log("odd")
        }
        console.log("even")
    }else{
        console.log("odd")
    }
    console.log("even")
}else{
    console.log("odd")
}