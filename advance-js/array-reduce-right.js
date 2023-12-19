//57

//reduce nambah data
var array1 = [1, 2, 3, 4];
var reducer = (accumulator, curretValue) => accumulator + curretValue;
console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));

//reduce right membalikan array
const array2 = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduceRight((accumulator2, curretValue2) =>
  accumulator2.concat(curretValue2)
);

console.log(array2);
