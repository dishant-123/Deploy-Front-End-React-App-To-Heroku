import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
 class LogoutPage extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              logout : false
         }
         this.handleClick = this.handleClick.bind(this);
     }
     handleClick =()=>{
        this.setState({
            logout : true
        })
    }
    render() {
        if(this.state.logout)
        {
            return <Redirect to = {{
                pathname : '/',
                props1 : this.state.logout
            }}/>
        }
        return (
            <div>
                <p>this is navigation bar for logout</p>
                <button onClick = {this.handleClick}>logout</button>
            </div>
        )
    }
}

export default LogoutPage
