import { Component } from "react";

class MenuKontak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alamat:
        "Jl. Swadaya IV, Pd, Ranggon, Cipayung , Kota Jakarta Timur, Daerah Khusus Ibu Kota Jakarta 13860",
      kontak: "085722176451",
    };
  }
  render() {
    return (
      <div>
        <center>
          <h3>{this.state.alamat}</h3>
          <h4>Kontak Kami : {this.state.kontak}</h4>
        </center>
      </div>
    );
  }
}

export default MenuKontak;
