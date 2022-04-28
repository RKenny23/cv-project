import React, { Component } from 'react';
import GenPreview from './GenPreview';

export default class General extends Component {
  state = {
    userName: '',
    phoneNum: '',
    email: '',
    country: '',
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

  formatNum = (e) => {
    let nums = e.target.value.split('');
    nums.splice(0, 0, '(');
    nums.splice(4, 0, ') ');
    nums.splice(8, 0, '-');
    const newPhoneNum = nums.join('');
    this.setState({
      phoneNum: newPhoneNum,
    });
  };

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem('formData')));
  }

  componentDidUpdate() {
    localStorage.setItem('formData', JSON.stringify(this.state));
  }

  render() {
    const { userName, phoneNum, email, country } = this.state;
    console.log(this.state);

    if (!this.state.editMode) {
      return (
        <GenPreview
          userName={userName}
          phoneNum={phoneNum}
          email={email}
          country={country}
          handleEdit={this.handleSubmit}
        />
      );
    }

    return (
      <>
        <h2>General Information</h2>
        <form onSubmit={this.handleSubmit}>
          <label for="userName">Name:</label>
          <input
            type="text"
            name="userName"
            placeholder="Name"
            value={userName}
            onChange={this.handleChange}
          />
          <label for="userName">Phone:</label>
          <input
            type="text"
            name="phoneNum"
            placeholder="Phone"
            value={phoneNum}
            onChange={this.handleChange}
            onBlur={this.formatNum}
          />
          <label for="userName">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <label for="userName">Country:</label>
          <input
            type="country"
            name="country"
            placeholder="Country"
            value={country}
            onChange={this.handleChange}
          />
          <button type="submit">Save</button>
        </form>
      </>
    );
  }
}
