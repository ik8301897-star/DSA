

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
