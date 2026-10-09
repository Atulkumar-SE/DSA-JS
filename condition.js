//--------Vote condition 
// let ans = Number(prompt("What is your age?"));
// if(isNaN(ans)){
//     alert("Please enter a valid number");
// }
// else if(ans>=18){
//     console.log(`You are ${ans} eligible for vote`)
// }else{
//     console.log(`You are ${ans}Yrs not eligible for vote`)
// }


//--------Shoping Discount (range questions) - Brute Force Method
// let amount= Number(prompt("Enter you final amount:"));
// console.log("Total Amount: ",amount);

// if(isNaN(amount)){
//     console.log("Please enter a valid amount");
// }
// else if(amount>0 && amount<=5000){
//     console.log("Payable Amount: ",amount);
// }else if(amount>5000 && amount<=7000){
//     console.log("Payable Amount: ",amount -Math.floor((5*amount)/100),"Rs");
// }else if(amount>7000 && amount<=9000){
//     console.log("Payable Amount: ",amount - Math.floor((10*amount)/100),"Rs");
// }else if(amount>9000){
//     console.log("Payable Amount: ",amount - Math.floor((20*amount)/100),"Rs");
// }else{
//     console.log("Ye kabhi chalega hi nahi!");
// }

//--------Shoping Discount (range questions) - Optimized Method
// let dis=0;
// if(isNaN(amount)){
//     console.log("Please enter a valid amount");
// }
// else if(amount>0 && amount<=5000){
//     dis=0;
// }else if(amount>5000 && amount<=7000){
//     dis=5;
// }else if(amount>7000 && amount<=9000){
//     dis=10;
// }else if(amount>9000){
//     dis=20;
// }else{
//     console.log("Ye kabhi chalega hi nahi!");
// }
// console.log("Optimized approach Payable Amount: ", amount - Math.floor((dis*amount)/100),"Rs");


//---------Electricity Bill
// let units= Number(prompt("Enter your electricity unit: "));
// let unit=units;
// let amount=0;;
// if(unit>400){
//     amount=(unit-400) * 13;
//     unit=400;
// }if(unit>200 && unit<=400){
//     amount += (unit-200) * 8;
//     unit=200;
// }if(unit>100 && unit<=200){
//     amount += (unit-100) * 6;
//     unit=100;
// }
//     amount += unit * 4

// console.log(`Amount of ${units} is : ${amount}Rs`);



//---------INR Denomination
// let amount = Number(prompt("Enter your INR amount: ")); //5001
// let amount =5888
// if(amount>=500){
   
//     console.log(`Number of 500 Rs notes: ${Math.floor(amount/500)}`)
//     amount = amount%500;
// }
// if(amount>=200){
//     console.log(`Number of 200 Rs notes: ${Math.floor(amount/200)}`);
//     amount = amount%200;
// }
// if(amount>=100){
//     console.log(`Number of 100 Rs notes: ${Math.floor(amount/100)}`);
//     amount = amount%100;
// }
// if(amount>=50){
//     console.log(`Number of 50 Rs notes: ${Math.floor(amount/50)}`);
//     amount = amount%50;
// }
// if(amount>=20){
//     console.log(`Number of 20 Rs notes: ${Math.floor(amount/20)}`);
//     amount = amount%20;
// }
// if(amount>=10){
//     console.log(`Number of 10 Rs notes: ${Math.floor(amount/10)}`);
//     amount = amount%10;
// }
// if(amount>=5){
//     console.log(`Number of 5 Rs coins: ${Math.floor(amount/5)}`);
//     amount = amount%5;
// }if(amount>=2){
//     console.log(`Number of 2 Rs coins: ${Math.floor(amount/2)}`);
//     amount = amount%2;
// }
// if(amount === 1){
//     console.log(`Number of 1 Rs coin: ${amount}}`);
// }




//---------Ternary Operator (? :)
112>100 ? console.log("Yes") : console.log("No");
console.log(112>500 ? "Yes" : "No");

//---------Ternary Operator (? :) - Nested
let num=-10;
console.log(num>0 ? "Positive" : num<0 ? "Negative" : "Zero");


























