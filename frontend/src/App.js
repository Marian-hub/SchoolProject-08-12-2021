import React, { Component } from 'react'
import axios from 'axios'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ticketData: ' '
        }
    }
    async componentDidMount() {
        await this.getAllTicketData()
        console.log(this.state.ticketData)
    }
    getAllTicketData = async () => {
        const ticketData = await axios.get("http://localhost:4000/getAllTickets").then(response => {
            this.setState({
                ticketData: response
            })
        })
    }
 
    
    render() {
        return (
            <div>  
                
            </div>
        )
    }
}
export default App