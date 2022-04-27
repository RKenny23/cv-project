import React, { Component } from 'react';
import General from './General';
import Education from './Education.js';
import Preview from './Preview';

export default class App extends Component {
  render() {
    return (
      <>
        <General />
        <Preview />
      </>
    );
  }
}

// class  extends Component {
//   constructor(props) {
//     super(props);
//   }
//   state = {  }
//   render() {
//     return (  );
//   }
// }

// export default ;
