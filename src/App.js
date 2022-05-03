import React, { Component } from 'react';
import General from './General';
import Education from './Education.js';
import Experience from './Experience';

export default class App extends Component {
  render() {
    return (
      <>
        <h1>CV Maker with React</h1>
        <hr></hr>
        <div className="preview-page">
          <General />
          <Education />
          <Experience />
        </div>
      </>
    );
  }
}
