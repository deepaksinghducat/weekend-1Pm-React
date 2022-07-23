// Array 
// 1. []
// 2 new Array 
// 3 Array.of 
// 4 Array.from 


// const array = [10, , 10, 20, 30, 40, 50, 60, 70];

// const array = new Array(10,20);

// const array = Array.of(10,20,30,40,50,60,70);

// const array = Array.from([10,20,40,60])

// console.log(array);

// functions in array 

// const array = [10,20,30,40,50,60];

// push pop shift unshift

// console.log(array.push(50),array);

// console.log(array.pop(),array);

// console.log(array.shift(),array);

// console.log(array.unshift(10),array);

// find
// console.log(array.find((element, index) => {
//     if (element == 10) {
//         console.log(element, index);
//     }
//     return element;
// }));


// Filter 

// const array = [10, 20, 30, 40, 50, 60, 70];

// console.log(array.filter((element) => element === 10))


// Map 
// const array = [10, 10, 20, 30, 40, 50, 60, 70];

// let mappedValue = array.map((element) => element* 2)
// console.log(mappedValue);

// indexOf

// const array = [10, 10, 20, 30, 40, 50, 60, 70];

// console.log(array.indexOf(20));

// array.splice(array.indexOf(60),3)

// console.log(array);

// Reduce 

// const array = [10, 10, 20, 30, 40, 50, 60, 70];

// const number = array.reduce((previousValue, currentValue) => {
//     return previousValue += currentValue
// },10)

// console.log(number);