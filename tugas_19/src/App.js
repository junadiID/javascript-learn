import axios from "axios";
import { Component } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: [],
      edit: false,
      dataPost: {
        id: "",
        nama_karyawan: "",
        jabatan: "",
        jenis_kelamin: "",
        tanggal_lahir: "",
      },
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleRemove(e) {
    console.log(e.target.value);
    axios
      .delete(`http://localhost:3004/data-karyawan/${e.target.value}`)
      .then(() => this.reloadData())
      .catch((error) => console.error("Error deleting data:", error));
  }

  reloadData() {
    axios
      .get("http://localhost:3004/data-karyawan")
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
        .post(`http://localhost:3004/data-karyawan`, this.state.dataPost)
        .then(() => {
          this.reloadData();
          this.clearData();
        });
    } else {
      axios
        .put(
          `http://localhost:3004/data-karyawan/${this.state.dataPost.id}`,
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
    newDataPost["nama_karyawan"] = "";
    newDataPost["jabatan"] = "";
    newDataPost["jenis_kelamin"] = "";
    newDataPost["tanggal_lahir"] = "";
    this.setState({
      dataPost: newDataPost,
    });
  };

  getDataId = (e) => {
    axios
      .get(`http://localhost:3004/data-karyawan/${e.target.value}`)
      .then((res) => {
        this.setState({
          dataPost: res.data,
          edit: true,
        });
      });
  };

  componentDidMount() {
    this.reloadData();
  }

  render() {
    return (
      <div>
        <div
          className="p-2 text-center text-white"
          style={{ backgroundColor: "#fd7e14" }}
        >
          <h3>Data Karyawan</h3>
        </div>
        <Container>
          <div className="d-flex gap-2 m-1">
            <input
              type="text"
              name="nama_karyawan"
              value={this.state.dataPost.nama_karyawan}
              className="form-control"
              onChange={this.inputChange}
              placeholder="Masukan nama karyawan"
            />
            <input
              type="text"
              name="jabatan"
              value={this.state.dataPost.jabatan}
              className="form-control"
              onChange={this.inputChange}
              placeholder="Masukan nama jabatam"
            />

            <Form.Select name="jenis_kelamin" onChange={this.inputChange}>
              <option>Pilih Jenis Kelamin</option>
              <option
                value="laki-laki"
                selected={this.state.dataPost.jenis_kelamin === "laki-laki"}
              >
                Laki-Laki
              </option>
              <option
                value="perempuan"
                selected={this.state.dataPost.jenis_kelamin === "perempuan"}
              >
                Perempuan
              </option>
            </Form.Select>

            <input
              name="tanggal_lahir"
              type="date"
              onChange={this.inputChange}
              value={this.state.dataPost.tanggal_lahir}
              className="form-control"
            />
            <Button
              variant="primary"
              style={{ width: "50%" }}
              onClick={this.onSubmit}
            >
              Save Data
            </Button>
          </div>

          <div className="d-flex gap-2 mt-3 flex-wrap">
            {this.state.dataApi.map((dat, index) => {
              return (
                <Card style={{ width: "18rem" }} key={index}>
                  <Card.Body>
                    <Card.Text>
                      <p>Nama : {dat.nama_karyawan}</p>
                      <p>Jabatan : {dat.jabatan}</p>
                      <p>Jenis Kelamin : {dat.jenis_kelamin}</p>
                      <p>Tanggal Lahir : {dat.tanggal_lahir}</p>
                    </Card.Text>
                    <div className="d-flex gap-1">
                      <Button
                        value={dat.id}
                        variant="danger"
                        onClick={this.handleRemove}
                      >
                        Delete
                      </Button>
                      <Button
                        value={dat.id}
                        variant="success"
                        onClick={this.getDataId}
                      >
                        Edit Data
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}
export default App;
