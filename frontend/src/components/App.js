import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
const App = () => {
    return (
        <BrowserRouter >
            <Route path="/login" component={Login}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/register" component={Register}></Route>
        </BrowserRouter>
    )
}
export default App