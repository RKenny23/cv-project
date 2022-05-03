import React, { Component } from 'react';
import uniqid from 'uniqid';

export default class Experience extends Component {
  state = {
    company: '',
    title: '',
    tasks: '',
    startDate: '',
    endDate: '',
    experience: [
      {
        id: uniqid(),
        company: 'Awesome United',
        title: 'Administrative Liason',
        tasks: 'Web Development',
        date: 'June 2012 - Nov 2018',
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
      experience: this.state.experience.concat({
        id: uniqid(),
        company: this.state.company,
        title: this.state.title,
        tasks: this.state.tasks,
        date: this.state.startDate + ' - ' + this.state.endDate,
      }),
      company: '',
      title: '',
      tasks: '',
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
    const filtered = this.state.experience.filter((exp) => exp.id !== id);

    this.setState({
      experience: filtered,
    });
  };

  render() {
    const { company, title, tasks, startDate, endDate, experience, editMode } =
      this.state;

    return (
      <>
        <h1 className="school-title">Experience:</h1>
        {experience.map((exp) => {
          return (
            <div key={exp.id} onClick={() => this.handleRemove(exp.id)}>
              <div className="school-info">
                <h2 className="school-title">{exp.company}</h2>
                <p>{exp.title}</p>
                <p>{exp.tasks}</p>
                <p>{exp.date}</p>
              </div>
            </div>
          );
        })}
        <button className="school-info" type="button" onClick={this.toggleEdit}>
          Add
        </button>

        {editMode && (
          <form>
            <label htmlFor="company">Company Name:</label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={company}
              onChange={this.handleChange}
            />
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={this.handleChange}
            />
            <label htmlFor="tasks">Tasks:</label>
            <input
              type="text"
              name="tasks"
              placeholder="Tasks"
              value={tasks}
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
