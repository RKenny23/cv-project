import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      seed: 0,
    };

    this.increment = () => this.setState({ counter: this.state.counter + 1 });
    this.decrement = () => this.setState({ counter: this.state.counter - 1 });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log('Component did mount');
    console.log('___________________');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.state.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log('Should component update');
      console.log('___________________');
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get snapshot before Update');
    return null;
  }

  render() {
    console.log('Render');
    return (
      <>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div>Counter: {this.state.counter}</div>
      </>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component did update');
    console.log('___________________');
  }

  componentWillUnmount() {
    console.log('Component did unmount');
    console.log('___________________');
  }

  componentDidCatch(error, info) {
    console.log('COmponent did catch');
  }
}

export default Counter;
