import { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlah: 0,
      pesanan: "",
      tampil: true,
    };
    this.pilihPesanan = this.pilihPesanan.bind(this);
    this.nasipadang = this.nasipadang.bind(this);
    this.sate = this.sate.bind(this);
    this.soto = this.soto.bind(this);
    this.uduk = this.uduk.bind(this);
    this.kuning = this.kuning.bind(this);
    this.batal = this.batal.bind(this);
  }

  pilihPesanan(value, e) {
    this.setState({ [value]: e.target.value, value: true });
  }

  nasipadang() {
    this.setState({
      pesanan: "Nasi Padang",
      jumlah: this.state.jumlah + 1,
      tampil: true,
    });
  }

  sate() {
    this.setState({
      pesanan: "Sate",
      jumlah: this.state.jumlah + 1,
      tampil: true,
    });
  }

  soto() {
    this.setState({
      pesanan: "Stoto Ayam Lamongan",
      jumlah: this.state.jumlah + 1,
      tampil: true,
    });
  }

  uduk() {
    this.setState({
      pesanan: "Nasi Uduk",
      jumlah: this.state.jumlah + 1,
      tampil: true,
    });
  }

  kuning() {
    this.setState({
      pesanan: "Nasi Kuning",
      jumlah: this.state.jumlah + 1,
      tampil: true,
    });
  }

  batal() {
    this.setState({
      pesanan: " ",
      jumlah: 0,
      tampil: false,
    });
  }

  render() {
    return (
      <div>
        <h3>Daftar Makan Yang Kami Sediakan :</h3>
        <td>
          <ListMakanan img="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
          <center>
            <button onClick={this.nasipadang}>Pesan Sekarang</button>
          </center>
        </td>
        <td>
          <ListMakanan img="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
          <center>
            <button onClick={this.sate}>Pesan Sekarang</button>
          </center>
        </td>
        <td>
          <ListMakanan img="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
          <center>
            <button onClick={this.soto}>Pesan Sekarang</button>
          </center>
        </td>
        <td>
          <ListMakanan img="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
          <center>
            <button onClick={this.uduk}>Pesan Sekarang</button>
          </center>
        </td>
        <td>
          <ListMakanan img="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
          <center>
            <button onClick={this.kuning}>Pesan Sekarang</button>
          </center>
        </td>
        <br />
        <br />
        <input
          placeholder="Masukan Pesanan Anda"
          type="text"
          onChange={(e) => this.pilihPesanan("pesanan", e)}
        />
        <input
          type="number"
          placeholder="Jumlah Pesanan"
          onChange={(e) => this.pilihPesanan("jumlah", e)}
        />
        <button onClick={this.batal}>Batalkan Semua Pesanan</button>
        {this.state.tampil === true ? (
          <div>
            <h3>Pesanan Anda : {this.state.pesanan}</h3>
            <h4>Jumlah Pesanan : {this.state.jumlah}</h4>
          </div>
        ) : (
          <h1>
            <center>Anda Belum Memesan</center>
          </h1>
        )}
      </div>
    );
  }
}

export default MenuMakanan;
