import {
  Container,
  Col,
  Row,
  Card,
  Button,
  Alert,
  Badge,
  Breadcrumb,
  ButtonGroup,
  ButtonToolbar,
  Carousel,
  Dropdown,
  Form,
  InputGroup,
  Image,
  Figure,
  ListGroup,
  Modal,
  Nav,
  Navbar,
  OverlayTrigger,
  Popover,
  Pagination,
  ProgressBar,
  Table,
  Tab,
  Tabs,
  Collapse,
} from "react-bootstrap";
import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const closeModal = () => setShow(false);
  const [open, setOpen] = useState(false);
  const munculPoover = (
    <Popover title="Informasi">Selamat Kami Berhasil</Popover>
  );
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="p-2" href="/">
          Menu
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">Contack</Nav.Link>
          <Nav.Link href="/">Abaout</Nav.Link>
        </Nav>
        <Form className="d-flex gap-1">
          <Form.Control type="text" placeholder="Silahkan cari" />
          <Button variant="outline-info">Cari</Button>
        </Form>
      </Navbar>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <br />
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          Tab content for Contact
        </Tab>
      </Tabs>
      <br />

      <Carousel interval={2000}>
        <Carousel.Item>
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg "
            className="d-block w-100"
            alt="Travel 1"
          />
          <Carousel.Caption>
            <h3>Tiket Pesawat Murah</h3>
            <p>Dapatkan tiket Pesawat murah disini</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src=" https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png  "
            className="d-block w-100"
            alt="Travel 2"
          />
          <Carousel.Caption>
            <h3>Tiket Pesawat Murah</h3>
            <p>Dapatkan tiket Pesawat murah disini</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src=" https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg  "
            className="d-block w-100"
            alt="Travel 3"
          />
          <Carousel.Caption>
            <h3>Tiket Pesawat Murah</h3>
            <p>Dapatkan tiket Pesawat murah disini</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <div className="bg-success p-2 rounded m-2 bg-opacity-25">
        <h1>Hello Food</h1>
        <p>Selamat datang di situs makanan Nusantara</p>
        <Button>Lebih Lengkap</Button>
      </div>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src=" https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png "
            />
            <Card.Body>
              <Card.Title>Sate Ayam</Card.Title>
              <Card.Text>Sate adalah makan enak yang ada di idonesia</Card.Text>
              <Button onClick={() => setShow(true)} variant="primary">
                Beli
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Alert show={show} variant="success">
            <Alert.Heading>My Alert</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
              eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
              amet fermentum.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>
            Ini menu baru <Badge bg="info">New</Badge>
          </h1>
        </Col>
        <Col>
          <Button variant="danger">Primary</Button>
        </Col>
        <Col>
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button>1</Button> <Button>2</Button> <Button>3</Button>{" "}
              <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup className="me-2" aria-label="Second group">
              <Button>5</Button> <Button>6</Button> <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Third group">
              <Button>8</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
      <Row>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success">Pilih Menu</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/">Sate</Dropdown.Item>
              <Dropdown.Item href="/">Ayam</Dropdown.Item>
              <Dropdown.Item href="/">Ikan</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Adres</Form.Label>
              <Form.Control type="email" placeholder="Email" />
              <Form.Text className="text-muted">Masukan Email</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>PassWord</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted">Masukan Email</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" label="Can't check this" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          <Form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Image
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/foodsmall.jpg "
              className=""
              roundedCircle
            />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Figure>
            <Figure.Image
              src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg "
              width={260}
              height={180}
              alt="Nasi Padang"
              rounded
            />
            <Figure.Caption>Ini nasi padang hangat</Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item>Sate Ayam</ListGroup.Item>
            <ListGroup.Item>Sate Kambing</ListGroup.Item>
            <ListGroup.Item>Sate Sapi</ListGroup.Item>
            <ListGroup.Item>Sate Kerbau</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Button variant="primary" onClick={showModal}>
            Tampil Modal
          </Button>
          <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woo ini datanya ada ga</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button variant="primary" onClick={closeModal}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
      <Row>
        <Col>
          <OverlayTrigger
            trigger="click"
            placeholder="right"
            overlay={munculPoover}
          >
            <Button variant="success">Munculkan overlay</Button>
          </OverlayTrigger>
        </Col>
        <Col>
          <Pagination>
            <Pagination.Item>1</Pagination.Item>
            <Pagination.Item>2</Pagination.Item>
            <Pagination.Item active>3</Pagination.Item>
            <Pagination.Item>4</Pagination.Item>
          </Pagination>
        </Col>
        <Col>
          <ProgressBar now={60} label="60%" />
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>

      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Tampilkan
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </Container>
  );
};

export default App;
