//50
// function panggilPerintahMap() {
//   var dataKota = ["Jakarta", "Balikpapan", "Medan"];
//   dataKota.map((item, index, array) => {
//     console.log(item);
//     console.log(index);
//     console.log(array);
//   });
// }

// panggilPerintahMap();

// versi 2
function panggilPerintahMap() {
  var dataKota = ["Jakarta", "Balikpapan", "Medan"];
  dataKota.map(function (item, index, array) {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

panggilPerintahMap();
