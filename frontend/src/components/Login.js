import React, { Component } from 'react'
import axios from 'axios'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: " "
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        const loginRequest = axios.post(
            "http://localhost:4000/login",
            { "name": "marian" },
            { withCredentials: true }
        )
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    ></input>
                    <input
                        type="submit"
                        value="submit"
                    ></input>
                </form>

            </div>
        )
    }
}
export default Login