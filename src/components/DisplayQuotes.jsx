import React, { Component } from "react";
import axios from 'axios';

class DisplayQuotes extends Component {
    state = {
        quote: ""
        }
    async getQuotes() {
        let response = await axios.put(
            'http://localhost:3000/api/random'
        )
        this.setState({quote: response})
        
        } 

    render() {

    return(
        <>
{this.state.quote}
</>
        
    )
  }
}

export default DisplayQuotes