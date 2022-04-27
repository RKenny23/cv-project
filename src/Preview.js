import React, { Component } from 'react';
import General from './General';

export default class Preview extends Component {
  state = {};
  render() {
    return <General firstName={this.props.firstName} />;
  }
}
