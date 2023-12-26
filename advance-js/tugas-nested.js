//95

function panggilNestedArray(value) {
  var data = [];
  for (var j = 0; j <= value.length; j++) {
    var tampung = [];
    for (var i = 0; i < value.length; i++) {
      tampung.push(value[i][j]);
    }
    data.push(tampung);
  }

  console.log(data);
}

var nestedArray = [
  [1, 2, 3, 4],
  ["Mark Zuckerberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
  ["Facebook", "Tesla", "Microsoft", "Apple"],
];

panggilNestedArray(nestedArray);
