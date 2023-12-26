// function balikKata(kata) {
//   let reversed = "";
//   for (let i = kata.length - 1; i >= 0; i--) {
//     reversed += kata.charAt(i);
//   }
//   return reversed;
// }

// // testCase
// console.log(balikKata("Niomic!"));
// console.log(balikKata("JavaScript"));
// console.log(balikKata("alohahola"));
// console.log(balikKata("Jawa_Barat"));

function balikKata(kata) {
  let reversed = "";

  let karakterArray = Array.from(kata);

  karakterArray.forEach(function (karakter) {
    reversed = karakter + reversed;
  });

  return reversed;
}

// testCase
console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));
