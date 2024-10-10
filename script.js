// Declear of varriable
// let greeting = "Hello John Doe"

// Display varriable
// alert(greeting)

let variableName = "Hello, World!";  //Variable assignment

// Variables:
let age = 25; // Declare and initialize a variable

// Data Type 
let name = "John Deo"

let newName = "John"; // String
let newAge = 30; // Number
let isStudent = true; // Boolean

let boyName = 'Esther'; //string
var lastName = 'Okoh'; //string
const nickName = 'Oluwaseun'; //string
let boyAge = 16; //number
let maritalStatus = null; // object
let fellingForMichael = undefined; // undefined
let single; // undefine
let skinColor = true;  //boolean

console.log(typeof(newAge))
console.log(typeof(newName))
console.log(typeof(isStudent))


console.log(typeof(boyName))
console.log(typeof(nickName))
console.log(typeof(lastName))
console.log(typeof(age))
console.log(typeof(maritalStatus))
console.log(typeof(fellingForMichael))
console.log(typeof(single))
console.log(typeof(skinColor))

// Ass 
// Declare a variable named challenge and assign it to an initial value ’Distant Learning Institue’. 
// 2. Print the string on the browser console using console.log()

let challenge = "Distance Learning Institu"
console.log(challenge)


// const pi = 3.14;
// let person = "John Doe";
let answer = 'Yes I am!';
// let person = "Damilare Olarewaju"
var school = "Distance Learning Institue"
var school = "Lagos Programming School"
console.log(school);
let person = "John Doe", 
carName = "Volvo", 
price = 200;
console.log(price);

let x = 5;
let y = 6;
let z = x + y;
let w = x * y;
let m = x - y;
let h = x / y;
let e = x ** y;
let f = x % y;
console.log(w);
console.log(m);
console.log(e);
console.log(h);
console.log(f);
console.log(z);


const pi = 3.142
const g = 9.867
// math objects
// Math.round()
let roundUp = Math.round(pi)
console.log(roundUp);

// Math floor
let floorNo = Math.floor(pi)
console.log(floorNo);
console.log(Math.round(g));
console.log(Math.floor(g));

// Math.ceil()
console.log(Math.ceil(pi))
console.log(Math.ceil(g))


// Math.min
console.log(Math.min(4,5,8,5,6,9,7))

// Math.max()
console.log(Math.max(4,5,8,2,6,9,7))

// Math.pow()
console.log(Math.pow(3,4))

// Math.sqrt()
console.log(Math.sqrt(9))
console.log(Math.sqrt(100))
// Math.random()
let randOne = Math.random()
console.log(randOne);
console.log(Math.ceil(randOne));

let randomNo = Math.random() *11
console.log(Math.floor(randomNo));

let dice1 = Math.ceil(Math.random()*6)
let dice2 = Math.ceil(Math.random()*6)
console.log(dice1 + " : " + dice2);

// string concatenation
let firstName = "Damilare";
let myLastName = "Olarewaju";
let myAge = "65";

let fullName = firstName +" " + myLastName 
let about = "My name is " + fullName + " I'm " + myAge + " years old." 
console.log(fullName);
console.log(about);

// template literals
// Template literals, introduced in ES6, allow for dynamic string creation with embedded expressions, enhancing readability and flexibility.
console.log(`My name is ${firstName} ${myLastName}, I'm ${myAge} years old.`);

// class work
// declear a var called myState and myTown
// form a sentence using firstName myLastName myAge myState and myTown


// escaping charaters
let message = 'What\'s your favorite\'s color?'
let message1 = "What's your favorite's color?"
let message2 = `What\'s your favorite color?`
let message3 = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint facere ad culpa asperiores eveniet minima, dolores illo reiciendis dicta nam eum enim optio nobis aliquam quidem odit labore recusandae officia. \n \tMaiores error quidem quae ea praesentium suscipit, laborum similique amet.?`
console.log(message);
console.log(message1);
console.log(message2);
console.log(message3);



// string method
// 1. **String Creation:**
//    JavaScript strings can be created using single quotes (`'`), double quotes (`"`), or template literals (`` ` ``). Let's explore each method:
// ```javascript

