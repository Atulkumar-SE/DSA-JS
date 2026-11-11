console.log("Advance Array");
//---------Left rotation by 1---------//
let array = [1,2,3,4,5];
let copy = array[0];
for(let i=0; i<array.length-1; i++){
    array[i] = array[i+1];
}
array[array.length-1] = copy;
console.log("Left rotation by 1: ", array);

//---------Right rotation by 1---------//
let a1 = [1,2,3,4,5];
let copy1 = a1[a1.length-1];
for(let i=a1.length-1; i>0; i--){
    a1[i] = a1[i-1];
}
a1[0] = copy1;
console.log("Right rotation by 1: ", a1);