


// let a = 12;
// let b = "13";
// let c = a+b;

// console.log(c);
// console.log(typeof(c));



// let a = 10;
// let b = 20;

// console.log("Sum of a and b is " + (a + b));



// let age = Number( prompt("what is your age"));
// console.log(age);




// Swaping value 
// Method 1 with extra variable
// let a = 10;
// let b = 20;
// let temp = a;
// a = b;
// b = temp;

// console.log(a,b);




// Method 2 without extra variable

// let a = 10;
// let b = 20;

// a = a+b;  // a = 10 + 20 = 30
// b = a-b;   // b = 30 - 20 = 10 
// a = a -b;  // a = 30 - 10 = 20;
// console.log(a);
// console.log(b);


// method 3 

// let a = 10;
// let b = 20;

// [a,b] = [b,a];

// console.log(a,b);




// Unary operator 


// // let i = 11;
// i = i++ + ++i; // 11 + 13
// console.log(i);



// let a = 11 , b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log("a =",a);
// console.log("b =",b);
// console.log("c =",c);



// let b = true;
// b++
// console.log(b);





// MATH FUNCTIONS

console.log(Math.round(10.5)); //  round figure mai number ko kar deta hai.

console.log(Math.ceil(10.1)); // isme aagr point aa gya to 1 number badh jata hai yaha 11 ho jayega 

console.log(Math.floor(10.9)); // imse aagr point aa gya to 1 floor niche aa jata hai 

console.log(Math.trunc(10.98)); // remove the decimal part

console.log(Math.pow(2,5)); // ye power bana deta hai 2 ke power 5 ho gya isme // 32

console.log(Math.sqrt(16)); //  ye square root niklata hai

console.log(Math.cbrt(8)); // ye cube root niklata hai

console.log(Math.abs(-15)); // negative value ko positive mai convert karta hai bss

console.log(Math.max(78,37,83)); // maximum value ko return karta hai 

console.log(Math.min(33,4,2,4,));  // minimum value ko return karta hai

console.log(Math.floor(Math.random()*9000+1000)); // 0 se 1 taak koe v random value return karta hai
// aur 4 digit ka otp generate karne ke kaam mai v aata hai

let a = 848.44343;

console.log(a.toFixed(2)); // point ke baad kitna digit chayeye wo issse niklte hai hmesha ye string deta hai // 848.44











