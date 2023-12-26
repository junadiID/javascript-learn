//73
//reguler expression exec
function panggilRegex() {
  let data = "Belajar satu tahun bersama Niomic";
  let str = new RegExp("Niomic");
  console.log(str.exec(data));
}

panggilRegex();
