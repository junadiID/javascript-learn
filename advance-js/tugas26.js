function tugas26() {
  var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 99];
  angka.forEach(function (item) {
    var result = isFinite(item);
    if (result !== true) {
      result = "Infinity";
    } else {
      result = "NOT Infinity";
    }
    console.log("Angka " + item + " " + result);
  });
}

tugas26();
