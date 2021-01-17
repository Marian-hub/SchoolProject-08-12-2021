import React, { Component } from 'react'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Home from './Home'
import Login from './auth/Login'
import Register from './auth/Register'
import Paths from './Paths'
const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Paths}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/register" component={Register}></Route>
        </BrowserRouter>
    )
}
export default App