// Single quotes
let strSingle = 'Hello';

// Double quotes
let strDouble = "World";

// Template literals
let templateStr = `JavaScript is ${strSingle} ${strDouble}!`;

// .length
let js = 'javascript'
console.log(js.length);
console.log(message3.length);
// index
console.log(js[5]);
console.log(js[1]);
console.log(js[6]);
console.log(js[0]);

// toUpperCase & toLowerCase
console.log(js.toUpperCase());
let sch = "DISTANCE LEARNING INSTITUTE"
console.log(sch.toLowerCase());

// .slice()
console.log(js.slice(0,4))
console.log(js.slice(4,8))
console.log(js.slice(2,9))
console.log(js.slice(0,1))
// alert(js.slice(0,1))


// let username = prompt("Enter your name")
// let abv = username.slice(0, 1)
// let capt = abv.toUpperCase()
// let otherName = username.slice(1, username.length)
// let restAbv = otherName.toLowerCase()
// let output = capt + restAbv
// console.log(output);

// .includes
console.log(js.includes("x"));


// .repeat()
console.log(js.repeat(3))

// .replace()
console.log(js.replace('s', 'X'));


// .split()
let pyt = "I love Javascript"
console.log(pyt.split());
console.log(pyt.split(' '));

// operator
// comparism operator
// > < >=  <= == === !==

console.log(3>2); //true
console.log(3<2); // false
console.log(3>=2); //false
console.log(3<=2);
console.log('3' == 3);
// strit comparism
console.log('3' === 3);
console.log(3 !== 3);

// LOGICAL OPERATORS
// ampersand AND &&
console.log(3>2 && 2>3); //false
console.log(3>2 && 2<3); //true

// pipe OR ||
console.log(3>2 || 2>3); //true
console.log(3<2 || 2>3); //false

// INCREMEMET OPERATOR
// We use inrement operator to increase value in a variable

let count = 20
count++
++count
++count
console.log(count);

count--
--count
--count
console.log(count);

// ARITHMETIC OPERATOR
let numValue = 0
// numValue = numValue + 1

numValue += 1;
numValue += 1;
numValue += 1;
numValue += 1;
numValue += 1;
numValue += 1;
console.log(numValue);

let numVal = 15
numVal -= 1;
numVal -= 1;
numVal -= 1;
numVal -= 1;
numVal -= 1;
console.log(numVal);

let numMul = 2;
// numMul = numMul * 2;
numMul *= 2
console.log(numMul);

let numDiv = 6;
numDiv /= 3;
console.log(numDiv);

// DATE
let today = Date()
console.log(today);

let nowDate = new Date()
console.log(nowDate);
let month = nowDate.getMonth()
console.log(month);
let day = nowDate.getDate()
let hour = nowDate.getHours()
let minute = nowDate.getMinutes()
let second = nowDate.getSeconds()
let year = nowDate.getFullYear()
console.log(hour);
console.log(minute);
console.log(second);
console.log(year);
console.log(`Today Date is ${day}-${month +1}-${year}, and the time is ${minute}:${second}:${hour}`);
let date = document.getElementById('date')
date.innerHTML= `Today Date is ${day}-${month +1}-${year}, and the time is ${hour}: ${minute}:${second}`;

let futureDate = new Date('20 september 2025')
let result = futureDate - nowDate
let futureday = result/24/60/60/1000
console.log(futureday);

// write script that prompt user to enter side A, side B and side C of a triangle. 
// calculate the perimeter of the triangle

