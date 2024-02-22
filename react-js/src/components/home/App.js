import { Component } from "react";
import Top from "./Top";
// import Main from "./Main";
import Header from "./Header";
import { Footer } from "./Footer";
import CustomInput from "./CustomInput";
// import Form from "./Form";
// import List from "./List";

class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 Terbaik" />
        <Top />
        {/* <Form /> */}
        {/* <Main />
        <List />  */}
        <CustomInput />
        <Footer name="Makanan Nusantara" tahun="2023" />
      </div>
    );
  }
}

export default App;
