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
