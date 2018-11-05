import React from 'react'

const typeList = {
  c: '摄氏',
  f: '华氏'
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
  const input = parseFloat(value)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const round = Math.round(output * 1000) / 1000
  return round.toString()
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    // this.setState({value: e.target.value})
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const type = this.props.type
    const value = this.props.value
    return (
      <fieldset>
        <legend>输入{typeList[type]}温度</legend>
        <input type="text"
               value={value}
               onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'c',
      value: '0'
    }
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(value) {
    this.setState({
      type: 'c',
      value
    })
  }

  handleFahrenheitChange(value) {
    this.setState({
      type: 'f',
      value
    })
  }

  render() {
    const type = this.state.type
    const value = this.state.value
    const cVal = type === 'f' ? tryConvert(value, toCelsius) : value
    const fVal = type === 'c' ? tryConvert(value, toFahrenheit) : value
    return (
      <div>
        <TemperatureInput type='c' value={cVal} onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput type='f' value={fVal} onTemperatureChange={this.handleFahrenheitChange}/>
      </div>
    )
  }
}

export default Calculator