//56
//array find
//akan menghasilkan 1 data index yang pertama ketemu
var array1 = [5, 12, 8, 120, 44];

var found = array1.find(function (element) {
  return element > 100;
});
console.log(found);

//array cari index
var array2 = [5, 12, 8, 130, 44];
function isLargeNumber(element) {
  return element > 44;
}

console.log(array2.findIndex(isLargeNumber));
