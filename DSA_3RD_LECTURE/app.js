


// SUM OF ALL NUMBER

// let num = Number(prompt("Enter a number"));

// if(isNaN(num)){
//     console.log("Invalid Input");
    
// }
// else{
//     if(num>0){
//         let sum = 0;
//         for(let i = 1; i<=num; i++){
//             sum = sum + i
//         }
//         console.log(sum);
        
//     }
//     else{
//         console.log("Enter a Positive Number");
//         Number(prompt("Enter a number"));
        
//     }
// }





// FACTORIAL

// let pr = (prompt("Enter Your Number"));
// if(pr===null){
//     console.log("Cancelled");
    
// }
// else{
//     let num = Number(pr)
// if(isNaN(num)){
//     console.log("Invalid input");
    
// }
// else{
//     if(num>0){
//         let fact = 1;

//         for(let i = 1; i<=num; i++){
//             fact = fact * i
//         }
//         console.log(fact);
        
//     }
//     else{
//         console.log("Enter a positive Number");
      
        
//     }
// }
// }




// FACTORS OF NUMBER


// let pr = prompt("Enter a number");
// if(pr===null){
//     console.log("Cancelled");
    
// }
// else{
//     let num = Number(pr)
//     if(isNaN(num)){
//         console.log("Invalid input");
        
//     }
//     else{
//         if(num>0){
//             for(let i = 1; i<=num ; i++){
//                 if(num % i == 0){
//                     console.log(i);
                    

//                 }
//             }
//         }
//         else{
//             console.log("Enter a positive Number");
            
//         }
//     }
// }




// PRIME NUMBER


// let pr = prompt("Enter a number");
// if(pr===null){
//     console.log("Cancelled");
    
// }
// else{
//     let num = Number(pr)
//     if(isNaN(num)){
//         console.log("Invalid input");
        
//     }
//     else{
//         if(num>0){
//             let count = 0;
//             for(let i = 1; i<=num ; i++){
//                 if(num % i == 0){
//                    count++
                    

//                 }
//             }
//             if(count==2){
//                 console.log("Prime Number");
                
//             }
//             else{
//                 console.log("Not a Prime number");
                
//             }
//         }

//         else{
//             console.log("Enter a positive Number");
            
//         }
//     }
// }





// WHILE LOOP 

// Q sum of digit



// let pr = prompt("Enter a number");
// if(pr===null){
//     console.log("Cancelled");
    
// }
// else{
//     let num = Number(pr)
//     if(isNaN(num)){
//         console.log("Invalid input");
        
//     }
//     else{
//        let sumdigit = 0;
//        while(num>0){
//        let rem = num % 10;
//         sumdigit = sumdigit + rem
//         num = Math.floor(num / 10)
//        }
//        console.log(sumdigit);
      
       
//     }
// }





// Q REVERSE NUMBER

// let pr = prompt("Enter a number");
// if(pr===null){
//     console.log("Cancelled");
    
// }
// else{
//     let num = Number(pr)
//     if(isNaN(num)){
//         console.log("Invalid input");
        
//     }
//     else{
//       let reverse = 0;
//        while(num>0){
//         rem = num % 10;
//         reverse = reverse * 10 + rem;
//         num = Math.floor(num / 10)
//        }
//       console.log(reverse);
      
       
//     }
// }




// Q STRONG NUMBER


// let pr = prompt("Enter a number");
// if(pr===null){
//     console.log("Cancelled");
    
// }
// else{
//     let num = Number(pr)
//     if(isNaN(num)){
//         console.log("Invalid input");
        
//     }
//     else{
      
//       let sum = 0
//       let copy = num
//        while(num>0){
//        let rem = num % 10;
//        let  fact = 1;
//         for(let i = 1; i<=rem; i++){
//             fact = fact * i
//         }
//         sum = sum + fact
//       num = Math.floor(num / 10)
//        }
//      if(copy ===sum){
//         console.log("Strong Number");
        
//      }
//      else{
//         console.log("Not a Strong Number");
        
//      }
       
    
      
       
//     }
// }





// DO WHILE LOOP


// let i = 1;

// do{
//     console.log("Hello");
//     i++
    
// }
// while(i<=10);



// Q REPEAT HELLO

// let msg = prompt("Enter a msg");

// do{
//     console.log(msg);
    
// }
// while(msg !=="hello"){
//     msg = prompt("Enter a msg");
// }



// Reverse Only Even Digits

// let num = 123456;
// let reverse = 0;

// while(num >0){
//     rem = num % 10;
//     if(rem % 2 ==0 ){
//         reverse = reverse * 10 + rem;
        

//     }
//     num = Math.floor(num / 10)
// }
// console.log(reverse);



// let random = Math.floor(Math.random()*100) + 1;
// let guess = 0;

// while(guess !== random){
//     guess = Number(prompt("Guess the Number"))
//     if(isNaN(guess) || guess<1 || guess>100){
//         console.log("Try Again , between 1 to 100");
//         continue;
        
//     }
//     if(guess>random){
//         console.log("To high , try again");
        
//     }
//     else if(guess<random){
//         console.log("To low, try again");
        
//     }
//     else{
//         console.log("Congrats and number was ", guess);
        
//     }
// }



// Palindrome Number

// let num = 122;
// let reverse = 0;
// let original = num;

// while(num > 0){
//     rem = num % 10;
//     reverse = reverse * 10 + rem;
//     num = Math.floor(num / 10);

// }
// if(reverse ===original){

//     console.log("Number is palindrome");
    

// }
// else{
//     console.log("Number is not palindrome");
    
// }



// reverse Number

// let num = 1234;
// let reverse = 0;

// while(num>0){
//     let rem = num % 10;
//     reverse = reverse * 10 + rem;
//     num = Math.floor(num / 10)

// }
// console.log("reverse =", reverse);





// Palindrome Number

// let num = 991;
// let reverse = 0;
// let original = num;

// while(num>0){
//     let rem = num % 10;
//     reverse = reverse * 10 + rem;
//     num = Math.floor(num / 10);
// }
// if(original === reverse){
//     console.log("Number is palindrome ");
    
// }
// else{
//     console.log("Number is not palindrome");
    
// }



// Count Digits

// let num = 2343345;
// let count = 0;

// while(num>0){
//     count++
//    num = Math.floor(num /10)
// }
// console.log('Count =',count);




// sum of digit

// let num = 1234;
// let sum =0;

// while(num>0){
//     let rem = num % 10;
//     sum = sum + rem;
//     num = Math.floor(num/10)
// }
// console.log(sum);



// Prime Number Check

// let num = 7;
// let count = 0;

// while(num >0){
//    for(let i = 1; i<=num; i++){
//     if(num%i==0){
//         count++
//     }
//    }
// }
// if(count ==2){
//     console.log("Prime Number");
    
// }
// else{
//     console.log("Not a prime number");
    
// }

// let num = 4;

// for(let i = 1 ; i<=num; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }




// find the largest digit in the number 

// let num = 398384;
// let max = -99;

// while(num>0){
//     let rem = num % 10;
//     if(max<rem){
//         max = rem
//     }
//     num = Math.floor(num / 10)
// }
// console.log(max);


