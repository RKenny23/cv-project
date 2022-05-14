import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/style.css';

export default function App() {
  const [educationIds, setEducationIds] = useState([
    // {
    //   id: uniqid(),
    //   school: 'Great University',
    //   location: 'Anytown, USA',
    //   degree: "Bachelor's",
    //   major: 'Computer Science',
    //   startDate: 'Sept 2006',
    //   endDate: 'June 2010',
    // },
  ]);
  const [experienceIds, setExperienceIds] = useState([]);

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('educationList'));
  //   if (data) {
  //     setEducationIds(data);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('educationList', JSON.stringify(educationIds));
  // }, [educationIds]);

  console.log(educationIds);

  const handleAdd = (type) => {
    if (type === 'experienceIds') {
      setExperienceIds((prevState) => [...prevState, uniqid()]);
    } else {
      setEducationIds((prevState) => [...prevState, uniqid()]);
    }
  };

  const handleDelete = (type, id) => {
    if (type === 'experienceIds') {
      setExperienceIds((prevState) => {
        let newList = prevState.filter((key) => key !== id);
        return newList;
      });
    } else {
      setEducationIds((prevState) => {
        let newList = prevState.filter((key) => key !== id);
        return newList;
      });
    }
  };

  const eduComponents = educationIds.map((id) => (
    <Education
      key={id}
      id={id}
      handleDelete={handleDelete}
      handleAdd={handleAdd}
      edus={educationIds}
      setEdus={setEducationIds}
    />
  ));
  const expComponents = experienceIds.map((id) => (
    <Experience key={id} id={id} handleDelete={handleDelete} />
  ));

  return (
    <>
      <h1 className="main-title">CV Maker with React</h1>
      <hr></hr>
      <div className="preview-page">
        <General />
        <div className="new-section">
          <div className="title-flex">
            <h1 className="section-title">Education:</h1>
            <button
              className="add-btn"
              type="button"
              onClick={() => handleAdd('educationIds')}
            >
              +
            </button>
          </div>
          {eduComponents}
        </div>
        <div className="new-section">
          <div className="title-flex">
            <h1 className="section-title">Experience:</h1>
            <button
              className="add-btn"
              type="button"
              onClick={() => handleAdd('experienceIds')}
            >
              +
            </button>
          </div>
          {expComponents}
        </div>
      </div>
    </>
  );
}
