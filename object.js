function panggilObject() {
  var mobil = {
    type: "Sedan",
    harga: 200000000,
    warna: "putih",
    tahun: [[2002,2003],["News","Old"]],
  };
  console.log(mobil.type);
  console.log(mobil.tahun[0][1]);
  console.log(mobil.tahun[1][0]);
}

panggilObject();
