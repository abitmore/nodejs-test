let Long = require('long');
console.log("hello world 123");

var num = parseFloat("0.00013")*100000;
console.log(num);

var long_num = Long.fromString(""+num);
console.log(long_num);
console.log(long_num.toString());

var long_num2 = Long.fromString(""+num,true,0);
console.log(long_num2);
console.log(long_num2.toString());
