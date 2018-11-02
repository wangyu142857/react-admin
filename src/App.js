import React, {Component} from 'react'
import './App.css'

/*
* 组件名称必须以大写字母开头。
* 例如，<div /> 表示一个DOM标签，但 <Welcome /> 表示一个组件，并且在使用该组件时你必须定义或引入它。
* */
class App extends Component {
  constructor(props) {
    super(props)

    /**
     * 你必须谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的。
     * 如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined
     */
    // this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    console.log(this)

  }
  componentWillUnmount() {

  }
  handleClick = (val) => {
    console.log(this)
    console.log(val)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this,'click')}>按钮</button>
      </div>
    )
  }
}

export default App
