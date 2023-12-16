// untuk menambahkan data ke array
function panggilTugas() {
  var data = ["Pisang", "Jeruk", "Apel", "Mangga"];
  console.log(data);
  data.pop();
  console.log(data);
  data.shift();
  return data;
}

console.log(panggilTugas());
