function tugas24() {
  var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  console.log("Sebelumnya : " + angka);

  console.log("Asccending : " + angka.sort());
  console.log("Descending : " + angka.reverse());

  let data = angka.filter((angka) => {
    return angka > 10;
  });

  console.log("Filter > 10 : " + data);
}

tugas24();
