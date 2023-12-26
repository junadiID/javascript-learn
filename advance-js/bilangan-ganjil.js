//85
function panggilBilGanjil() {
  var bilanganganjil = [];
  for (var i = 1; i < 30; i++) {
    if (i % 2 === 1) {
      bilanganganjil.push(i);
    }
  }
  return bilanganganjil;
}

console.log(panggilBilGanjil());
