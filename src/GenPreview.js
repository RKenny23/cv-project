import React, { Component } from 'react';

export default class GenPreview extends Component {
  render() {
    return (
      <>
        <div class="preview-flex">
          <div>
            <h1 class="name-title">{this.props.userName}</h1>
            <p>{this.props.email}</p>
            <p>{this.props.phoneNum}</p>
            <p>{this.props.country}</p>
          </div>
          <button class="edit-btn" onClick={this.props.handleEdit}>
            Edit
          </button>
        </div>
      </>
    );
  }
}
