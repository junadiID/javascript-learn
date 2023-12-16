// untuk menambahkan data

// function panggilSplice() {
//   var kota = ["Sukabumi", "Bogor", "Bekasi", "Jakarta"];
//   console.log(kota);
//   kota.splice(2, 0, "Cianjur");
//   return kota;
// }

// hapus sesuai index
function panggilSplice() {
  var kota = ["Sukabumi", "Bogor", "Bekasi", "Jakarta", "Depok"];
  console.log(kota);
  kota.splice(2, 1);
  return kota;
}
console.log(panggilSplice());
