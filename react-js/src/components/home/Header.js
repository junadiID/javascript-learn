import { Component } from "react";
import "./header.css"

const judul = {
  color: "yellow",
  backgroundColor: "red",
  marginTop: "50px",
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Daftar Makanan Nusantara",
      dataList: this.props.list,
      statusRendering: true, //condisial rendering
    };
    this.handlePesan = this.handlePesan.bind(this); //untuk mengirim data ke handle
    this.handleElement = this.handleElement.bind(this);
  }

  handlePesan(value, e) {
    e.preventDefault();
    alert(this.state.daftar);
    alert(value);
  }

  //akan dijalankan setelah render
  componentDidMount() {
    console.log("jalan componentDidMount ");
  }

  handleElement() {
    this.setState((state, props) => {
      return { statusRendering: !state.statusRendering };
    });
  }

  render() {
    console.log("Jalan : Render");
    console.log(this.state.statusRendering);
    return (
      <div>
        {this.state.statusRendering === true ? (
          <div>
            <h1
              style={{
                color: "red",
                fontSize: "40px",
                backgroundColor: "yellow",
                marginTop: "100px",
              }}
            >
              Selamat Datang
            </h1>
            <h2 style={judul}>Silahkan Pilih Makanan</h2>
          </div>
        ) : (
          <div>
            <h1 id="SudulKedua">Selamat Tinggal</h1>
            <h2 className="judulinfo">Jangan lupa datang kembali</h2>
          </div>
        )}
        <button onClick={this.handleElement}>Change</button>
      </div>
    );
    // return (
    //   <div>
    //     <h2>makanan Khas Indonesia</h2>
    //     <p>{this.state.daftar}</p>
    //     <p>{this.state.dataList}</p>
    //     <a href="/" onClick={(e) => this.handlePesan("Pesan Dari Header", e)}>
    //       Halaman Header
    //     </a>
    //   </div>
    // );
  }
}

export default Header;
