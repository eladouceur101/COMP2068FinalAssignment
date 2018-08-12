import React from 'react';
import Axios from 'axios';
import Host from '../config/api';
import { Form } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class create extends React.Component {
  state = {
    artName: '',
    description: '',
    price: 0,
    artist: {
      name: '',
      born: '',
      died: '',
      nationality: '',
    },
    file: {},
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleArtistChange = (e, { name, value }) =>
    this.setState({ artist: { ...this.state.artist, [name]: value } });

  handleSubmit = () => {
    const data = {
      artName: this.state.artName,
      description: this.state.description,
      price: this.state.price,
      artist: this.state.artist,
    };

    const formData = new FormData();

    formData.append('art', data);
    formData.append('file', this.state.file);

    Axios.post(Host, formData)
      .then(res => console.log('Upload Complete'))
      .catch(res => console.log(res));
  };

  onDrop(acceptedFile, rejectedFiles) {
    this.setState({ file: acceptedFile });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Dropzone accept="image/*" onDrop={files => this.onDrop(files)}>
          <div>
            Drag Art Image File on here, or click to select file to upload
          </div>
        </Dropzone>
        <Form.Input
          fluid
          name="artName"
          label="Art Title"
          placeholder="Art Title"
          required
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          name="description"
          label="Description"
          placeholder="Description"
          required
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          name="price"
          label="Listing Price"
          placeholder="Listing Price"
          required
          onChange={this.handleChange}
        />
        <Form.Input
          fluid
          name="name"
          label="Artist"
          placeholder="Artist"
          required
          onChange={this.handleArtistChange}
        />
        <Form.Input
          fluid
          name="born"
          label="Artist DOB"
          placeholder="Artist DOB"
          required
          onChange={this.handleArtistChange}
        />
        <Form.Input
          fluid
          name="died"
          label="Artist Death"
          placeholder="Artist Death"
          onChange={this.handleArtistChange}
        />
        <Form.Input
          fluid
          name="nationality"
          label="Artist Nationality"
          placeholder="Artist Nationality"
          required
          onChange={this.handleArtistChange}
        />
        <Form.Button content="Submit" />
      </Form>
    );
  }
}

export default create;
