//stack memory
//stack uses in primitive datatype -> string,number,boolean,symbol
//stack->variable er copy pai
// let myname="antara"
//  let check=myname
//  myname="antara debroy"
//  console.log(check) //antara ->stack used->call by value




//heap memory
//heap uses in non-primitive datatype -> array object function
//heap->variable er reference pai

let user={
    email: "antara",
    upi:"user1"
}

let user2=user;

user2.email="debroy"
console.log(user2.email)//debroy
console.log(user.email)//debroy     =>access in heap(call by refernce)