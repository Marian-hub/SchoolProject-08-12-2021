import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: " ",
            redirect: false
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
            { "name": this.state.name },
            { withCredentials: true }
        ).then(() => {
            this.setState({
                redirect: true
            })
        })
    }
    render() {
        const { redirect } = this.state
        if (redirect) {
            return (
                <Redirect to="/home"/>
            )
        } else {
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
}
export default Login