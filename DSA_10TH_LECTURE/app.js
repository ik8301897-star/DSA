


// #1 

// for(let i = 1; i<=10;i++){
//     console.log(i);
    
// }


// #2

// for(let i = 10 ; i>=1; i--){
//     console.log(i);
    
// }


// #3

// for(let i = 1; i<=100; i++){
//     if(i% 2 == 0){
//         console.log(i);
        
//     }
// }


// #4

// for(let i = 1; i<=100; i++){
//     if(i %2 ==1){
//         console.log(i);
        
//     }
// }


// #5

// let user = Number(prompt("Enter a number"))

// for(let i = 1; i<=user; i++){
//     console.log(i);
    
// }


// #6

// let user = Number(prompt("Enter a number"))

// for(let i = user; i>=1; i--){
//     console.log(i);
    
// }


// #7

// let i = 5
// for(let j= 1 ; j<=10; j++){
//     console.log(i,"*",j ,"=", i * j);
    
// }


// #8

// let user = Number(prompt("Enter a Number"))
// for(let i = 1; i<=10; i++){
//     console.log(user,"*",i ,"=", user * i);
    
// }


// #9


// let sum = 0;

// for(let i = 1; i<=50;i++){
//     sum = sum + i
// }
// console.log(sum);


// #10

// let user = Number(prompt("Enter a Number"))
// let sum = 0;
// for(let i = 1; i<=user; i++){
//     sum = sum + i
// }
// console.log(sum);


// #11

// let sum = 0;
// let count = 0

// for(let i = 1; i<=100; i++){
//     sum = sum + i;
//     count++
// }
// console.log(sum,count);

// let average = sum / count;
// console.log(average);



// #12

// for(let i = 1; i<=100; i++){
//     console.log(i*i);
    
// }


// #13

// for(let i = 1; i<=20; i++){
//     console.log(i*i*i);
    
// }


// #14

// for(let i = 1; i<=100; i++){
//     if(i % 5 == 0){
//         console.log(i);
        
//     }
// }

// #15

// for(let i = 1; i<=100; i++){
//     if(i % 3 ==0 && i% 5 ==0){
//         console.log(i);
        
//     }
// }


// #16

// *
// **
// ***
// ****
// *****

// let num = 5;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }


// #17

// *****
// ****
// ***
// **
// *

// let num = 5;


// for(let i = 1; i<=num; i++){
//     for(let j = 5;j>=i; j--){
//         process.stdout.write("*")
//     }
   
//     console.log();
    
// }


// # 18

// 1
// 12
// 123
// 1234
// 12345

// let num = 5;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(`${j}`)
//     }
//     console.log();
    
// }



// #20

// *****
// *****
// *****
// *****
// *****

// let num = 5;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=num;j++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }



// #21

// 1
// 22
// 333
// 4444
// 55555

// let num = 5;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(`${i}`)
//     }
//     console.log();
    
// }


// #22

// *
// **
// ***
// ****
// ***
// **
// *

// let num = 4;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=i;j++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }

// for(let i = 1 ; i<=num-1; i++){
//     for(let j = 1; j<=num-i;j++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }


// #23

//     *
//    **
//   ***
//  ****
// *****

// let num = 5;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=num-i; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=i; k++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }


// #24

// *****
//  ****
//   ***
//    **
//     *

// let num = 5;

// for(let i = 1; i<=num; i++){
//     for(let j = 1;j<=i-1; j++){
//         process.stdout.write(" ")
//     }
//     for(let k=1; k<=num+1-i;k++){
//         process.stdout.write("* ")
//     }
//     console.log();
    
// }


// # 25

//     *
//    ***
//   *****
//  *******
// *********

// let num = 5;

// for(let i = 1; i<=num; i++){
//     for(let j = 1;j<=num-i;j++){
//         process.stdout.write("  ")
//     }
//     for(let k = 1; k<=i * 2-1;k++){
//         process.stdout.write("* ")
//     }
//     console.log();
    
// }



// #26

// let num = 5;
// let fact = 1;

// for(let i = 1; i<=num; i++){
//     fact = fact * i;
// }
// console.log(fact);



// #27

// let num = 123456;
// let count = 0;

// while(num>0){
//     num = Math.floor(num / 10)
//     count++
// }
// console.log(count);



// #28

// let num = 1234;
// let rev = 0;
// while(num>0){
//     rem = num % 10;
//     rev = rev * 10 +rem;
//     num = Math.floor(num / 10)
// }
// console.log(rev);



// #29

// let num = 1421
// let rev = 0;
// let originalNum = num;

// while(num>0){
//     rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10)
// }
// console.log(rev);

// if(originalNum == rev){
//     console.log("Number is pallindrome");
    
// }else{
//     console.log("Number is not pallindrome");
    
// }


// #30

// let num = 1234;
// let sum = 0;

// while(num>0){
//     rem = num % 10 ;
//     sum = sum + rem;
//     num = Math.floor(num / 10)
// }
// console.log(sum);



// #31

// let num = 1234;
// let product = 1;

// while(num>0){
//     rem = num % 10 ;
//     product = product * rem;
//     num = Math.floor(num / 10)
// }
// console.log(product);



// #32

// let num = 58382;
// let largest = 0;

// while(num>0){
//     rem = num % 10;
//     if(rem>largest){
//         largest = rem;
//     }
//     num = Math.floor(num / 10)
// }
// console.log(largest);



// # 33 

// let num = 58392;
// let smallest = 9;

// while(num >0){
//     rem = num % 10;
//     if(rem<smallest){
//         smallest = rem
//     }
//     num = Math.floor(num/10)
// }
// console.log(smallest);



// # 35

// let num = 12;

//  if(num >0){
//     let count = 0;
//     for(let i = 1; i<=num;i++){
//         if(num % i == 0){
//             count++
//         }

//     }
//     if(count ==2){
//         console.log("Number is a prime number");
        
//     }else{
//         console.log("Number is not a prime number");
        
//     }
//  }



// #36

// let num = 3;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=num; j++){
//         process.stdout.write(`${j} `)
//     }
//     console.log();
    
// }


// #37

// let num = 3;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=num; j++){
//        process.stdout.write(`${i} `)
        
//     }
//     console.log();
    
// }


// #38

let num = 3
let a = 1
for(let i = 1; i<=num; i++){
    for(let j = 1; j<=num; j++){
        process.stdout.write(`${a}`)
        a++
    }
    console.log();
    
}