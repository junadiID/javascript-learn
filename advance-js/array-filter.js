//52
let peoples = [
  {
    name: "junjun",
    gender: "male",
  },
  {
    name: "Andi",
    gender: "male",
  },
  {
    name: "Siti",
    gender: "female",
  },
];

let female = peoples.filter(peoples => {
  return peoples.gender === "male";
});

console.log(female);
