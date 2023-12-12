function panggilObject() {
  var mahasiswa = {
    nama: "Junjun",
    umur: 24,
    jurusan: "Teknik Informatika",
    semester: 7,
  };
  for (var x in mahasiswa) {
    console.log(x, ":", mahasiswa[x]);
  }
}

panggilObject();
