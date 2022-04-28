import React, { Component } from 'react';

export default class EduPreview extends Component {
  render() {
    return (
      <div class="preview-flex">
        <div>
          <h1 class="school-title">Education:</h1>
          <h2 class="school-title">{this.props.school}</h2>
          <p>{this.props.major}</p>
          <p>
            From {this.props.from} to {this.props.to}
          </p>
        </div>
        <button class="edit-btn" onClick={this.props.handleEdit}>
          Edit
        </button>
        <button class="edit-btn" onClick={this.props.handleEdit}>
          Add
        </button>
      </div>
    );
  }
}
