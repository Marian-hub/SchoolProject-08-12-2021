import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketData: ' '
        }
    }
    async componentDidMount() {
        await this.getAllTicketData()
    }

    getAllTicketData = async () => {
        const token = 'Beare ' + Cookies.get('token')
        const ticketData = await axios.get("http://localhost:4000/getAllTickets", {
            headers: {
                authorization: token
            }
        }).then(response => {
            this.setState({
                ticketData: response,
            })
            console.log(response)
        })
    }

    renderTicketData = async () => {

    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
export default Home