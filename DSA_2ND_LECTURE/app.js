
// Q VALID VOTE 

// let age = Number(prompt("Enter Your Age"));

// if(isNaN(age)){
//     console.log("Wrong Input");

// }

// else if(age>=18){
//     console.log("You are valid for vote");

// }
// else{
//     console.log("You are not valid for vote");

// }



//  Q  PAYBLE AMOUNT

// let amount = Number(prompt("What is the final amount?"));
// console.log(amount);

// if(amount> 0 && amount <=5000){
//     console.log(amount);

// }
// else if(amount>=5001 && amount<=7000){
//     console.log(amount - Math.floor((5*amount)/100));

// }
// else if(amount>7000 && amount<=9000){
//     console.log(amount - Math.floor((10*amount)/100));

// }
// else if(amount>9000){
//     console.log(amount-Math.floor((20*amount)/100));

// }
// else{
//     console.log("Wrong Input");

// }


//SECOND METHOD 

// let amount = Number(prompt("What is the final amount"));
// let discount = 0;

// if(amount> 0 && amount <=5000){
//     discount = 0;
// }
// else if(amount>5000 && amount<=7000){
//     discount = 5;
// }
// else if(amount>7000 && amount<=9000){
//     discount = 10;
// }
// else if(amount>9000){
//     discount = 20
// }
// else {
//     console.log("invalid input");

// }
// console.log(amount - Math.floor((discount*amount)/100));




// Q ELETRICITY BILL

// let unit = Number(prompt("Enter a electricity unit"));

// let amount = 0;

// if(unit>400){
//     amount = (unit - 400) * 13;
//     unit = 400;
// }
// if(unit>200 && unit<=400){
//     amount += (unit - 200) * 8;
//     unit = 200;
// }
// if(unit>100 && unit<=200){
//     amount += (unit - 100) * 6 ;
//     unit = 100;
// }
// amount += (unit*4);

// console.log(amount);



// let unit = Number(prompt("Enter a electricity unit"));
// let amount = 0;

// if(unit>400){
//     amount = (unit - 400) * 13;
//     unit = 400;
// }
// if(unit>200 && unit <=400){
//     amount += (unit - 200) * 8;
//     unit = 200;
// }
// if(unit>100 && unit<=200){
//     amount += (unit - 100) * 6;
//     unit = 100;
// }
// amount += (unit * 4);
// console.log(amount);






// Q INR DOMINATION

// let amount = Number(prompt("Enter a amount"));

// if(amount>=500){
//     console.log("500 Notes:" + Math.floor(amount / 500));
//     amount = amount % 500;

// }
// if(amount>=200){
//     console.log("200 Notes:" + Math.floor(amount / 200));
//     amount = amount % 200

// }
// if(amount >= 100){
//     console.log("100 Notes:"+ Math.floor(amount / 100));
//     amount = amount % 100

// }
// if(amount >=50){
//     console.log("50 Notes: " + Math.floor(amount / 50));
//     amount = amount % 50

// }
// if(amount>=20){
//     console.log("20 Notes:" + Math.floor(amount / 20));
//     amount = amount % 20;

// }
// if(amount>=10){
//     console.log("10 Notes:" + Math.floor(amount / 10));
//     amount = amount % 10;

// }
// if(amount>=5){
//     console.log("5 Notes:"+ Math.floor(amount / 5));
//     amount = amount % 5;

// }
// if(amount>=2){
//     console.log("2 Notes:"+ Math.floor(amount /2));
//     amount = amount % 2;

// }
// if(amount ===1){
//     console.log("1 Notes:"+ amount);

// }
// console.log(amount);




// TERNARY OPERATOR

// let num = Number(prompt("Enter a number"));

// console.log(num>0?"Positive Number": num<0?"Negative Number":"Zero");




// SWITCH CASE

// let day = 2;

// switch(day){
//     case 1: console.log("monday");
//     break;

//      case 2: console.log("Tuesday");
//     break;

//      default: console.log("invalid");

// }


// switch (true) {
//     case 10 < 12:
//         console.log("Hello");
//         break;

//     case 4 < 2:
//         console.log("Hey");
//         break;

//     default: console.log("Invalid ");



// }




let num = +(0.1 + 0.2) .toFixed(1);

switch(num){
    case 0.3 : console.log("Hello");
    break;

    case 0.5 : console.log("hey");
    break;

    default : console.log("Namaste");
    
    
    
}