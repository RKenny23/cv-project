import React, { Component } from 'react';

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
    localStorage.setItem('formData', JSON.stringify(this.state));
    this.setState({
      userName: '',
      phoneNum: '',
      email: '',
      country: '',
    });
  };

  formatNum = (e) => {
    let phone = e.target.value.split('');
    phone.splice(0, 0, '(');
    phone.splice(4, 0, ') ');
    phone.splice(8, 0, '-');
    const newPhoneNum = phone.join('');
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

    return (
      <>
        <h1>General Information</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="userName"
            placeholder="Name"
            value={userName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="phoneNum"
            placeholder="Phone"
            value={phoneNum}
            onChange={this.handleChange}
            onBlur={this.formatNum}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="country"
            name="country"
            placeholder="Country"
            value={country}
            onChange={this.handleChange}
          />
          <button type="submit">Save</button>
        </form>
        <h1>{userName}</h1>
        <h1>{phoneNum}</h1>
        <h1>{email}</h1>
        <h1>{country}</h1>
      </>
    );
  }
}
