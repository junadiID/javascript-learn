//61

//untuk menjumlahkan data di array
function panggilEval() {
  var x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var total = 0;

  for (i = 0; i < x.length; i++) {
    total += x[i];
  }

  console.log(eval(total));
}

panggilEval();
