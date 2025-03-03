const myArr=[0,100,2,3,4,5]
console.log(myArr)//[ 0, 1, 2, 3, 4, 5 ]
//js array is resizable and can contain a mix of different datatypes

console.log(myArr[0])//0
console.log(myArr[1])//100

//interview->>>> js array-copy operation create shallow copies  ////shallow copy->call by reference

const myArr1=["antara",0,1.53]
console.log(myArr1)//[ 'antara', 0, 1.53 ]

//another way of creation array
 const myArr3=new Array(1,2,3,4,7)
 console.log(myArr3)//[ 1, 2, 3, 4, 7 ]


/******ARRAY METHODS */

const myArr4=new Array(1,2,3,4,7)
 console.log(myArr4)//[ 1, 2, 3, 4, 7 ]
 myArr4.push(100);
 console.log(myArr4)//[1,2,3,4,7,100 ]
 myArr4.unshift(9); 
 console.log(myArr4)//[9,1,2,3,4,7,100]
 console.log(myArr4.includes(9))//true
 console.log(myArr4.includes(19))//false
 console.log(myArr4.indexOf(19))//-1

const myArr5=new Array(1,2,3,4,7)
const arr1=myArr5.join()//Converts the array into a string by joining elements with a comma , (default separator).
console.log(myArr5)//[ 1, 2, 3, 4, 7 ]
console.log(typeof myArr5)//object
console.log(arr1)//1,2,3,4,7
console.log(typeof arr1)//string


//slice splice
//splice method original array ke manupulate kore dei,slice kore na

const myArr6=new Array(1,2,3,4,7)
console.log("A", myArr6) //A [ 1, 2, 3, 4, 7 ]
const myn1=myArr6.slice(1,3)
console.log(myn1)//[ 2, 3 ]
console.log("B", myArr6)//B [ 1, 2, 3, 4, 7 ]


const myn2=myArr6.splice(1,3)
console.log(myn2)//[ 2, 3, 4 ]
console.log("C",myArr6)//[ 1, 7 ]
