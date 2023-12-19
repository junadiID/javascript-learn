//38
//bersifat reguler expression peka terhadap karakter beda
function cari() {
  var isi = "Belajar di niomic academy dengan fasih ";
  console.log(isi.search("belajar"));
  console.log(isi.search(/di/));
}

cari();
