//singleton   ///when object creat using constructor




//1 way (constructor method-->singleton)
Object.create

//2 way //////object literals


const mysymbol=Symbol("key1")

const JsUser={
    name:"Antara",
    "title":"debroy",
  //mysymbol:"mykey1", 
  [mysymbol]:"mykey1",
    age:21,
    location:"Asansol",
    ph_no:2582655122,
    islogged:false,
    lastLogininDays:["Monday","Saturday"]
}

console.log(JsUser.islogged)//false
console.log(JsUser.name)//Antara
//console.log(JsUser[name])//error, karon internally object key gulo ke as a 
// string dhore,tai jkn amra [] operator use korbo tkn take string er moddei 
//check korte hbe
console.log(JsUser["name"])//Antara
console.log(JsUser.title)//error as it is defined as   "title":"debroy", but amr input debroy
console.log(JsUser["title"])//debroy
console.log(JsUser.mysymbol)//mykey1
console.log(typeof JsUser.mysymbol)//string kintu ami to chai symbol datatype asuk, ekhne symbol datatype asche na, 
//symbol datatype ele tar jnne way ache

 //[mysymbol]:"mykey1",

JsUser.ph_no=9999999999
console.log(JsUser.ph_no)//9999999999
Object.freeze(JsUser) //object ke ami freeze korte pari jate value change na hoi
JsUser.ph_no=88888888888
console.log(JsUser.ph_no)//9999999999
console.log(JsUser)
// {
//     name: 'Antara',
//     title: 'debroy',
//     age: 21,
//     location: 'Asansol',
//     ph_no: 9999999999,
//     islogged: false,
//     lastLogininDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'// ---------------------------------- look this one this is symbol
//   }


 //if we write mysymbol:"mykey1" in JsUser then output will be
//  {
//     name: 'Antara',
//     title: 'debroy',
//     mysymbol: 'mykey1',---------------------------------- look this one this is string
//     age: 21,
//     location: 'Asansol',
//     ph_no: 9999999999,
//     islogged: false,
//     lastLogininDays: [ 'Monday', 'Saturday' ]
//   }


//function in object

JsUser.greeting= function(){
    console.log("HELLO JS USER")
}


console.log(JsUser.greeting()) //HELLO JS USER undefined
console.log(JsUser.greeting)//[Function (anonymous)]
                  

JsUser.greeting2= function(){
    console.log(`HELLO JS USER ${this.name}`) //this means object JsUser  
}

console.log(JsUser.greeting2())//HELLO JS USER Antara
                              //undefined




