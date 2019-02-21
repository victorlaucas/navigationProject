import React from 'react';

export default class Counter extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
    // this.handleAdd = this.handleAdd.bind(this)
    // this.handleSub = this.handleSub.bind(this)
    this.handleCount = this.handleCount.bind(this)
  }
  handleCount(num) {
    this.setState({
      count: this.state.count + num
    })
  }
  // handleAdd() {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  // handleSub() {
  //   this.setState({
  //     count: this.state.count - 1
  //   })
  // }
  render() {
    return (
      <div>
        <h3>Counter</h3>

        <div>
          The value of count is {this.state.count}
        </div>

        <button onClick={() => this.handleCount(1)}>Add</button>
        <button onClick={() => this.handleCount(-1)}>Subtract</button>
      </div>
    )
  }
}