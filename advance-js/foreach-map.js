//87
function panggilForeach() {
  var data = ["a", "b", "c", "e", "p", "g"];
  data.forEach(function (item, index, array) {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}
panggilForeach();
