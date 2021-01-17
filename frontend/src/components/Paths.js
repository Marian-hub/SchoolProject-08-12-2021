import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class Paths extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavLink to="/home">HOME</NavLink>

                </div>
                <div>
                    <NavLink to="/register">REGISTER</NavLink>
                </div>
                <div>
                    <NavLink to="/login">LOGIN</NavLink>
                </div>
            </div>
        )
    }
}

export default Paths