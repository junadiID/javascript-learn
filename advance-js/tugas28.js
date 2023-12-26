function regex() {
  let str = "abcdefghijklmnopqrstuvwxyz";
  let result = "Urut ke : ".concat(str.search(/s/));
  return result;
}

console.log(regex());
