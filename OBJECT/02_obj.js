//singleton

const tinderUser=new Object()
//console.log(tinderUser)//{}

 tinderUser.id="123abc"
 tinderUser.name="antara"
 tinderUser.isLoggedIn=false
 //console.log(tinderUser)//{ id: '123abc', name: 'antara', isLoggedIn: false }

const regularUser={
    email:"abcd@gmail.com",
    fullname:{
        userFullname:{
            name: "barsha"
        }
    }
}

//console.log(regularUser.fullname.userFullname.name)//barsha
//console.log(regularUser.fullname)//{ userFullname: { name: 'barsha' } }

//object combining

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

//const obj3={obj1,obj2}
//console.log(obj3)//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj3=Object.assign(obj1,obj2)
//console.log(obj3)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//good practice
const obj4=Object.assign({},obj1,obj2)//object.assign is a static method
//console.log(obj4)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//Object.assign({},obj1,obj2)       //{}->is a target //obj1,obj2 is a source


//main use

const obj5={...obj1,...obj2}//The ... is called the spread operator in JavaScript.
//console.log(obj5)//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//now go to tinderUser
console.log(tinderUser)
console.log(Object.keys(tinderUser))// keys chai ami tinderUser object er opor
//output is: [ 'id', 'name', 'isLoggedIn' ] etar dattype ekta array te store hye ache, etai ebr ami loop lagate parbo
console.log(Object.values(tinderUser))//[ '123abc', 'antara', false ]
console.log(Object.entries(tinderUser))//[ [ 'id', '123abc' ], [ 'name', 'antara' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true //property exist kore
console.log(tinderUser.hasOwnProperty('isname'))//false //property exist kore na



