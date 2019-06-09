import React, { Component } from 'react';

export class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
  }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <h2>{title}</h2>
        <h2>{body}</h2>
      </div>
    );
  }
}

export default Test;
