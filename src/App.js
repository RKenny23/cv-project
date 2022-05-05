import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import './styles/style.css';

export default class App extends Component {
  render() {
    return (
      <>
        <h1 className="main-title">CV Maker with React</h1>
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
