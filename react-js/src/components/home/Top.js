import React from "react";

const Top = () => {
  function handlePesan(val, e) {
    e.preventDefault(); //uuntuk mengatasi loading halaman
    alert("Halaman Top Tampil");
    alert(val);
  }
  return (
    <a href="/" onClick={(e) => handlePesan("Pesan Dari Top", e)}>
      Halaman Top
    </a>
  );
};

export default Top;
