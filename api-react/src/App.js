import axios from "axios";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
      edit: false,
      dataPost: {
        id: "",
        title: "",
        body: "",
      },
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // handleRemove(e) {
  //   console.log(e.target.value);
  //   fetch(`http://localhost:3004/posts/${e.target.value}`, {
  //     method: "DELETE",
  //   }).then((res) => this.reloadData());
  // }

  handleRemove(e) {
    console.log(e.target.value);
    axios
      .delete(`http://localhost:3004/posts/${e.target.value}`)
      .then(() => this.reloadData())
      .catch((error) => console.error("Error deleting data:", error));
  }

  // reloadData() {
  //   axios.get("http://localhost:3004/posts").then((res) => {
  //     this.setState({
  //       dataApi: res.data,
  //     });
  //   });
  // }

  reloadData() {
    axios
      .get("http://localhost:3004/posts")
      .then((res) => {
        this.setState({
          dataApi: res.data,
          edit: false,
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  inputChange(e) {
    let newDataPost = { ...this.state.dataPost };
    if (this.state.edit === false) {
      newDataPost["id"] = new Date().getTime().toString();
    }

    newDataPost[e.target.name] = e.target.value;
    this.setState(
      {
        dataPost: newDataPost,
      },
      () => console.log(this.state.dataPost)
    );
  }

  onSubmit = () => {
    if (this.state.edit === false) {
      axios
        .post(`http://localhost:3004/posts`, this.state.dataPost)
        .then(() => {
          this.reloadData();
          this.clearData();
        });
    } else {
      axios
        .put(
          `http://localhost:3004/posts/${this.state.dataPost.id}`,
          this.state.dataPost
        )
        .then(() => {
          this.reloadData();
          this.clearData();
        });
    }
  };

  clearData = () => {
    let newDataPost = { ...this.state.dataPost };

    newDataPost["id"] = "";
    newDataPost["body"] = "";
    newDataPost["title"] = "";
    this.setState({
      dataPost: newDataPost,
    });
  };

  getDataId = (e) => {
    axios.get(`http://localhost:3004/posts/${e.target.value}`).then((res) => {
      this.setState({
        dataPost: res.data,
        edit: true,
      });
    });
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       dataApi: json,
    //     });
    //   });
    this.reloadData();
  }
  render() {
    return (
      <div>
        <h1>Data Api</h1>
        <input
          type="text"
          name="body"
          value={this.state.dataPost.body}
          placeholder="masukan Body"
          onChange={this.inputChange}
        />
        <input
          type="text"
          name="title"
          value={this.state.dataPost.title}
          placeholder="masukan Title"
          onChange={this.inputChange}
        />
        <button type="submit" onClick={this.onSubmit}>
          Save Data
        </button>
        {this.state.dataApi.map((dat, index) => {
          return (
            <div key={index}>
              <h3>{dat.title}</h3>
              <button value={dat.id} onClick={this.handleRemove}>
                Delete
              </button>
              <button value={dat.id} onClick={this.getDataId}>
                Edit Data
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
