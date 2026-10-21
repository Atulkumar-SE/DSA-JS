let prompt = require('prompt-sync')();
console.log("Hello");
console.log("World");


process.stdout.write("Hello "); // it is not a windows function this is the node environment part
process.stdout.write("World");

let userInput = Number(prompt("User Input Enter a number: "));

// for(let i=1; i<=userInput;i++){
//      for(let j=1; j<=userInput; j++){
   
//         process.stdout.write("* ");

//     }
//     console.log();
    
// }


//-----------
for(let i=1; i<=userInput; i++){
    for(j=1; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log();
}
console.log("\n");

for(let i=1; i<=userInput; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write(j+" ");
    }
    console.log()
}
//---------------------------------------
console.log("\n");

for(let i=1; i<=userInput; i++){
    let ascii = 65; //---------
    for(let j=1; j<=i; j++){
        process.stdout.write(String.fromCharCode(ascii) + " ");
        ascii++
    }
    console.log();    
}
//---------------------------------------
console.log("\n");

for(let i=1; i<=userInput; i++){
    for(let j=userInput; j>=i; j--){
        process.stdout.write("* ");
    }
    console.log();
    
}

//---------------------------------------
console.log("\n");

for(let i=1; i<=userInput; i++){
    //Inverted
    for(let j=1; j<=userInput-i; j++){
        process.stdout.write(" ");
    }
    //right
    for(let j=1; j<=i; j++){
        process.stdout.write("* ");
    }
    console.log();
    
}

//---------------------------------------
console.log("\n");

for(let i=1; i<=userInput; i++){
    for(let j=1; j<=userInput; j++){
        if(i==j || i+j == userInput+1){
            process.stdout.write("* ")
        }else  process.stdout.write("  ");
    }console.log();
    
}

//---------------------------------------
console.log("\n");

for(let i=1; i<=userInput; i++){
    for(j=1; j<=2*userInput-1; j++){
        if(i==j || i+j == 2*userInput){
            process.stdout.write("* ")
        }else process.stdout.write("  ")
    } console.log();
    
}
//---------------------------------------
console.log("\n");

for(let i=1; i<=userInput; i++){
    let row = "";
    for(let j=1; j<=userInput-i;j++){
        row += " ";
    }
    for(let k = 1; k<=(2*i-1); k++){
        row += "*";
    }
    console.log(row);
    
    // process.stdout.write(row);
}

