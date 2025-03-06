function value(){
    console.log("antara")
}
//value() //value is reference //() is execute
//value()

function sum1(a,b){
    console.log(a+b) //3
}
function sum2(a,b){
    console.log(a+b) //24
   return a+b;
}
//sum(1,2);//3
//sum(1,"a")//1a
const result1=sum1(3,5)//8
console.log("Result1 is: ", result1);//Result is:  undefined

//why result is undefined
//function return nothing

const result2=sum2(14,10)//24
console.log("Result2 is: ", result2);//Result2 is:  24

function value(name){
    if(!name){
        console.log("please ener a username")//please ener a username
        
    }
    return `${name} just logged in`
}

console.log(value("antara"))//antara just logged in
console.log(value(""))//just logged in
console.log(value())//undefined just logged in

