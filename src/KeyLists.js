import React from 'react'

export default class KeyLists extends React.Component {
  constructor(props) {
    super(props)
    this.numbers = this.props.numbers;
  }
  render() {
    const listItems = this.numbers.map((number) =>
      <li key={number.toString()}> 
           {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}
