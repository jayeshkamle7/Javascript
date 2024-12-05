let myArr=[1,2,3,4,5]
console.log(myArr);

//array methods

// myArr.push(6);
console.log(myArr);
//push jo he vo value add krega

myArr.pop();
console.log(myArr);
// pop jo he vo last value ko remove krega.

//concat or spread method do ya do se jyada array ko combine krne ke liye use .
const heroes=['abhi','vikas','sachiv']
const newHeros=['vidhayak','prahlad','bunty']

const mewArr= heroes.concat(newHeros)
console.log(mewArr); 
// ye concat method sse combine kra he 

const newArr=[...heroes, ...newHeros];
console.log(newArr);// ye spread method se array combine kra he 


let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));
//array.of method se hum different diff. variables ko array ke form me dikha skte he.


const arr=[1,2,[3,5],6,[2,4,[5]]];
const anotherArr = arr.flat(Infinity);
console.log(anotherArr);


console.log(Array.from("Jayesh"));




// isme array.form ye array ke form me output deta he ['j','a'....etc]









