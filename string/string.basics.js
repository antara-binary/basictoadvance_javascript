//string declaration
const nameid=new String('antara')
console.log(nameid)//[String: 'antara']
console.log(nameid[0])//a
console.log(nameid.__proto__)//{}->object
console.log(nameid.length)//6
console.log(nameid.toUpperCase())//ANTARA
console.log(nameid)//[String: 'antara']
console.log(nameid.charAt(2))//t  ----- index to character
console.log(nameid.indexOf('t'))//2   ------character to index


 let name2="barsha"
 let newname2=name2.substring(0,4);
 console.log(newname2) //index 0 to 3 total 4 chars 0-4(exclude 4)




  let name3="     a n t a r a         "
  let newname3=name3.trim()
  console.log(newname3)//a n t a r a
/*Since trim() only removes leading and trailing spaces, the string remains unchanged.*/





 let name4="barsha"
 let newname4=name2.slice(-8,5);//barsh
 console.log(newname4)
  let name5="barsha"
 let newname5=name5.substring(-8,5);//barsh//ignore it and start from 0 till 4(exclude 4)
console.log(newname5) 





const name="antara"
const repocount= 50

//console.log(name+ repocount+" value")
console.log(`hello my name is ${name} and my repo count is ${repocount}`) //string intepolation


//--------replace method-------//

const url="https://antara.com/antara%20debroy"
console.log(url.replace('%20','-'))//https://antara.com/antara-debroy
console.log(url.includes('antara'))//true
console.log(url.includes('barsha'))//false


//*********string to array conversion************//

//*********convert array in terms of - of string******/
const getname=new String('antara-debroy-asansol')
console.log(getname.split('-'))//[ 'antara', 'debroy', 'asansol' ]
console.log(typeof getname)//object
const h='antara'
console.log(typeof h)//string