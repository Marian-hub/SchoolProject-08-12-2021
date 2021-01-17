import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketData: ' ',
            loggedIn: false
        }
    }
    async componentDidMount() {
        await this.getAllTicketData()
    }

    getAllTicketData = async () => {
        const token = 'Bearer ' + Cookies.get('token')
        const ticketData = await axios.get("http://localhost:4000/getAllTickets", {
            headers: {
                authorization: token
            }
        }).then(response => {
            this.setState({
                ticketData: response,
                loggedIn:true
            })
            console.log(response)
        }).catch(err => {
            if(err){return err}
        })
    }

    renderTicketData =  () => {
    }

    render() {
        const {ticketData,loggedIn} = this.state
        if (loggedIn){
            return(
                <div>
                    YOU ARE LOGGED IN
                </div>
            )
        }else{
            return(
                <div>
                    LOG IN PLEASE
                </div>
            )
        }
    }
}
export default Home