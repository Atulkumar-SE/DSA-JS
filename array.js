let arr = [];
arr.push(100);
arr.push(true);
arr.push(10);
arr.push({a:20});
arr[4]=30;
arr[5]=40;

arr[8]=80;
arr[9]=90;
console.log(arr);
arr.pop();
console.log(arr);
console.log(arr[1]);


// let inpArr = Number(prompt("Enter a Number: "));
// console.log(inpArr);

let arr1 = [2,4,6,33,55,1,7];
let max = arr1[0];
for(let i=1; i<arr1.length; i++){
    if(max>arr1[i]){
        max = arr1[i];
    }
}

console.log("Maximum value in array: ",max);


let arr2 = [2,30, 190, 56, 190, 190, 19, 60];
let max1 = Math.max(arr2[0], arr2[1]); //190
let sMax = Math.min(arr2[0], arr2[1]);  //30

for(let i=2; i<arr2.length; i++){
    if(arr2[i]>max1){
        sMax = max1;
        max1 = arr2[i];
    }else if(arr2[i]>sMax && arr2[i]!=max1){
        sMax=arr2[i];
    }
}
console.log("Second max value: ", sMax);
