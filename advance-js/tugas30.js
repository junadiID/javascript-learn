function regex(value) {
  let data = value.match(/[es]/g);
  console.log(data.concat(data));
}

regex(
  "Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat"
);
