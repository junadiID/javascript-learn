//76
// untuk mengabaikan huruf kecil atau besar
function panggilRegexp(value) {
  let str = "abcdefghijklmnopqrstuvwxyz";

  console.log(str.search(/K/));
  console.log(str.search(/K/i));
  console.log(str.search(/k/i));
}

panggilRegexp();
