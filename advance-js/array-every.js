//53
//untuk mengecek type data array
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
console.log(produk.every((produk) => produk.type === "Fruit"));
