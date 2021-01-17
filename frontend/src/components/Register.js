import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: " ",
            role: " "
        }
    }
    register = () => {
        const registrationRequest = axios.post("http://localhost:4000/register", {
            "name": this.state.name,
            "role": this.state.role
        }).then((err) => {
            if (err) {
                return (
                    <div>
                        SOMETHING WENT WRONG
                    </div>
                )
            }
            return (
                <Redirect to="/home" />
            )
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.register()
    }
    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value
        })

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="role"
                        value={this.state.role}
                        onChange={this.handleChange}
                    />
                    <input
                        type="submit"
                        value="submit"
                    />
                </form>
            </div>
        )
    }
}
export default Register