import React, { Component } from 'react';

export default class EduPreview extends Component {
  render() {
    return (
      <div class="preview-flex">
        <div>
          <div class="school-info">
            <h2 class="school-title">{this.props.school}</h2>
            <p>{this.props.id}</p>
            <p>{this.props.location}</p>
            <p>{this.props.major}</p>
            <p>
              From {this.props.from} to {this.props.to}
            </p>
          </div>
        </div>
        <button class="edit-btn" onClick={this.props.handleEdit}>
          Edit
        </button>
      </div>
    );
  }
}
