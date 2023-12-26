// var alamat = [“No”,” rumah saya”,30, “A”];
// var res = encodeURI(alamat);
// var result = res.join(" ");
// console.log(result);

var kata = "“No”,” rumah saya”,30, “A”";
var hasil = kata.replace(/["',”“]/g, "");
var replace = hasil.substring(13);
var trim = replace.replace(/[ ]/g, "");
var final = hasil.substring(0, 13);

console.log(final + " " + trim);
