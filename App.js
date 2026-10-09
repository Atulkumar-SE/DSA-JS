let a=10;
let b=20;
let c;

//-----Temporary method
// c=a;
// a=b;
// b=c;

//-------Arithmetic method
// a=a+b;
// b=a-b;
// a=a-b;
 
//-------Array Destructuring method
// [a,b] = [b,a];

//-----XOR method
a=a^b;
b=a^b;
a=a^b; 


console.log("a: ",a,"b: ",b);

//=============Arithmetic Operator===================
let d=5346;
console.log(d%100);


//-------UNIARY OPERATOR
let e=10, f=21;
// let i=e++ + ++e;
let j=e + f + e++ + f++ + ++e + ++f
console.log("sum of i: ", "sum of J: ",j);
console.log(++e);
console.log(e++);
console.log(e++);

let r=true;
r++
console.log("r: ",r) //2
let g=10;
// let h= ++(10++);
// console.log(h)


//----------Math functions
console.log("Math.round(10.2): ",Math.round(10.5));
console.log("Math.ceil(10.2): ",Math.ceil(10.2));
console.log("Math.floor(10.8): ",Math.floor(10.8));
console.log("Math.trunc(17.89): ",Math.trunc(17.89));
console.log("Math.pow(2, 3): ",Math.pow(2, 3));
console.log("Math.sqrt(25): ",Math.sqrt(25));
console.log("Math.cbrt(27): ",Math.cbrt(27));
console.log("Math.abs(-7): ",Math.abs(-7));
console.log("Math.max(23,34,55,22): ",Math.max(23,34,55,22));
console.log("Math.random() OTP: ",Math.trunc(Math.random()*9000)+1000);
 let k=23.23452;
 console.log("2 digit after decimal: ",k.toFixed(4));  //output: string

let length=5;
let breadth=7;
 console.log("Area of rectangle: ",length * breadth);
 console.log("Perimeter of Rectangle: ",2*(length + breadth));

//----area of triangle by herons formula
let side1=5, side2=6, side3=7;
let semiperimeter=(side1 + side2 + side3)/2;
console.log("Semiperimeter: ",semiperimeter);
console.log("Area of Triangle by herons formula: ",Math.sqrt(semiperimeter*(semiperimeter-side1)*(semiperimeter-side2)*(semiperimeter-side3)));

//----area of circle
let radius=11;
console.log("area of circle: ", Number((2*Math.PI*radius).toFixed(2)));