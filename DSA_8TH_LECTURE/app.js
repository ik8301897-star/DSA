

//  Question 1: Second Largest Element

// let arr = [12, 35, 1, 10, 34, 1];
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




// Question 2: Move All Zeros To End

// let arr = [0, 1, 0, 3, 12];

// let i = 0 , j = arr.length-1;

// while(i<j){
//     if(arr[i] ==0){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j--
//     }
//     i++
// }
// console.log(arr);




// Question 3 : Left rotation by 1 element

// let arr = [1,2,3,4,5];
// let copy = arr[0]

// for(let i = 0 ; i<arr.length-1; i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy
// console.log(arr);





// Question 4 : Right rotation by 1 element

// let arr = [1,2,3,4,5];

// let copy = arr[arr.length-1]

// for(let i = arr.length-1; i>0; i--){
//     arr[i] = arr[i-1];
// }
// arr[0] = copy

// console.log(arr);





// Question 5: left rotation by k element

let arr = [1,2,3,4,5];
let k = 2;


for(let i = 0; i<k ; i++){
    let copy = arr[0]
    for(let i = 0 ; i<arr.length-1; i++){
        arr[i] = arr[i+1]
         
    }
     arr[arr.length-1] = copy
  
}


console.log(arr);
