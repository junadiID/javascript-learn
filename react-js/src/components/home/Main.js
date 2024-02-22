import { Component } from "react";
import menuMakanan from "./lib/Food";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Menu makanan",
      title2: "Menu Minuman",
      inputValue: "",
      inputKota: "",
      menuMakanan: [
        {
          nama: "Mie Ayam",
          harga: 10000,
        },
        {
          nama: "Bakso",
          harga: 15000,
        },
        {
          nama: "Mie Ayam Bakso",
          harga: 20000,
        },
        {
          nama: "Soto",
          harga: 10000,
        },
      ],
    };
    this.rubahData = this.rubahData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //   rubahData() {
  //     this.setState({ title: "Pilih Makanan" }); //untuk merubah data di state
  //   }

  rubahData() {
    this.setState((state, props) => {
      return {
        title: state.title2,
        title2: state.title,
      }; //penulisan state arrow function lebih disarankan
    });
  }

  handleChange(value, e) {
    this.setState({ [value]: e.target.value });
    // const eventTargets = e.target.value;
    // this.setState((state, props) => {
    //   return {
    //     inputValue: eventTargets,
    //   };
    // });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.title2}</h2>
        <button onClick={this.rubahData}>Rubah Data</button>
        <br />
        <br />
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.handleChange("inputValue", e)}
          placeholder="name"
        />

        <input
          type="text"
          value={this.state.inputKota}
          placeholder="kota"
          onChange={(e) => this.handleChange("inputKota", e)}
        />

        {menuMakanan.map((value, index) => {
          console.log(value);
          console.log(index);
          return (
            <div key={index}>
              <p>No : {index + 1}</p>
              <p>Nama Makanan : {value.nama}</p>
              <p>harga : {value.harga}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Main;
