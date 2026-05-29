



// let prompt = require("prompt-sync")();
// let num = Number(prompt("Enter a number = "));

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=num; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
    
// }



// Q right angle triangle

// let prompt = require("prompt-sync")();
// let num = Number(prompt("Enter a number = "));

// for(let i = 1 ; i<=num; i++){
//     for(let j = 1; j<=i; j++){
//         process.stdout.write("*")

//     }
//     console.log();
    
// }



// // Q  1
//       1 2
//       1 2 3
//       1 2 3 4
//       1 2 3 4 5


// let prompt = require("prompt-sync")();
// let num = Number(prompt("Enter a number = "));


// for(let i = 1; i<=num ; i++){
   
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(`${j} `)
      
//     }
     
//     console.log();
    

// }



// // Q  A
//       A B
//       A B C
//       A B C D
//       A B C D E 

// let prompt = require("prompt-sync")();
// let num =Number(prompt("Enter a number = "))

// for(let i = 1; i<=num; i++){
//     let ascii = 65;
//     for(let j = 1; j<=i; j++){
//         process.stdout.write(String.fromCharCode(ascii)+ " ")
//         ascii++

//     }
//     console.log();
    
// }





// Q Inverted Right Angle Triangle
//  * * * * * 
//  * * * *
//  * * *
//  * * 
//  *

// let prompt = require("prompt-sync")();
// let num = Number(prompt("Enter a number = "));
// for(let i = 1; i<=num; i++){
//     for(let j = num; j>=i; j-- ){
//         process.stdout.write("* ")
//     }
    
//     console.log();
    
// }





// Q Mirror right angle triangle

//         *
//       * *
//     * * *
//   * * * *
// * * * * * 

// let prompt = require("prompt-sync")();
// let num = Number(prompt("Enter a number = "));

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=num-i; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=i ; k++){
//         process.stdout.write("*")
//     }
//     console.log();
    
// }






// Q    *         *
//        *     *
//           *
//        *     *
//      *          *


// let num = 5;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=num; j++){
//         if(i==j || i+j == num+1){
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
    
// }






// 
// *               *
//   *           *   
//     *       *     
//       *   *       
//         *    


// let num = 5;

// for(let i = 1; i<=num; i++){
//     for(let j = 1; j<=2*num-1; j++){
//         if(i==j || i+j == 2*num){
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
    
// }



// Q  Solid Pyramid
//     *
//    ***
//   *****
//  *******

// let num = 4;
 


// for(let i = 1; i<=num; i++){

   
//     for(let j = 1 ; j<=num-i; j++){
//         process.stdout.write(" ")
//     }
//     for(let k = 1; k<=i*2-1; k++ ){
//         process.stdout.write("*")
//     }
    
//     console.log();
    
// }




// Q Hollow Pyramid

//     *
//    * *
//   * * *
//  *******

// let num = 4;
// for(let i = 1; i<=num; i++){

   
//     for(let k = 1; k<=i*2-1; k++ ){
//        if(i+k % 2==1 && i+k <10){
//         process.stdout.write("*")
//        }else{
//         process.stdout.write(" ")
//        }
//     }
    
//     console.log();
    
// }




// Q Full Diamond

//     *
//    ***
//   *****
//    ***
//     *

let num = 3;

for(let i = 1; i<=num; i++){
    for(let j=1 ; j<=num-i;j++){
        process.stdout.write(" ")
    }
    for(let k = 1; k<=i*2-1; k++){
        process.stdout.write("*")
    }
    console.log();
    
}
for(let i = 1; i<=num-1;i++){
    for(let j = 1;j<=i; j++){
        process.stdout.write(" ")
    }
    for(let k = 1;k<= (num-i)*2-1 ; k++){
        process.stdout.write("*")
    }
    console.log();
    
}