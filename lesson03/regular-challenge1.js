let arr = ['red', 'orange', 'yellow', 'green', 'blue'];

arr.push ('purple');
console.log (arr);

arr.splice (2,1);
console.log (arr);

let str = arr.join (', ');
console.log (str);




// [object Array] (6)
["red","orange","yellow","green","blue","purple"]
// [object Array] (5)
["red","orange","green","blue","purple"]
"red, orange, green, blue, purple"
