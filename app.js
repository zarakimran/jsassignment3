//===============DATE METHOD=================

// var a = new Date()
// var b = a.getDate()
// document.write(a)

//--------------


// var month = new Date()
// var currentmonth = month.getMonth()
// alert( "Current month" + " :" + currentmonth)

//------------------


// var a = new Date()
// a.toString
// var b = currentday.toString()
// var c = b.slice(0,3)
// document.write("Today is " + c)

//---------


// var a = new Date()
// a.toString
// var b = currentDate.toString()
// var c = b.slice(0,3)
// if (c === "Sat"){
//     document.write("<h1>It's Fun Day</h1>")
// }else if(c === "Sun"){
//     document.write("<h1> It's Fun Day</h1>")
// }
// else( alert "Kam kro chup chap")

//------------


// var a = new Date()
// var b = a.getDate()
// if (b === 15){
//     document.write("Fifteen days of the month")
// }
// else (
//     document.write("<h1>Last days of the month</h1>")
//  )

//------------


//   var  a = new Date()
//   var b = a.setMilliseconds(1970)
//   var c = a.setMinutes(1970)
//   document.write("Curent Date" +   a + "</br>"  + "Elapsed millisecond since january 1,1970" + b  + "</br>" + "Elapsed minute since january 1,1970" + c )

//---------------


//   var time = new Date
//   var currenttime = time.getTime()
//   if(currenttime < "12" ){
//       document.write("Its AM")
//   }
//   else(currentTime >= "12")
//      { document.write("It's PM")
//   }

//------------


// var a = new Date()
// var b = a.setDate(31)
// var c = a.setMonth(11)
// var d = a.setFullYear(2020)
// document.write("Later date" +  ":" + " " + a)

// var a = new Date()

// var b = a.setMonth(2015,1,1)

// document.write(a)

//  var d = new Date()
//  var b = d.getDate("Jan 17,2021")
//  d.setFullYear(d.getFullYear() - 100)
//  document.write("Current date is" + ":" +b +"<br>" + "100 years back it was" + ":" + d)

//-------------------



// function getage(d1, d2){
//     d2 = d2 || new Date()
//     var diff = d2.getTime() - d1.getTime()
//     return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
// }
// document.write("your age is" + ":" +  getage (new Date(2000, 7, 3)) )

//--------------


// var numberunits = 410
// var latepaymentcharge = 350
// var chargesperunit = 16
// var netamount = numberunits * chargesperunit
// var grossamount = netamount + latepaymentcharge
// document.write("<h1>K-Electric Bill</h1>" + "Customer Name" + ":" + "Zarak" + "<br>" + "Month" + ":" + "January" + "<br>" + "Number of units" + ":" + numberunits + "<br>" + "Cherges per unit" + ":" + 16 + "<br><br>" + "Net amount payable (withindue date)" + ":" + netamount + "<br>" + "Late payment surcharge" + ":" + latepaymentcharge + "<br>" + "Gross amount payable(after due date" + ":" + grossamount)
 
//------------------


//==================FUNCTION=====================


// function time(){
//     var a = new Date()
//     var b = a.getDate()
//     document.write(a)
// }
// time()

//----------------


// var input1 = prompt("Enter a number: ", 0)
// var input2 = prompt("Enter another number: ", 0)
// var input3 = prompt("Enter another number: ", 0)
// var value1 = parseFloat(input1) + parseFloat(input2)
// var value3 = parseFloat(input3)
// var sum = value1 + value3
// document.writeln("<h1> First number:"  + value1 + "</h1>")
// document.writeln("<h1> Second number: " + value3 + "</h1>")
//  document.writeln("<h1> Sum: " + sum + "</h1>")

 //-------------


// function checkpalindrome(str_entry){
    
//        var convstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'')
//         var count = 0
    
//         if(convstr==="") {
//             console.log("Nothing found!")
//             return false
//         }
    
//         if ((convstr.length) % 2 === 0) {
//             checkk = (convstr.length) / 2
//         } else {
    
//             if (convstr.length === 1) {
//                 console.log("Entry is a palindrome.")
//                 return true
//             } else {
    
//                 checkk = (convstr.length - 1) / 2
//             }
//         }
 
//         for (var x = 0 ; x < checkk ; x++) {
     
//             if (convstr[x] != convstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.")
//                 return false
//             }
//         }
//         console.log("The entry is a palindrome.")
//         return true
//     }
//  checkpalindrome('madam')
//  checkpalindrome('nurses run')
//  checkpalindrome('fox') 


//-------------------



// function uppercase(str)
// {
//   var array1 = str.split(' ')
//   var newarray1 = []
    
//   for(var x = 0 ; x < array1.length ; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1))
//   }
//   return newarray1.join(' ')
// }
// document.write(uppercase("the quick brown fox"))

// function longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi)
//   var result = array1[0]

//   for(var x = 1 ; x  < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x]
//     } 
//   }
//   return result
// }
// document.write(longest_word("Web Development Tutorial"))

// function char_count(str, letter) 
// {
//  var letter_Count = 0
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1
//       }
//   }
//   return letter_Count
// }

// console.log(char_count('JSResourceS.com', 'o'))

// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2
//   console.log("The circumfrence is " + y + ".")
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius
//   console.log("The area is " + x + ".")
//   }
  
//   calcCircumfrence(30)
//   calcArea(10)

//-----------------


// var reclength = parseInt(prompt("Enter length of rectangle:"))
// var recwidth = parseInt(prompt("Enter width of rectangle:"))
// var areaofrec = reclength * recwidth 
// console.log("Area of rectangle is: " + areaofrec)
// var circumferenceOfRectangle = 2 * (reclength) + 2 * (recwidth)
// console.log("Circumference of rectangle is: " + circumferenceOfRectangle)
  
//-------------------


// function factorial(n){
//     let answer = 1
//     if (n == 0 || n == 1){
//       return answer
//     }else{
//       for(var i = n i >= 1 i--){
//         answer = answer * i
//       }
//       return answer
//     }  
//   }
//   let n = 6
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer)

//-------------

//===================SWITCH , WHILE , DO-WHILE==================


// function sum(a, b) {
//     var a = +prompt("please enter a number")
//     var b = +prompt("please enter a number")
//     return a+b
//   }  
//   let result = sum()
//   alert( result )

//-----------------


// function power(base, exponent) {
// 	var result = 1
// 	if(exponent == undefined)
// 		exponent = 2
// 	for(var i=1 ; i<=exponent ; i++) {
// 		result = result * base
// 	}
// 	return result
// }

// console.log(power(2,4))

//----------------



//  function leapyear(year)
// {
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)
// }
// console.log(leapyear(2015))
// console.log(leapyear(2000))
// console.log(leapyear(2010))
// console.log(leapyear(1800))
// console.log(leapyear(2021))

//-----------------

// // find the area of a triangle

// var side1 = parseInt(prompt('Enter 1st Side: '))
// var side2 = parseInt(prompt('Enter 2nd Side: '))
// var side3 = parseInt(prompt('Enter 3rd Side: '))

// // for semi-perimeter
// var sp = (side1 + side2 + side3) / 2

// // for area
// var area = Math.sqrt(
//   sp * (sp - side1) * (sp - side2) * (sp - side3)
// )

// console.log(
//   `The area of the triangle is ${area}`
// )
