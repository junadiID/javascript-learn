function tugas22() {
  var text = "Saya ingin belajar bersama";
  var data = text.split(" ");
  data.forEach(function (item, index) {
    console.log("Item : " + item + " " + "Index ke " + index);
  });
}

tugas22();
