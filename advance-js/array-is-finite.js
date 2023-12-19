//62
//untuk mengecek data terbatas atau tidak
function panggilIsFinite() {
  var a = isFinite([1, 2, 3, 4, 5]);
  var b = isFinite(["Sukabumi", "Bogor", "Depok"]);
  var c = isFinite([1, 2, 3, 4, "Hello", "Niomic"]);
  var d = isFinite(-999999, 23);

  console.log(a); //false
  console.log(b); //false
  console.log(c); // false
  console.log(d); // true
}

panggilIsFinite();
