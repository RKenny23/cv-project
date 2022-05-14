import React, { useState } from 'react';
import uniqid from 'uniqid';

export default function Experience(props) {
  const [experienceInfo, setExperienceInfo] = useState({
    id: uniqid(),
    company: '',
    title: '',
    tasks: '',
    startDate: '',
    endDate: '',
  });
  const [editMode, setEditMode] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !experienceInfo.company ||
      !experienceInfo.title ||
      !experienceInfo.tasks ||
      !experienceInfo.startDate ||
      !experienceInfo.endDate
    ) {
      alert('Please fill in all fields.');
      return;
    }
    setEditMode((prevState) => !prevState);
  }

  const { company, title, tasks, startDate, endDate } = experienceInfo;

  const { id, handleDelete } = props;

  return (
    <>
      {!editMode ? (
        <div className="preview-flex">
          <div className="school-info">
            <h2 id="school-name">{company}</h2>
            <p>{title}</p>
            <p>{tasks}</p>
            <p>
              <i>
                {startDate} - {endDate}
              </i>
            </p>
          </div>
          <div className="btn-group">
            <button
              className="edit-btn"
              onClick={() => handleDelete('experienceIds', id)}
            >
              Delete
            </button>
            <button className="edit-btn" onClick={handleSubmit}>
              Edit
            </button>
          </div>
        </div>
      ) : (
        <>
          <form id="edu-form">
            <label htmlFor="company">Company Name:</label>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={company}
              onChange={handleChange}
            />
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={title}
              onChange={handleChange}
            />
            <label htmlFor="tasks">Tasks:</label>
            <input
              type="text"
              name="tasks"
              placeholder="Tasks"
              value={tasks}
              onChange={handleChange}
            />
            <label htmlFor="startDate">Start Date</label>
            <input
              type="text"
              name="startDate"
              value={startDate}
              placeholder="Month &amp; Year"
              onChange={handleChange}
            />
            <label htmlFor="endDate">End Date</label>
            <input
              type="text"
              name="endDate"
              value={endDate}
              placeholder="Month &amp; Year"
              onChange={handleChange}
            />
          </form>
          <button
            className="save-btn"
            type="submit"
            form="edu-form"
            onClick={handleSubmit}
          >
            Save
          </button>
        </>
      )}
    </>
  );
}
