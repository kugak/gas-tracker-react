import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    record_list: []
  };

  componentDidMount() {
    axios
      .get('/api/tracker')
      .then(res => {
        // console.log(res.data);
        this.setState({ record_list: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
