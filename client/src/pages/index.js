import React from 'react';
import { Grid, Image, Button, Icon, Card } from 'semantic-ui-react';
import '../style/homeStyle.css';
import Axios from 'axios';
import Host from '../config/api';
import { ArtCard } from './indexStyle';

// import art from '../../../art/pollock1.jpg';

class App extends React.Component {
  state = {
    arts: [],
  };
  componentDidMount = () => {
    Axios.get(`${Host}`).then(res => {
      this.setState({ arts: res.data });
    });
  };

  // <h1>{art.artName}</h1>

  render() {
    return (
      <div>
        {this.state.arts.map(art => (
          <ArtCard>
            <Grid columns="three">
              <Grid.Row centered columns={4}>
                <Grid.Column centered>
                  <Card>
                    <Image src="http://localhost:3000/art/pollock1.jpg" />
                    <Card.Content>
                      <Card.Header>{art.artName}</Card.Header>
                      <Card.Meta>
                        <span className="date">{art.artist.name}</span>
                      </Card.Meta>
                      <Card.Description>{art.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui three buttons">
                        <Button href="https://www.w3schools.com" animated>
                          <Button.Content visible>View</Button.Content>
                          <Button.Content hidden>
                            <Icon name="shop" />
                          </Button.Content>
                        </Button>
                        <Button href="" animated>
                          <Button.Content visible>Edit</Button.Content>
                          <Button.Content hidden>
                            <Icon name="edit" />
                          </Button.Content>
                        </Button>
                        <Button href="https://www.w3schools.com" animated>
                          <Button.Content visible>Delete</Button.Content>
                          <Button.Content hidden>
                            <Icon name="trash alternate" />
                          </Button.Content>
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column>
                  <Image src="/images/wireframe/media-paragraph.png" />
                </Grid.Column>
                <Grid.Column>
                  <Image src="/images/wireframe/media-paragraph.png" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </ArtCard>
        ))}
      </div>
    );
  }
}
export default App;
