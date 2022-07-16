// function

// declaration
// function fun();

//define 
// function fun1() {
//  console.log('fun1');
// }

// fun1()

// Parameters and arguments

// function name(firstName) {
//     console.log(firstName);
// }

// name("deepak");

//anonymous function

// function () {

// }


// let array = [10,20,30,40];

// array.forEach(function(element,index,arrays) {
//     console.log(element,index,arrays);
// })

// default functions

// function fun(a,b = 10) {
//     console.log(a,b);
// }

// fun(10,50);

// rest

// function fun(a,b,...c) {

//     let [d,e] = [...c];
//     console.log(d,e);
//     console.log(a,b,c);
// }

// fun(10,20,30,40,50,80,90,100);

// arrow functions

// const arrow = a =>  "Fasfdsadf";

// console.log(arrow());


// write a function to find largest number in array

let array = [10, 20, 90, 40, 50];

function largestNumber(array) {

    let largest = 0;

    for (const item of array) {
        if (item > largest) {
            largest = item;
        }
    }

    console.log(largest);
}

// largestNumber(array);


// write a program to find HCF of any two number

let num1 = 150;
let num2 = 65;

function HCF(num1,num2) {
    let largest  = num1 > num2 ? num1 : num2;

    // let hcf = num1*num2/largest;

    for (let index = 2; index < largest; index++) {
     
        if(isPrime(index)) {
            if(num1 % index === 0 && num2 % index === 0 ) {
                hcf*=index;
            }
        }        
    }

    console.log(hcf);
}

function isPrime(number) {
    let counter = 0;

    for(let index = 2 ; index <= number ; index++ ) {
        if(number%index === 0) {
            counter++;
        }
    }

    if(counter > 1) return false
    else return true
}

HCF(num1,num2);


// 123456789
// 9 
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1



