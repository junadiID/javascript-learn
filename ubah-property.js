function panggilObject() {
  var mobil = {
    type: "Sedan",
    harga: 20000000,
    warna: "Putih",
  };

  mobil.type = "Kijang";
  mobil.warna = 2;

  console.info(mobil);
}

panggilObject();
