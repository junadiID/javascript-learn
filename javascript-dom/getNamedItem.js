// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Belajar js</title>
//   </head>
//   <body>
//     <br />
//     <button name="button" type="button" onclick="Tombol()">klik</button>
//     <p id="contoh">Contoh</p>
//     <script type="text/javascript">

//     </script>
//   </body>
// </html>
function Tombol() {
  var a = document.getElementsByTagName("button")[0];
  var b = a.attributes.getNamedItem("name").value;
  document.getElementById("contoh").innerHTML = b;
}
