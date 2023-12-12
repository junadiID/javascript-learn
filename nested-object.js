function nestedObject() {
  var mahasiswa = {
    nama: "Junjun",
    ipk: {
      semester1: 3.5,
      semester2: 3.75,
      semester3: 3.6,
      semester4: 4,
    },
  };
  console.log(mahasiswa.ipk.semester2);
}

nestedObject();
