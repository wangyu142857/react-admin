import React, {Component} from 'react'
import './App.css'
import Calculator from './components/Calculator'
function UserGreeting() {
  return (<h1>Welcome Back</h1>)
}

function GuestGreeting() {
  return (<h1>Sign up first!</h1>)
}
function Greeting(props) {
  const isLogin = props.isLogin;
  if(isLogin) {
    return (<UserGreeting/>)
  }
  return <GuestGreeting/>
}
/*
* 组件名称必须以大写字母开头。
* 例如，<div /> 表示一个DOM标签，但 <Welcome /> 表示一个组件，并且在使用该组件时你必须定义或引入它。
* */
class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      isLogin: false,
      value: '',
      select: 'first'
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.handleChangeSelect = this.handleChangeSelect.bind(this)
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
    this.setState((prevState, props) => ({
      isLogin: !prevState.isLogin,
    }))
  }
  handleChange(e) {
    this.setState({
      value: e.target.value.toUpperCase()
    })
  }
  handleSubmit(e) {
    console.log(this.state.value)
    e.preventDefault()

  }
  handleChangeSelect(e) {
    console.log(this.state.select)
    this.setState({
      select: e.target.value
    })

  }
  render() {
    const nums = [1,2,3,4,5]
    const ListItems = nums.map(item =>(<li key={item}>{item}</li>))
    return (
      <div>
        <button onClick={this.handleClick.bind(this, '123456')}>按钮</button>
        <Greeting isLogin={this.state.isLogin}/>
        <hr/>
        <ul>{ListItems}</ul>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <label>Name: <input type="text" value={this.state.value} onChange={this.handleChange}/></label><br/>
          <select value={this.state.select} onChange={this.handleChangeSelect}>
            <option value="first">first</option>
            <option value="second">second</option>
            <option value="third">third</option>
            <option value="fourth">fourth</option>
          </select>
          <input type='submit' value='提交'/>
        </form>
        <p style={{color: '#f00'}}>{this.state.value}</p>

        <hr/>
        <Calculator/>
      </div>
    )
  }
}

export default App
