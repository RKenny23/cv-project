import React, { Component } from 'react';

export default class General extends Component {
  state = {
    userName: 'John Smith',
    email: 'myemail@site.com',
    phoneNum: '(123) 456-7890',
    country: 'United States',
    editMode: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggleEdit = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
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
    const { userName, phoneNum, email, country, editMode } = this.state;

    return (
      <>
        <>
          <div className="preview-flex">
            <div>
              <h1 className="name-title">{userName}</h1>
              <p>{email}</p>
              <p>{phoneNum}</p>
              <p>{country}</p>
            </div>
            <button className="edit-btn" onClick={this.toggleEdit}>
              Edit
            </button>
          </div>
        </>

        {editMode && (
          <>
            <form>
              <label htmlFor="userName">Name:</label>
              <input
                type="text"
                name="userName"
                placeholder="Name"
                value={userName}
                onChange={this.handleChange}
              />
              <label htmlFor="userName">Phone:</label>
              <input
                type="text"
                name="phoneNum"
                placeholder="Phone"
                value={phoneNum}
                onChange={this.handleChange}
                onBlur={this.formatNum}
              />
              <label htmlFor="userName">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
              <label htmlFor="userName">Country:</label>
              <input
                type="country"
                name="country"
                placeholder="Country"
                value={country}
                onChange={this.handleChange}
              />
              <button type="submit" onClick={this.toggleEdit}>
                Save
              </button>
            </form>
          </>
        )}
      </>
    );
  }
}
