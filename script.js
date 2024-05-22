// assignment questions

// let city = prompt("Enter to city")
// if (city === "karachi") {
//     alert("welcome to the city of light")
// }
// else{
//     alert("not welcome");
// }


// let gender = prompt("enter your gender")
//  if (gender === "male"){
//     alert("Good morning sir")
//  }
// else if (gender === "female"){
//     alert("Good morning ma am")
// }
// else{
//     alert("other")
// }


// let color = prompt("Input color of road traffic signal")
// if (color === "red"){
//     alert("Must stop")
// }
// else if (color === "yellow"){
//     alert("ready to move")
// }
// else if(color === "green"){
//     alert ("move now")
// }
// else {
//     alert("not requirded")
// }

// CHAP 15 ARRAY

// var city0 = "Atlanta";
// var city1 = "Baltimore";
//var city2 = "Chicago"; 
//var city3 = "Denver";
//var city4 = "Los Angeles";
// var city5 = "Seattle";

//    console.log("Welcome to" +"  "+ city3);


//ARRAYS PROPERTY
// array with string 
let cities = ["Atlanta" , "Baltimore" , "Chicago" ,  "Denver" , "Los Angeles" , "Seattle"]
console.log(cities[1].length);
console.log(cities[3].length);


// array with integers 
let number = [1, 5 ,78 ,33 ,233 ,55,67 ,8]
console.log(number[4].length);   


// array with integers and strings
let info = ["kainat" , 22 , "laiba" , 221 ,"anoosha" , 33]
console.log(info[0].length);


// arrays with strings bullian and itegers if bullian and itegers are un commas tahan it consider both in length(count)
let mixedarray = [1 , "kainat" , true , false , 33, 33 ,5 ,4]
console.log(mixedarray.length);
console.log(mixedarray);


// ARRAYS METHOD CHP 16
// PUSH () ADD TO END (KOI CHEEZ ADD KRANI HO ARRAY M)
let citiesS = ["Atlanta" , "Baltimore" , "Chicago" ,  "Denver" , "Los Angeles" , "Seattle"]
console.log(citiesS.push("Pakistan" , "india"));
console.log(citiesS);
// or
citiesS.push("india")
console.log(citiesS);


// pop  which remove  the end
let Cities = ["Atlanta" , "Baltimore" , "Chicago" ,  "Denver" , "Los Angeles" , "Seattle"]
console.log(Cities.push("Pakistan" , "india"));
Cities.pop("India")
console.log(Cities);

// to string
console.log();
