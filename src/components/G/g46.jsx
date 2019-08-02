import React from "react"

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      button: true,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      button: !this.state.button,
    })
  }
  render() {
    return (
      <button
        className={this.state.button ? "buttonTrue" : "buttonFalse"}
        onClick={this.handleClick}
      >
        46
      </button>
    )
  }
}

export default Button
