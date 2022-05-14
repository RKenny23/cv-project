import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

export default function Education(props) {
  const [educationInfo, setEducationInfo] = useState({
    id: uniqid(),
    school: '',
    location: '',
    degree: '',
    major: '',
    startDate: '',
    endDate: '',
  });
  const [editMode, setEditMode] = useState(true);

  const { id, handleDelete, edus, setEdus } = props;

  // const [value, setValue] = React.useState(() => {
  //   const stickyValue = window.localStorage.getItem(key);
  //   return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  // });

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('educationList'));
  //   if (data) {
  //     setEdus(data);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('educationList', JSON.stringify(edus));
  }, [educationInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !educationInfo.school ||
      !educationInfo.location ||
      !educationInfo.degree ||
      !educationInfo.major ||
      !educationInfo.startDate ||
      !educationInfo.endDate
    ) {
      alert('Please fill in all fields.');
      return;
    }
    setEditMode((prevState) => !prevState);
  }

  const { school, location, degree, major, startDate, endDate } = educationInfo;

  return (
    <>
      {!editMode ? (
        <div className="preview-flex">
          <div className="school-info">
            <h2 id="school-name">{school}</h2>
            <p>{location}</p>
            <p>
              {degree} in {major}
            </p>
            <p>
              <i>
                {startDate} - {endDate}
              </i>
            </p>
          </div>
          <div className="btn-group">
            <button
              className="edit-btn"
              onClick={() => handleDelete('educationIds', id)}
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
            <label htmlFor="school">School Name:</label>
            <input
              type="text"
              name="school"
              placeholder="School Name"
              value={school}
              onChange={handleChange}
            />
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={location}
              onChange={handleChange}
            />
            <label htmlFor="degree">Degree:</label>
            <select name="degree" onChange={handleChange}>
              <option disabled selected value>
                -- select an option --
              </option>
              <option value="Bachelor's">Bachelor's</option>
              <option value="B.S.">B.S.</option>
              <option value="Master's">Master's</option>
              <option value="Doctorate">Doctorate</option>
            </select>
            <label htmlFor="major">Major:</label>
            <input
              type="text"
              name="major"
              placeholder="Major"
              value={major}
              onChange={handleChange}
            />
            <label htmlFor="startDate">Start Date:</label>
            <input
              type="text"
              name="startDate"
              value={startDate}
              placeholder="Month &amp; Year"
              onChange={handleChange}
            />
            <label htmlFor="endDate">End Date:</label>
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
