


// Q LEFT ROTATION BY 1 ELEMENT

// let arr = [1,2,3,4,5];
// let copy = arr[0];

// for(let i = 0; i<arr.length-1; i++){
//     arr[i] = arr[i+1]
// }
// arr[arr.length-1] = copy;

// console.log(arr);




// let arr = [1,2,3,4,5];
// let copy = arr[0]

// for(let i = 0; i<arr.length-1; i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = copy

// console.log(arr);


// let arr = [1,2,3,4,5];
// let copy = arr[0];

// for(let i = 0; i<arr.length-1; i++){
//     arr[i] = arr[i+1]
// }

// arr[arr.length-1] = copy;
// console.log(arr);



// Q RIGHT ROTATION BY 1 ELEMENT

// let arr = [1,2,3,4,5]
// let copy =arr[arr.length-1];

// for(let i = arr.length-1; i>0; i--){
//     arr[i] = arr[i-1]
// }
// arr[0] = copy;
// console.log(arr);




// Q RIGHT ROTATION BY K ELEMENT

// let arr = [1,2,3,4,5];
// let k = 2
// k = k%arr.length;


// for(let i = 0; i<k; i++){
//     let copy = arr[0];
//     for(let j = 0; j<arr.length-1 ; j++){
//         arr[j] = arr[j+1]
//     }
//     arr[arr.length-1] = copy
// }
// console.log(arr);





// Q REMOVE DUPLICATED FROM THE SORTED Array. 

// let arr = [0,0,1,1,1,2,2,3,3,4];
// let j = 1;

// for(let i = 0; i<arr.length-1; i++){
//     if(arr[i]!==arr[i+1]){
//         arr[j]=arr[i+1]
//         j++
//     }
// }
// console.log(arr.slice(arr[0], j));







// MERGE SORTED ARRAY

// let arr1 = [2,5,6];
// let arr2 = [1,3,4,8];
// let merge = new Array(arr1.length+arr2.length);
// let i = 0, j=0, k = 0;

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         merge[k++] = arr1[i++];
//     }
//     else{
//         merge[k++] = arr2[j++] 
//     }
// }
// while(i<arr1.length){
//     merge[k++] = arr1[i++]
// }
// while(j<arr2.length){
//     merge[k++] = arr2[j++]
// }

// console.log(merge);






