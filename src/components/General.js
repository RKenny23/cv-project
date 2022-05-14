import React, { useState } from 'react';

export default function General() {
  const [generalInfo, setGeneralInfo] = useState({
    userName: 'Ryan Kenny',
    email: 'rkenny238@hotmai.com',
    phoneNum: '(203) 727-7052',
    country: 'Authorized to work in USA',
  });
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGeneralInfo((prevState) => {
      let newInfo = { ...prevState, [name]: value };
      return newInfo;
    });
  };

  function toggleEdit(e) {
    e.preventDefault();
    setEditMode((prevState) => !prevState);
  }

  function formatNum(e) {
    let nums = e.target.value.split('');
    nums.splice(0, 0, '(');
    nums.splice(4, 0, ') ');
    nums.splice(8, 0, '-');
    const newPhoneNum = nums.join('');
    setGeneralInfo({
      userName,
      email,
      phoneNum,
      country,
      phoneNum: newPhoneNum,
    });
  }

  const { userName, email, phoneNum, country } = generalInfo;

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
          {!editMode && (
            <button className="edit-btn" onClick={toggleEdit}>
              Edit
            </button>
          )}
        </div>
      </>

      {editMode && (
        <>
          <form id="general-form">
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              name="userName"
              placeholder="Name"
              value={userName}
              onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="phoneNum">Phone:</label>
            <input
              type="text"
              name="phoneNum"
              placeholder="Phone"
              value={phoneNum}
              onChange={handleChange}
              onBlur={formatNum}
            />
            <label htmlFor="country">Country:</label>
            <input
              type="country"
              name="country"
              placeholder="Country"
              value={country}
              onChange={handleChange}
            />
          </form>
          <button className="save-btn" form="general-form" onClick={toggleEdit}>
            Save
          </button>
        </>
      )}
    </>
  );
}
