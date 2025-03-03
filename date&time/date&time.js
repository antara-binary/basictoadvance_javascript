//always calculating from jan 1,1970
 


let myDate=new Date()
console.log(myDate)//2025-03-03T15:41:00.956Z
console.log(myDate.toString())//Mon Mar 03 2025 21:11:43 GMT+0530 (India Standard Time)
console.log(myDate.toDateString())//Mon Mar 03 2025
console.log(myDate.toLocaleString())//3/3/2025, 9:13:31 pm
console.log(typeof myDate)//object


let myCreatedDate =new Date(2023,0,23)
console.log(myCreatedDate.toDateString())//Mon Jan 23 2023
let myCreatedDate1 =new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString())//23/1/2023, 5:03:00 am

let myCreatedDate3 =new Date("2023-01-14")//yymmdd
console.log(myCreatedDate3.toLocaleString())//14/1/2023, 5:30:00 am

let myCreatedDate4 =new Date("1-14-2023")//ddmmyy
console.log(myCreatedDate4.toLocaleString())//14/1/2023, 5:30:00 am


let myTimeStamp=Date.now()//timeStamp is use for create quiz, poll, who is fast in quiz ,poll
console.log(myTimeStamp)//1741017750946 starting date from now date in milisec

//now time in miloseconds
console.log(Date.now())//1741017892107 in milisec
//convert time milisecond to second
console.log(Math.floor(Date.now()/1000))//1741017993

let newdate=new Date()
console.log(newdate)

//only month
console.log(newdate.getMonth())//2 ->>march date start from 0
console.log(newdate.getMonth()+1)//3->march


//only day
console.log(newdate.getDay())//1



//****MOST IMPORTANT METHOD*****//


// 1️⃣ new Date()
// This creates a new Date object representing the current date and time.
// 2️⃣ .toLocaleString('default', { weekday: "long" })
// The toLocaleString() method is used to format the date according to a specific locale.
// The first argument ('default') tells JavaScript to use the browser's default locale.
// The second argument is an options object that specifies how you want the output formatted.
// 3️⃣ { weekday: "long" }
// This option tells JavaScript to display the full name of the day (e.g., "Monday", "Tuesday", etc.).
// The result depends on the current date.

let newdateagain=new Date()//toLocaleString er bethore ami ja kichu define korbo ota ekta object
newdateagain.toLocaleString('default', {
    weekday: "long"
})