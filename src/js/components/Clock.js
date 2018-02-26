import React, { Component } from 'react'
class Clock extends Component {
  state = {
    date: new Date()
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  render() {
    const { date } = this.state
    
    return (
      <div>{ date.toLocaleDateString() } { date.toLocaleTimeString() }</div>
    )
  }
} 
export default Clock