function panggilShift() {
  var kota = ["Jakarta", "Sukabumi", "Bandung", "Bogor", "Cianjur"];
  console.log(kota);
  console.log("===========================");
  //   kota = kota.shift();

  var kota2 = kota.shift();
  console.log(kota2);
  var kota2 = kota.shift();
  console.log(kota2);
  return kota;
}

console.log(panggilShift());
