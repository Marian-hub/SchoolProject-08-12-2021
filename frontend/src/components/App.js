import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
const App = () => {
    return (
        <BrowserRouter >
            <Route path="/" component={Login}></Route>
            <Route path={"/home"} component={Home}></Route>
        </BrowserRouter>
    )
}
export default App