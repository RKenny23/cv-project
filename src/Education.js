import React, { Component } from 'react';
import EduPreview from './EduPreview';
import uniqid from 'uniqid';

export default class Education extends Component {
  // state = {
  //   school: '',
  //   location: '',
  //   major: '',
  //   from: '',
  //   to: '',
  //   education: [
  //     {
  //       id: uniqid(),
  //       school: 'Cool University',
  //       location: 'New York City, NY',
  //       major: 'B.S. Web Development',
  //       from: '',
  //       to: '',
  //     },
  //   ],
  //   editMode: true,
  // };

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     education: this.state.education.concat({
  //       id: uniqid(),
  //       school: this.state.school,
  //       location: this.state.location,
  //       major: this.state.major,
  //       from: this.state.from,
  //       to: this.state.to,
  //     }),
  //     school: '',
  //     degree: '',
  //     startDate: '',
  //     endDate: '',
  //     location: '',
  //   });

  //   this.toggleEdit();
  // };

  // toggleEdit = () => {
  //   this.setState((prevState) => ({
  //     editMode: !prevState.editMode,
  //   }));
  // };

  // handleRemove = (key) => {
  //   const newEdu = this.state.education.filter(
  //     (education) => education.id !== key
  //   );

  //   this.setState({
  //     education: newEdu,
  //   });
  // };
  state = {
    // school: '',
    // location: '',
    // major: '',
    // from: '',
    // to: '',
    education: [
      {
        id: uniqid(),
        school: '',
        location: '',
        major: '',
        from: '',
        to: '',
      },
    ],
    editMode: true,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // if (this.state.education.id)
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  handleAdd = () => {
    const newEdField = {
      id: uniqid(),
      school: '',
      location: '',
      major: '',
      from: '',
      to: '',
    };
    this.setState({
      education: this.state.education.concat(newEdField),
      school: '',
      location: '',
      major: '',
      from: '',
      to: '',
    });

    // this.handleSubmit();
  };

  handleRemove = (key) => {
    const newEdu = this.state.education.filter(
      (education) => education.id !== key
    );

    this.setState({
      education: newEdu,
    });
  };

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem('formData')));
  }

  componentDidUpdate() {
    localStorage.setItem('formData', JSON.stringify(this.state));
  }

  render() {
    const { school, major, location, from, to, education } = this.state;
    console.log(this.state);

    if (!this.state.editMode) {
      return (
        <>
          <h1 class="school-title">Education:</h1>
          {education.map((edu) => {
            return (
              <>
                <EduPreview
                  id={edu.id}
                  // key={edu.id}
                  school={edu.school}
                  major={edu.major}
                  location={edu.location}
                  from={edu.from}
                  to={edu.to}
                  handleEdit={this.handleSubmit}
                />
                <button key={edu.id} onClick={() => this.handleRemove(edu.id)}>
                  Delete
                </button>
              </>
            );
          })}
          {/* <EduPreview
            school={school}
            major={major}
            location={location}
            from={from}
            to={to}
            handleEdit={this.handleSubmit}
          /> */}
          <button class="edit-btn" onClick={this.handleAdd}>
            Add
          </button>
        </>
      );
    }

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label for="school">School Name:</label>
          <input
            type="text"
            name="school"
            placeholder="School Name"
            value={school}
            onChange={this.handleChange}
          />
          <label for="location">Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={location}
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
