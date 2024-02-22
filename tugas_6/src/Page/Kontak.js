import React, { Component } from "react";
import "../Style/Kontak.css";
import Header from "./Header";

class Kontak extends Component {
  render() {
    return (
      <div id="kontak_bg">
        <Header />
        <div className="kontak">
          <h3>
            Jl. Bayangkara Kota Sukabumi, Jawa barat,Indonesia Id 43123 {""}
          </h3>
          <p>085722176451</p>
        </div>
      </div>
    );
  }
}

export default Kontak;
