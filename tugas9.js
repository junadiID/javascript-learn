function panggilObject() {
  var makan = {
    lauk: "Ayam + nasi",
    minum: "Teh Angat",
    jumlah: 2,
  };
  for (var x in makan) {
    console.log(x, ":", makan[x]);
  }
}

panggilObject();
