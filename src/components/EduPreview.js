import React, { Component } from 'react';

export default class EduPreview extends Component {
  render() {
    return (
      <div className="preview-flex">
        <div>
          <div className="school-info">
            <h2 className="school-title">{this.props.school}</h2>
            <p>{this.props.location}</p>
            <p>{this.props.degree}</p>
            <p>{this.props.date}</p>
          </div>
        </div>
        <button onClick={() => this.props.handleRemove(this.props.id)}>
          Delete
        </button>
      </div>
    );
  }
}
