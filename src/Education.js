import React, { Component } from 'react';
import EduPreview from './EduPreview';

export default class Education extends Component {
  state = {
    school: '',
    major: '',
    from: '',
    to: '',
    editMode: true,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(
      this.state.editMode === true
        ? {
            editMode: false,
          }
        : { editMode: true }
    );
  };

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem('formData')));
  }

  componentDidUpdate() {
    localStorage.setItem('formData', JSON.stringify(this.state));
  }

  render() {
    const { school, major, from, to } = this.state;
    console.log(this.state);

    if (!this.state.editMode) {
      return (
        <EduPreview
          school={school}
          major={major}
          from={from}
          to={to}
          handleEdit={this.handleSubmit}
        />
      );
    }

    return (
      <>
        <h2>Education</h2>
        <form onSubmit={this.handleSubmit}>
          <label for="school">School Name:</label>
          <input
            type="text"
            name="school"
            placeholder="School Name"
            value={school}
            onChange={this.handleChange}
          />
          <label for="major">Major:</label>
          <input
            type="text"
            name="major"
            placeholder="Major"
            value={major}
            onChange={this.handleChange}
          />
          <label for="from">Start Date:</label>
          <input
            type="date"
            name="from"
            placeholder="Start Date"
            value={from}
            onChange={this.handleChange}
          />
          <label for="to">End Date:</label>
          <input
            type="date"
            name="to"
            placeholder="End Date"
            value={to}
            onChange={this.handleChange}
          />
          <button type="submit">Save</button>
        </form>
      </>
    );
  }
}
