


// LEFT ROTATION BY K ELEMENT 

// let arr = [1,2,3,4,5];
// let k = 2;

// function reverse(i,j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j]= temp;
//         i++
//         j--
//     }
// }

// reverse(0,k-1);
// reverse(k,arr.length-1);
// reverse(0,arr.length-1);
// console.log(arr);






// RIGHT ROTATION BY K ELEMENT

// let arr = [1,2,3,4,5];
// let k = 2;

// function reverse(i,j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i]= arr[j];
//         arr[j] = temp;
//         i++
//         j--
//     }

// }

// reverse(0,arr.length-1);
// reverse(0,k-1);
// reverse(k,arr.length-1);

// console.log(arr);





// Remove Duplicates from Sorted Array


// let arr = [0,0,1,1,1,2,2,3,3,4];
// let j = 1;

// for(let i = 0; i<arr.length-1; i++){
//     if(arr[i]!==arr[i+1]){
//         arr[j] = arr[i+1]
//         j++
//     }
    
// }
// console.log(j);

// console.log(arr.slice(0,j));






// MERGE SORTED ARRAY


// let arr1 = [2,5,8];
// let arr2 = [1,3,4,6];
// let merge = new Array(arr1.length + arr2.length);
// let i = 0 , k = 0 , j = 0;

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         merge[k] = arr1[i]
//         k++
//         i++
//     }
//     else{
//         merge[k] = arr2[j];
//         j++
//         k++
//     }
// }
// while(i<arr1.length){
//     merge[k] = arr1[i]
//     k++
//     i++
// }

// while(j<arr2.length){
//     merge[k] = arr2[j]
//     k++
//     j++
// }

// console.log(merge);





// left rotation by k element


// let arr = [1,2,3,4,5];
// let k = 2;

// function reverse(i,j){
//     if(i<j){
//         let temp = arr[i];
//         arr[i]= arr[j];
//         arr[j] = temp;
//         i++
//         j--
//     }
// }

// reverse(0,k-1)
// reverse(k,arr.length-1);
// reverse(0,arr.length-1)
// console.log(arr);
