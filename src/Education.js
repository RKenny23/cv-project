import React, { Component } from 'react';
import uniqid from 'uniqid';

export default class Education extends Component {
  state = {
    school: '',
    location: '',
    degree: '',
    startDate: '',
    endDate: '',
    education: [
      {
        id: uniqid(),
        school: 'Great University',
        location: 'Somewhere, U.S.A.',
        degree: 'Web Development',
        startDate: 'Sept 2008',
        endDate: 'April 2012',
      },
    ],
    editMode: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      education: this.state.education.concat({
        id: uniqid(),
        school: this.state.school,
        location: this.state.location,
        degree: this.state.degree,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
      }),
      school: '',
      location: '',
      degree: '',
      startDate: '',
      endDate: '',
    });

    this.toggleEdit();
  };

  toggleEdit = () => {
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  handleRemove = (id) => {
    const filtered = this.state.education.filter((edu) => edu.id !== id);

    this.setState({
      education: filtered,
    });
  };

  handleEdit = (id) => {
    const filtered = this.state.education.filter((edu) => edu.id !== id);

    const selected = this.state.education.find((edu) => edu.id === id);

    this.setState({
      education: filtered,
      id: id,
      school: selected.school,
      location: selected.location,
      degree: selected.degree,
      startDate: selected.startDate,
      endDate: selected.endDate,
      editMode: true,
    });
  };

  // componentDidMount() {
  //   this.setState(JSON.parse(localStorage.getItem('formData')));
  // }

  // componentDidUpdate() {
  //   localStorage.setItem('formData', JSON.stringify(this.state));
  // }

  render() {
    const {
      school,
      degree,
      location,
      startDate,
      endDate,
      education,
      editMode,
    } = this.state;

    return (
      <>
        <h1 className="school-title">Education:</h1>
        {education.map((edu) => {
          return (
            <div key={edu.id} className="preview-flex">
              <div className="school-info">
                <h2 className="school-title">{edu.school}</h2>
                <p>{edu.location}</p>
                <p>{edu.degree}</p>
                {edu.startDate && (
                  <p>
                    {edu.startDate} - {edu.endDate}
                  </p>
                )}
              </div>
              <button
                className="edit-btn"
                onClick={() => this.handleEdit(edu.id)}
              >
                Edit
              </button>
              <button
                className="edit-btn"
                onClick={() => this.handleRemove(edu.id)}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button className="school-info" type="button" onClick={this.toggleEdit}>
          Add
        </button>

        {editMode && (
          <form>
            <label htmlFor="school">School Name:</label>
            <input
              type="text"
              name="school"
              placeholder="School Name"
              value={school}
              onChange={this.handleChange}
            />
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={location}
              onChange={this.handleChange}
            />
            <label htmlFor="major">Major:</label>
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              value={degree}
              onChange={this.handleChange}
            />
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              name="startDate"
              value={startDate}
              placeholder="Month &amp; Year"
              onChange={this.handleChange}
            />
            <label htmlFor="endDate">End Date</label>
            <input
              type="text"
              name="endDate"
              value={endDate}
              placeholder="Month &amp; Year"
              onChange={this.handleChange}
            />
            <button type="submit" onClick={this.handleSubmit}>
              Add Education
            </button>
            <button type="button" onClick={this.toggleEdit}>
              Close
            </button>
          </form>
        )}
      </>
    );
  }
}

// );

// return (
//   <>
//     <form onSubmit={this.handleSubmit}>
//       <label for="school">School Name:</label>
//       <input
//         type="text"
//         name="school"
//         placeholder="School Name"
//         value={school}
//         onChange={this.handleChange}
//       />
//       <label for="location">Location:</label>
//       <input
//         type="text"
//         name="location"
//         placeholder="Location"
//         value={location}
//         onChange={this.handleChange}
//       />
//       <label for="major">Major:</label>
//       <input
//         type="text"
//         name="major"
//         placeholder="Major"
//         value={major}
//         onChange={this.handleChange}
//       />
//       <label for="startDate">Start Date:</label>
//       <input
//         type="date"
//         name="startDate"
//         placeholder="Start Date"
//         value={startDate}
//         onChange={this.handleChange}
//       />
//       <label for="endDate">End Date:</label>
//       <input
//         type="date"
//         name="endDate"
//         placeholder="End Date"
//         value={endDate}
//         onChange={this.handleChange}
//       />
//       <button type="submit">Save</button>
//     </form>

//   }
// }
