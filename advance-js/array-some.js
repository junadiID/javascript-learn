//54
//untuk mengecek type di dalam array
let produk = [
  {
    name: "Apple",
    type: "Fruit",
  },
  {
    name: "Manggo",
    type: "Fruit",
  },
  {
    name: "Monitor",
    type: "Computer",
  },
  {
    name: "Tables",
    type: "Furniture",
  },
];

console.log(produk.some((produk) => produk.type === "Fruit"));
