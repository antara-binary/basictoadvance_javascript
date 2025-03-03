const score=400

//explicity define that need of number datatype
const balance=new Number(100)
console.log(balance)//[Number: 100]
console.log(score)//400

console.log(balance.toString())//string// addition property added
console.log(balance.toFixed(2))//100.00





const othernum=23.8966
console.log(othernum.toPrecision(3))//23.9
const othernum2=123.49
console.log(othernum2.toPrecision(3))//123
const othernum3=123.50
console.log(othernum3.toPrecision(3))//124
const othernum4=1123.50
console.log(othernum4.toPrecision(3))//1.12e+3
/**toPrecision(3) formats the number to 3 significant digits.
1123.50 has 5 significant digits: 1123.50.
The first three significant digits are 112, 
which means the number is rounded to 1.12 × 10³, 
resulting in scientific notation: "1.12e+3". */

const othernum5=100000
console.log(othernum5.toLocaleString())//1,00,000//US format
console.log(othernum5.toLocaleString('en-IN'))//1,00,000//Indian

// ////////********MATH//////////////


console.log(Math)//Object [Math] {}
console.log(Math.abs(7.9))//7.9
console.log(Math.abs(-10))//10
console.log(Math.round(7.9))//8
console.log(Math.round(7.2))//7
console.log(Math.round(7.5))//8
console.log(Math.ceil(4.2))//5/// if a number is greater some point then it will pick high value
console.log(Math.floor(4.2))//4
console.log(Math.floor(4.9))//4
console.log(Math.sqrt(25))//5
console.log(Math.min(4,3,6,2))//2
console.log(Math.random())//random number lies always 0 to 1
console.log(Math.random()*10)//7.743497764345417
console.log(Math.random()*10+1)//as 0.00 is not output

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)) +min)//16 //(max-min+1) this is doing because we want a range of the output
console.log(Math.floor(Math.random()*(max-min+1)))//6
console.log(Math.random()*(max-min+1))//random number


