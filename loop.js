//--------------for loop-----------------
// for(let i=1; i<=10; i++){
//     console.log("Lala");
// }

// for(let i=10; i>=1; i--){
//     console.log(i);
// }

// for(let i=1; i<10; ){
//     console.log("Run infinite that hang your browser")
// }
// for(;; ){
//     console.log("also Valid Run infinite that hang your browser")
// }

//---------Sum of first n natural numbers
// let pr=prompt("Enter a number to find sum of first n natural numbers: ")
// if(pr === null){
//     console.log("Operation cancelled by user");
// }
// else{
// let n = Number(pr);

// if(isNaN(n)){
//     console.log("Please enter a valid number");
// } else{
//     if(n>0){
//        sum=0;
//        for(let i=1; i<=n; i++){
//               sum += i;
//        }
//        console.log(`Sum of first ${n} natural numbers is: ${sum}`);
//     }else{
//         console.log("number not to be negative and zero")
//     }
// }
// }

//----------Factorial of a number
// let factPr= prompt("Enter a number  to find factorial: ");
// if(factPr === null){
//     console.log("Operation cancelled by user");
// }else{
//     let factNum = Number(factPr);
//     if(isNaN(factNum)){
//         console.log("Please enter a valid number");
//     }else{
//         if(factNum>0){
//              fact=1;
//         for(let i=1; i<=factNum; i++){
//             fact = fact * i;
//         }
//         console.log(`Factorial of ${factNum} is: ${fact}`);
//         }
//         else{
//             console.log("Factorial of negative number is not possible");

//         }

//     }
// }

//--------Factor of a number
// let factPr1= prompt("Enter a number  to find factor: ");
// if(factPr1 === null){
//     console.log("Operation cancelled by user");
// }else{
//     let factNum1 = Number(factPr1);
//     if(isNaN(factNum1)){
//         console.log("Please enter a valid number");
//     }else{
//         if(factNum1>0){
//             //  for(let i=1; i<=factNum1; i++){
//             //     factNum1%i === 0 ? console.log(i) : console.log("not with this value", i)
//             //  }
//             for(let i=1; i<=Math.floor(factNum1/2); i++){
//                 factNum1%i ===0 ? console.log(i) : ""
//             }
//             console.log(factNum1);
//         }
//         else{
//             console.log("Factorial of negative number is not possible");

//         }

//     }
// }

//--------------Find the Prime number
// let primePr= prompt("Enter a number  to find Prime: ");
// if(primePr === null){
//     console.log("Operation cancelled by user");
// }else{
//     let primeNum = Number(primePr);
//     if(isNaN(primeNum)){
//         console.log("Please enter a valid number");
//     }else{
//         if(primeNum>0){
//              let isPrime = true;
//              for(let i=2; i<=Math.floor(primeNum/2); i++){
//                 if(primeNum%i === 0){
//                     isPrime=false;
//                     break;
//                 }
//              }
//              console.log(isPrime ? `True- ${primeNum} is a Prime number` : `False-${primeNum} is not a Prime number`);
//         }
//         else{
//             console.log("Factorial of negative number is not possible");

//         }

//     }
// }
//-------------Break and continue statement
for (let i = 1; i < 23; i++) {
  if (i === 10 || i === 22 || i === 5) continue;
  // if(i===10) break;
  else console.log(i);
}

//-----------------While loop-----------------it used when you only know the stop condition (only when condition True)

// let ans = prompt("Any word you can write(exit for close)");
// while(ans !== 'exit'){
//     ans = prompt("Any word you can write(exit for close)");
// }

//---------------sum of digits
// let digitPr= prompt("Enter a number  to find Prime: ");
// if(digitPr === null){
//     console.log("Operation cancelled by user");
// }else{
//     let n = Number(digitPr);
//     if(isNaN(n)){
//         console.log("Please enter a valid number");
//     }else{
//         if(n>0){
//             let sum = 0;
//             while(n>0){
//                 var rem = n%10;
//                 sum = sum + rem;
//                 n=Math.floor(n/10);
//             }
//              console.log("Sum of",digitPr, "is: ", (sum));
//         }
//         else{
//             console.log("Should be +ve and more than 0.");

//         }

//     }
// }

//-------------Strong Number-----------------
// let strongPrompt = Number(prompt("Enter your strong number"));
// let num1 = strongPrompt;
// if (num1 === null) {
//   console.log("Operation cancelled by user");
// } else {
//   if (isNaN(num1)) {
//     console.log("Pls Enter a valid Number.");
//   } else {
//     if (num1 > 0) {
//         let sum = 0;
//         let copy = num1;
//         while(num1>0){
//             let rem =num1%10;
//             let fact = 1;
//             for(let i=1; i<=rem; i++){
//                 fact = fact * i;
//             }  
//             sum = sum + fact;
//              num1 = Math.floor(num1/10);
             
//         }
//         if(copy === sum){
//             console.log("Strong Number", copy);
//         }else{
//                      console.log(copy, "Is not a strong number!");
//         }
//     } else {
//       console.log("Number must be +ve and more than zero.");
//     }
//   }
// }


//-----------do while loop--------
// let i=11;
// do{
//     console.log("hello");
//     i++;
// }
// while(i<=20);


//--------------Guess Number
// let random = Math.floor(Math.random()*10) +1;
// console.log("random", random);

// let guess = -1;
// while(guess !== random){
//     guess = Number(prompt("Guess the number!"))
//     if(isNaN(guess) || guess<1 || guess>30){
//       console.log("Try again between 1-30");
//       continue
//     }
//     if(guess>random){
//       console.log("To high, try again");
//     }else if(guess < random){
//       console.log("Too low, try again");
//     }else{
//       console.log("Congrats number was: ",guess);      
//     }
// }
