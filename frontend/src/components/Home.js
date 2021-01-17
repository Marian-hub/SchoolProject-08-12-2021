import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketData: [],
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
                ticketData: response.data,
                loggedIn: true
            })
            // console.log(response)
        }).catch(err => {
            if (err) { return err }
        })
    }

    renderTicketData = () => {
        const { ticketData } = this.state
        console.log(ticketData)
        ticketData.data.map(ticket => (
            <div>
                ticket.title
            </div>
        ))
        return ticketData.data[0].title
    }

    render() {
        const { ticketData, loggedIn } = this.state
        if (loggedIn) {
            return (
                <div>
                    {this.state.ticketData.map((ticket, index) => (
                        <div>
                            <p>TITLE: {ticket.title}</p>
                        </div>
                    ))}
                </div>
            )
        } else {
            return (
                <div>
                    LOG IN PLEASE
                </div>
            )
        }
    }
}
export default Home