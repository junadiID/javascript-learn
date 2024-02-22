import { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Container,
  Grid,
  Icon,
  Image,
  Input,
  Label,
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1>Tes Semantic</h1>
          <Button primary>Button pertama</Button>
          <Button secondary>Button Kedua</Button>
          <br />
          <Grid container columns={3}>
            <Grid.Column>1</Grid.Column>
            <Grid.Column>2</Grid.Column>
            <Grid.Column>3</Grid.Column>
          </Grid>
        </Container>
        <Container>
          <Icon name="spinner" size="big" loading />
          <Icon name="recycle" />
          <br />
          <Image
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            href="/"
            size="small"
          />
          <Input placeholder="Cari" type="text" icon={<Icon name="search" />} />
          <Label pointing="left">Mesin Pencarian Google</Label>
        </Container>
      </div>
    );
  }
}

export default App;
