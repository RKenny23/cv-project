import React, { Component } from 'react';

export default class GeneralPreview extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.handleEdit}>Edit</button>
        <p>Name: {this.props.userName}</p>
        <p>Email: {this.props.email}</p>
        <p>Phone: {this.props.phoneNum}</p>
        <p>Country: {this.props.country}</p>
      </>
    );
  }
}
