import React, { Component } from 'react';
import VisButton from './VisButton';

export default class EditText extends Component {
  state = {
    value: this.props.value,
    editMode: false,
  };

  comp = () => {
    if (this.state.editMode) {
      return (
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.updateValue}
          ></input>
          <input
            type="button"
            value="Save"
            onClick={this.setEdit}
            className="button"
          ></input>
        </div>
      );
    }

    return (
      <div className="Text">
        <div>
          <label>{this.state.value}</label>
        </div>
        <VisButton
          value="Edit"
          render={this.props.buttons}
          className="button"
          onClick={this.setEdit}
        />
      </div>
    );
  };

  updateValue = (e) => {
    this.setState({ value: e.target.value });
  };

  setEdit = () => {
    this.setState(() => {
      if (!this.state.editMode) {
        return { editMode: true };
      }

      return { editMode: false };
    });
  };

  render() {
    return this.comp();
  }
}
