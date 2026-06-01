

// prompt ke through value lena 
// let arr = new Array(5);
// for(let i = 0; i<arr.length; i++){
//     arr[i] = Number(prompt("Enter a value"))
// }
// console.log(arr);




// sum of array element

// let arr = [10,20,30,40,50];
// let sum = 0;

// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i]

// }
// console.log(sum);




// FIND MAX ELEMENT IN ARRAY

// let arr = [45,4,2,5,33,53];
// let max = arr[0];

// for(let i=1; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max);




// FIND MIN ELEMENT IN ARRAY.

// let arr = [34,43,56,33,21,3,49,392,383,2];
// let min = arr[0];

// for(let i = 1; i<arr.length; i++){
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }
// console.log(min);




// FIND THE SECOND MAX ELEMENT IN THE ARRAY .

// let arr = [34,32,98,45,87,12];
// let max = Math.max(arr[0],arr[1]);
// let sMax = Math.min(arr[0], arr[1]);

// for(let i = 2; i<arr.length; i++){
//     if(arr[i]> max){
//         smax = max;
//         max = arr[i]
//     } else if(arr[i]> sMax){
//         sMax = arr[i]
//     }
// }
// console.log(sMax);





// let arr = [34,98,76,45,12,75];
// let max = Math.max(arr[0], arr[1]);
// let smax = Math.min(arr[0],arr[1]);

// for(let i = 2; i<arr.length; i++){
//     if(arr[i]>max){
//         smax = max;
//         max = arr[i];
//     } else if(arr[i]>smax && max != arr[i]){
//         smax = arr[i]
//     }
// }
// console.log(smax);






// FIND THE SECOND MINIMUM ELEMENT IN THE ARRAY.

// let arr = [32,34,98,45,12,18];

// let min = Math.min(arr[0],arr[1]); // 32
// let smin = Math.max(arr[0],arr[1]); // 34

// for(let i = 2; i<arr.length; i++){
//     if(arr[i]<min){
//         smin = min;
//         min = arr[i];
//     }
//     else if(arr[i]<smin && min != arr[i]){
//         smin = arr[i]
//     }
// }
// console.log(smin);






// REVERSE ARRAY with space 


// let arr = [34,45,21,23,98];
// let revArr = [];

// for(let i = arr.length-1; i>=0; i--){
//     revArr[revArr.length] = arr[i]
// }
// console.log(revArr);





// REVERSE ARRAY WITHOUT SPACE 

// let arr = [10,20,30,40,50,60];

// let i = 0 , j = arr.length-1;

// while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr);





// ALL ZERO IN LEFT SIDE ALL ONE IN RIGHT SIDE

// let arr = [1,1,0,1,0,1,1,0,0];

// let i = 0 , j = 0;

// while(i<arr.length){
//    if(arr[i] ==0){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++
//    }
//    i++
// }
// console.log(arr);






// SELF PRACTICE 


// // 1. Find Maximum Element

// let arr = [12, 45, 7, 89, 23];
// let max = arr[0];

// for(let i = 1 ; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }

// }
// console.log(max);




// // 2. Find Second Largest Element

// let arr = [10, 5, 20, 8, 15];
// let max = Math.max(arr[0],arr[1]);
// let smax = Math.min(arr[0],arr[1]);

// for(let i = 2; i<arr.length; i++){
//     if(arr[i]>max){
//         smax = max;
//         max = arr[i]
//     }
//     else if(arr[i]>smax){
//         smax = arr[i]
//     }
// }
// console.log(smax);





// // 4. Reverse an Array

// let arr = [1, 2, 3, 4, 5];

// let i = 0 , j = arr.length-1;

// while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++
//     j--
// }
// console.log(arr);





// // 5. Move All Zeros To End

// let arr = [1, 0, 2, 0, 3, 4];
// let i = 0 , j = 0;

// while(i<arr.length){
//     if(arr[i]!==0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++
//     }
//     i++
// }
// console.log(arr);




// 7. Find Pair With Given Sum

// let arr =  [2, 7, 11, 15];
// target = 9;

// for(let i = 0; i<arr.length; i++){
//     for(let j = i+1; j<arr.length; j++){
//         if((arr[i]+arr[j]==target)){
//             console.log(arr[i],arr[j]);
            
//         }
//     }
// }






// Q SUM OF ARRAY ELEMENTS

// let arr = [10,20,30,40,50];
// let sum = 0;

// for(let i = 0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log(sum);





// FIND THE MAXIMUM ELEMENT IN THE ARRAY.

// let arr = [12,45,7,89,34];
// let max = arr[0];

// for(let i = 1; i<arr.length; i++){
//     if(arr[i]>max){
//         max = arr[i]
//     }
// }
// console.log(max);





// FIND THE MINIMUM ELEMENT IN THE ARRAY.

// let arr = [12,45,7,89,34];
// let min = arr[0];

// for(let i = 1; i<arr.length; i++){
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }
// console.log(min);





// FIND THE SECOND MAXIMUM ELEMENT IN THE ARRAY.

// let arr = [12,45,7,89,34];
// let max = Math.max(arr[0],arr[1]);
// let smax = Math.min(arr[0],arr[1]);

// for(let i = 2; i<arr.length ; i++){
//     if(arr[i]>max){
//         smax = max;
//         max = arr[i];

//     }
//     else if(arr[i]>smax){
//         smax = arr[i]

//     }
// }
// console.log(smax);







// FIND THE SECOND MINIMUM ELEMENT IN THE ARRAY.

// let arr = [12,45,7,89,34];
// let min = Math.min(arr[0],arr[1]) // 12
// let smin = Math.max(arr[0],arr[1])  // 45

// for(let i = 2; i<arr.length; i++){
//     if(arr[i]<min){
//         smin = min ;
//         min = arr[i]
//     }
//     else if(arr[i]<smin){
//         smin = arr[i]
//     }
// }
// console.log(smin);




//  REVERSE THE ARRAY

// let arr= [10,20,30,40,50];
// let revArr = [];

// for(let i = arr.length-1; i>=0; i--){
//     revArr[revArr.length] = arr[i];
// }
// console.log(revArr);

// SECOND METHOD REVERSE THE ARRAY

// let arr = [10,20,30,40,50];

// let i = 0 , j = arr.length-1;

// while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr);





// MOVE ALL 0s TO THE LEFT SIDE AND ALL 1s TO THE RIGHT SIDE

// let arr = [1,0,1,0,1,0,0,1];
//  let i = 0 , j = 0;

//  while(i<arr.length){
//     if(arr[i] ==0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp
//         j++
//     }
//     i++
//  }
//  console.log(arr);
 