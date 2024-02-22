import { useState } from "react";
import {
  Dropdown,
  Row,
  Col,
  Container,
  Breadcrumb,
  Carousel,
  ListGroup,
  Button,
  Form,
  Modal,
} from "react-bootstrap";

const App = () => {
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);
  return (
    <Container>
      <Dropdown className="bg-black pb-5">
        <Dropdown.Toggle variant="primary" id="dropdownbasic">
          Pilih Bahasa
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Indonesia</Dropdown.Item>
          <Dropdown.Item href="/">English</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Row>
        <Col></Col>
        <Col>
          <Breadcrumb className="bg-secondary bg-opacity-10 p-1 text-center">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Berita</Breadcrumb.Item>
            <Breadcrumb.Item active>Bola</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Carousel className="col-8">
            <Carousel.Item>
              <img
                src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600

https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600

https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                alt="poto 1"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
                <p>ini pemain terbaik dunia sedang latihan</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600

https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600

https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                alt="poto 1"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
                <p>ini pemain terbaik dunia sedang latihan</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600

https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600

https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
                alt="poto 1"
                className="d-block w-100"
              />
              <Carousel.Caption>
                <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
                <p>ini pemain terbaik dunia sedang latihan</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item>Liga 1 Indonesia</ListGroup.Item>
            <ListGroup.Item>Liga Premier Inggris</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <div className="bg-secondary bg-opacity-10 p-5">
            <h1>Divisi PRIMERA</h1>
            <p>Main untuk dihormati lawan</p>
            <Button variant="primary">Read more</Button>
          </div>
        </Col>
        <Col>
          <Form>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src="asset/profil.png" width={60} rounded />
              <h3>Silahkan Login</h3>
            </div>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control type="email" placeholder="Masukan Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSandi">
              <Form.Control type="password" placeholder="Masukan password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Check" />
            </Form.Group>
            <Button variant="primary" onClick={showModal}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      <Modal show={show} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Anda Berhasil Login</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={hideModal}>
            Set Username & password
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default App;
