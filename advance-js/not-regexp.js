//82

function panggilRegexp(value) {
  //   var ambilData = value.match(/\s/g);
  //   var ambilData = value.match(/\w/g);
  //   var ambilData = value.match(/\D/g);
  var ambilData = value.match(/\S/g);
  console.log(ambilData);
}

panggilRegexp("Bulan ke 1 sd ke 4");
