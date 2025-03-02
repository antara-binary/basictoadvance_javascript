
/* primitive datatypes*///(call by value)
//7 types : string ,number,boolean,null,undefined,symbol,bigInt,

// const id=Symbol('123')
// // const anotherid=Symbol('123')
// // console.log(id===anotherid)
// console.log(typeof id)//symbol
//  /*
//In JavaScript, Symbol is a primitive 
//data type used to create unique identifiers. Even though both id and 
//anotherid are initialized with the same description ('123'), each call
 //to Symbol() creates a unique symbol.//

//  const bignum=1111111112222222225;
//  console.log(bignum)//1111111112222222200
//  const bignum1=1111111112222222225n;
//  console.log(bignum1)//1111111112222222225n




//reference datatype not primitive
//array,objects,functions


//array
//------array--------//
const heros=["virat","rohit"];
console.log(heros)

//------ object-------//
let obj={
    name:"antara",
    age:21
}
console.log(obj)

//------function---------//

const myfunction=function(){
    console.log("hello coder")
}

myfunction();
console.log(typeof myfunction)//function
console.log(typeof heros)//object
console.log(typeof obj)//object


//non-primitive er datatype amr sobsmy object hoi function chara function ke function object bole
