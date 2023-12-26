//84
function panggilBilGenap() {
  var bilangangenap = [];
  for (var i = 1; i < 30; i++) {
    if (i % 2 === 0) {
      bilangangenap.push(i);
    }
  }
  return bilangangenap;
}

console.log(panggilBilGenap());