// let sideA = prompt("Enter Side A")
// let sideB = prompt("Enter Side B")
// let sideC = prompt("Enter Side C")
// let perimeterOfTriangle = parseInt(sideA) + parseInt(sideB)  + parseInt(sideC) 
// alert(`The perimeter of ${sideA}, ${sideB}, ${sideC} = ${perimeterOfTriangle}`)

// CONDITIONAL STATEMENT
// SYNTAX
// if (condition){
//     code
// }

// let info = prompt("Write your info")
// if (info === 'single'){
//     alert(`I am single and searching`)
// }else if(info === "engaged"){
//     alert("I am in a relationship")
// }else if(info === "complicated"){
//     alert("I don't want to talk about it")
// }else if(info === "married"){
//     alert("Leave me, I am married")
// }else{
//     alert("Please write you status")
// }

let greeting = new Date 
if (greeting.getHours() < 12){
    document.getElementById('greeting').innerHTML = `Good Morning`
}else if (greeting.getHours() >= 12 && greeting.getHours()<= 16){
    document.getElementById('greeting').innerHTML = `Good Afternoon`
}else if (greeting.getHours() > 16 && greeting.getHours() <= 20){
    document.getElementById('greeting').innerHTML = `Good Evening`
}else{
    document.getElementById('greeting').innerHTML = `Good Night`
}

// ARRAY
let userName = "Segun"
let userAge = 25
let userSex = 'Female'  

let myUser = ['Ade', 28,'male', 'christain']
console.log(myUser[0]);
console.log(myUser[1]);
console.log(myUser[2]);

// length of array 
console.log(myUser.length);

// empty array 
let emptyArray = new Array()
console.log(emptyArray);

let emptyArray1= []
console.log(emptyArray1);

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const countries = [
    'Nigeria',
    'Japan',
    'France',
    'Egypt',
    'Germany',
    'Kenya',
    'Hungary'
]

// concat of array
console.log(numbers.concat(countries));

// includes
console.log( countries.includes('Egypt'));

let guestList = [
    'ruth', 
    'esther', 
    'gbenga', 
    'damilare'
]
// let invite = prompt('Enter your name')
// if ( invite === ''){

//     alert(`Enter your name`)
// }else if(guestList.includes(invite)){

//     alert(`${invite}, you are welcome`)
// }else{

//     alert(`${invite}, you are not invited`)
// }

// Function 
function multiplyTwoNos(a,b){
    return a * b
}

let multiResult = multiplyTwoNos(5,9)
console.log(multiResult);

let addTwoNo= ((a,b)=>{
    return a+b
})

console.log(addTwoNo(15, 69));

// .slice
console.log(countries.slice(1,5));
// .sort
console.log(countries.sort());
console.log(countries.reverse());

let numbering =[
    2, 23, 12, 56, 1, 0, 45, 3, 4, 26, 44, 14, 6, 7, 15, 19, 25
]

console.log(numbering.sort(function(a,b){
    return a-b
}));

// let sortNo = numbering.sort(function(a,b){
//     return a-b
// }) 
// console.log(sortNo);
console.log(countries.join());
console.log(countries.join(''));
console.log(countries.join(' '));
console.log(countries.join(', '));
console.log(countries.join(' ,'));
console.log(countries.join('# '));

// Array.pop; it will remove the last index in an array
console.log(countries.pop());
console.log(countries);
console.log(countries.pop());
console.log(countries.pop());
console.log(countries);

// Array.push; it will add to the last index in an array

countries.push('Brazil')
countries.push('England')
countries.push('Mali')
console.log(countries);

// Array.shift; it will remove the first index in an array
countries.shift()
console.log(countries);

// Array.unshift; it will add to the first index in an array
countries.unshift('Algeria')
console.log(countries);

// LOOP: with loop we can itrate an array, i.e pick each index in an array
// for loop
// while loop
// do while
// for of loop


// for loop
// syntax
// for(initialization, condition, increament/decreament){
//     output
// }

for(let i = 0; i < 5; i++){
    console.log(i);
}

// write a loop that will say; i love javascript

