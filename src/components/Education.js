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

  handleSchoolEdit = (text, id) => {
    const education = this.state.education;

    education.map((edu) => {
      if (edu.id === id) {
        edu.school = text;
      }
      return education;
    });

    this.setState({
      education,
    });
  };

  handleLocationEdit = (text, id) => {
    const education = this.state.education;

    education.map((edu) => {
      if (edu.id === id) {
        edu.location = text;
      }
      return education;
    });

    this.setState({
      education,
    });
  };

  handleDegreeEdit = (text, id) => {
    const education = this.state.education;

    education.map((edu) => {
      if (edu.id === id) {
        edu.degree = text;
      }
      return education;
    });

    this.setState({
      education,
    });
  };

  handleStartDateEdit = (text, id) => {
    const education = this.state.education;

    education.map((edu) => {
      if (edu.id === id) {
        edu.startDate = text;
      }
      return education;
    });

    this.setState({
      education,
    });
  };

  handleEndDateEdit = (text, id) => {
    const education = this.state.education;

    education.map((edu) => {
      if (edu.id === id) {
        edu.endDate = text;
      }
      return education;
    });

    this.setState({
      education,
    });
  };

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem('formData')));
  }

  componentDidUpdate() {
    localStorage.setItem('formData', JSON.stringify(this.state));
  }

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
        <div class="new-section">
          <h1 className="section-title">Education:</h1>
          <button className="add-btn" type="button" onClick={this.toggleEdit}>
            +
          </button>
        </div>
        {education.map((edu) => {
          return (
            <div key={edu.id} className="preview-flex">
              <div className="school-info">
                <input
                  id="school-name"
                  type="text"
                  value={edu.school}
                  onChange={(e) =>
                    this.handleSchoolEdit(e.target.value, edu.id)
                  }
                ></input>
                <input
                  className="school-details"
                  type="text"
                  value={edu.location}
                  onChange={(e) =>
                    this.handleLocationEdit(e.target.value, edu.id)
                  }
                ></input>
                <input
                  className="school-details"
                  type="text"
                  value={edu.degree}
                  onChange={(e) =>
                    this.handleDegreeEdit(e.target.value, edu.id)
                  }
                ></input>
                {edu.startDate && (
                  <div className="school-dates">
                    <input
                      className="school-details"
                      type="text"
                      value={edu.startDate}
                      onChange={(e) =>
                        this.handleStartDateEdit(e.target.value, edu.id)
                      }
                    ></input>
                    <span>- </span>
                    <input
                      className="school-details"
                      type="text"
                      value={edu.endDate}
                      onChange={(e) =>
                        this.handleEndDateEdit(e.target.value, edu.id)
                      }
                    ></input>
                  </div>
                )}
              </div>
              {/* <button
                className="edit-btn"
                onClick={() => this.handleEdit(edu.id)}
              >
                Edit
              </button> */}
              <button
                className="edit-btn"
                onClick={() => this.handleRemove(edu.id)}
              >
                Delete
              </button>
            </div>
          );
        })}

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
