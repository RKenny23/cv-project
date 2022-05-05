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
        tasks: 'Prepare invoices, reports, memos, letters',
        startDate: 'June 2012',
        endDate: 'Nov 2018',
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
        startDate: this.state.startDate,
        endDate: this.state.endDate,
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

  handleEdit = (id) => {
    const filtered = this.state.experience.filter((exp) => exp.id !== id);

    const selected = this.state.experience.find((exp) => exp.id === id);

    this.setState({
      experience: filtered,
      id: id,
      company: selected.company,
      title: selected.title,
      tasks: selected.tasks,
      startDate: selected.startDate,
      endDate: selected.endDate,
      editMode: true,
    });
  };

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem('formData')));
  }

  componentDidUpdate() {
    localStorage.setItem('formData', JSON.stringify(this.state));
  }

  render() {
    const { company, title, tasks, startDate, endDate, experience, editMode } =
      this.state;

    return (
      <>
        <div class="new-section">
          <h1 className="section-title">Experience:</h1>
          <button className="add-btn" type="button" onClick={this.toggleEdit}>
            +
          </button>
        </div>
        {experience.map((exp) => {
          return (
            <div className="preview-flex" key={exp.id}>
              <div className="school-info">
                <h2 id="school-name">{exp.company}</h2>
                <p>{exp.title}</p>
                <p>{exp.tasks}</p>
                <p>
                  {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <button
                className="edit-btn"
                onClick={() => this.handleEdit(exp.id)}
              >
                Edit
              </button>
              <button
                className="edit-btn"
                onClick={() => this.handleRemove(exp.id)}
              >
                Delete
              </button>
            </div>
          );
        })}

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
              Add Experience
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
