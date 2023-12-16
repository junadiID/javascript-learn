function panggilUnShift() {
  var data = ["Sukabumi", "Bogor", "Bekasi", "Jakarta"];
  console.log(data);
  data.unshift("Surabaya", "Bali");
  return data;
}

console.log(panggilUnShift());