for(let i = 1; i<=5; i++){
    console.log(i +'.' + ' i love javascript');
}
// write a loop that generate 5 random numbers between 1 & 50. The result should be in an array

let emptyAry = []
for(let i=1; i<=5; i++){
    let randNo = Math.floor(Math.random()*50 +1)
    emptyAry.push(randNo)
}
console.log(emptyAry);

// write a loop that will print
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25

for(let i = 1; i<=5; i++){
    let loopReslt = i * i
    // console.log(i+ ' ' +'* 2' + ' = ' + loopReslt );
    console.log(`${i} * ${i} = ${loopReslt}`);
}

// write a script that gernerate a list of 15 random number
// get the sum of all even numbers
// get the sum of all the array
// sort the array
// find the min Value and max Value
// multiply the each element of the array by 2 and get the sum of the new list
// filter out odd numbers from the list
// filter out even numbers from the list

let listOf15No = [];
for (let i = 1; i <=15; i++){
     let randOf15No = Math.floor(Math.random()*70 +1)
     listOf15No.push(randOf15No)
}
console.log(listOf15No);

let evenNo = 0
for (let i = 1; i<=listOf15No.length; i++){
    if(listOf15No[i] % 2 == 0){
        evenNo+=listOf15No[i]
    
    }
}
console.log(evenNo);

function sumArr(arr){
    let sum = 0
    for(i=0; i<arr.length; i++){
    sum += arr[i]
    }
    return sum
}
console.log(sumArr(listOf15No));

let evenNum = listOf15No.filter(function(num){
    if (num % 2 == 0) {
        return true
    }
})

console.log(evenNum);
let oddNum = listOf15No.filter(function(num){
    if (num % 2 !== 0) {
        return true
    }
})

console.log(oddNum);

// setTimeOut
setInterval(()=>{
    document.getElementById('timeout').innerHTML= "I am Coming Home"
},5000)


// forEach; it will not return a new array. it takes three parameter.
countries.forEach(function(element, index, array){
    console.log(element.slice(0,3).toUpperCase());
    // console.log(index);
    // console.log(array);
})

// .map(); it will return a new array
let mapList = countries.map((ele,ind,arr)=>{
    return ele.slice(0,3).toUpperCase()

})

console.log(mapList);

let newNum = countries.map((itr)=>{
    return itr.length
})

console.log(newNum);

let sumNew = newNum.map((itr)=>{
    return itr *2
})
console.log(sumNew);

let filterNo = listOf15No.filter((num)=>{
    return num % 2 == 0
})

console.log(filterNo);

let filterOddNo = listOf15No.filter((num)=>{
    return num % 2 == 1
})
console.log(filterOddNo);

let applicants =[     {firstName: 'John', lastName:'Doe', favourite_color: 'white', age: 20, qualification: 'SSCE', experience:6}, 

{firstName: 'Peter', lastName: 'Piper', favourite_color: 'blue', age: 17, qualification: 'OND', experience:5},     

{firstName: 'Angela', lastName: 'Okorie', favourite_color: 'green', age: 17, qualification: 'OND', experience:5},     

{firstName: 'Stella', lastName: 'Damascus', favourite_color: 'Red', age: 17, qualification: 'OND', experience:5},     

{firstName: 'Emeka', lastName: 'Ike', favourite_color: 'white', age: 28, qualification: 'SSCE', experience:4},     

{firstName: 'Liquor', lastName: 'Rose', favourite_color: 'yellow', age: 17, qualification: 'OND', experience:0},     

{firstName: 'White', lastName: 'Money', favourite_color: 'white', age: 30, qualification: 'SSCE', experience:10},    

{firstName: 'Precious', lastName: 'Agunbiade', favourite_color: 'white', age: 25, qualification: 'SSCE', experience:5}   
];

let passApplicant = applicants.filter((ele)=>{
    return ele.age >= 18 && ele.experience>4
})

console.log(passApplicant);





