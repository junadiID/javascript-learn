import React from "react";
// const Footer = () => {
//   var name = "Junadi";
//   return (
//     <div>
//       <h4>halaman Footer {name}</h4>
//       <p>@2024</p>
//     </div>
//   );
// };

export function Footer(props) {
  return (
    <div>
      <h4>halaman Footer {props.name}</h4>
      <p>@{props.tahun}</p>
    </div>
  );
}

// export default Footer;
