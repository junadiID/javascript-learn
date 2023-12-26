//77
//token reguler expression
var s = "Ini ibu budi \n bukan bapaknya.";
var re = /./g;

console.log(s.match(re));

var s2 = "Sempurna..";
var re2 = /\./g;
console.log(s2.match(re2));

console.log("==============================================");

var s3 = "abcdefgh efjkd849 kjk j !@%$^_'";
//angka
console.log(s3.match(/\d/g));

//selain angka
console.log(s3.match(/\D/g));

//anka, huruf, uderscore
console.log(s3.match(/\w/g));

//selain angka,huruf dan underscore
console.log(s3.match(/W/g));

//whitespace
console.log(s3.match(/\s/g));
