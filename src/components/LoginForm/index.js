// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsgDisplay: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else if (password === '') {
      this.setState({errorMsgDisplay: '*Please enter password'})
    } else if (username === '') {
      this.setState({errorMsgDisplay: '*Please enter Username'})
    } else {
      this.setState({errorMsgDisplay: "*Username and Password didn't match"})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, errorMsgDisplay} = this.state

    return (
      <div className="login-page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login-img"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-login"
          />
          <div className="input-container">
            <label htmlFor="username" className="label-ele">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="input-ele"
              onChange={this.onChangeUsername}
              value={username}
              placeholder="Username"
            />
            <label htmlFor="passwd" className="label-ele">
              PASSWORD
            </label>
            <input
              type="password"
              id="passwd"
              className="input-ele"
              onChange={this.onChangePassword}
              value={password}
              placeholder="Password"
            />
            <button type="submit" className="submit-btn">
              Login
            </button>
            <p className="error-msg">{errorMsgDisplay}</p>
          </div>
        </form>
      </div>
    )
  }
}
export default LoginForm
