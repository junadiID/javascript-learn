//80

//Kita akan mencoba untuk mengambil semua karakter baik itu berupa huruf dan angka saja ataupun spasi.
// function panggilRegexp(value) {
//   var ambilData = value.match(/\w/g);
//   console.log(ambilData);
// }

// panggilRegexp("Bulan ke 1 sd ke 4");


//Kita akan mencoba untuk mengambil semua angka saja pada semua data
// function panggilRegexp(value) {
//   var ambilData = value.match(/\d/g);
//   console.log(ambilData);
// }

// panggilRegexp("Bulan ke 1 sd ke 4");


//Kita akan mencoba untuk mengambil semua SPASI pada semua data dan juga menghitung juga jumlah spasinya
function panggilRegexp(value) {
  var ambilData = value.match(/\s/g);
  console.log(ambilData);
  console.log("Banyaknya Spasi : ", ambilData.length);
}

panggilRegexp("Bulan ke 1 sd ke 4");