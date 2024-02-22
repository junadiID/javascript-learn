import { Component } from "react";
import MenuTentangKami from "./page/MenuTentangKami";
import MenuUtama from "./page/MenuUtama";
import MenuKontak from "./page/MenuKontak";
import MenuProduct from "./page/MenuProduct";

const Header = () => {
  return (
    <div>
      <h1>Ini Halaman Untuk Header</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
        <Footer />
      </div>
    );
  }
}

const Footer = () => {
  return (
    <div>
      <h1>Ini Halaman Untuk Footer</h1>
    </div>
  );
};
export default App;
