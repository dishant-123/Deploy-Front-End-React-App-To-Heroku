import React, { Component } from 'react'
// import Title from './title.js'
// import {Redirect} from 'react-router-dom';
import axios from 'axios'
 class NavigationBar extends Component {
     constructor(props) {
         super(props)
         this.state = {
             loggin : false,
             email : '',
             password:''
         }
         this.handleClick = this.handleClick.bind(this);
         this.stateChanger = this.stateChanger.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }
     handleSubmit =async (event) =>{
            event.preventDefault();
            const user = {
                email : this.state.email,
                password : this.state.password
            }
            const response = await axios.post('http://localhost:3007/add',user);
            // console.log(response);
            if(response.data.message==='done')
            {
                this.setState({
                    loggin : !this.state.loggin,
                    email :'',
                    password : ''
                })
            }
            else{
                alert('Email and Password not match')
            }
     }
     stateChanger = (event) =>{
         this.setState({
            [event.target.name] : event.target.value
         })
     
     }
     handleClick =()=>{
         this.setState({
             loggin : !this.state.loggin
         })
     }
    render() {
        console.log(this.state.loggin)
        return (
            <div>
                {
                this.state.loggin ?
                (
                    // <Redirect to = {{
                    //     pathname : '/',
                    //     props : this.state.loggin
                    // }}/>
                    <React.Fragment >
                        <p>this is navigation bar for LoGout</p>
                        <form onSubmit = {this.handleSubmit} method = "POST">
                            <p>Enter your email</p>
                            <input type = "text" name = "email" value  = {this.state.email} onChange  = {this.stateChanger} required/><br></br>
                            <p>Enter password</p>
                            <input type = "text" name = "password" value  = {this.state.password} onChange  = {this.stateChanger} required/><br></br><br></br>
                            <button >Login</button>
                        </form>
                    </React.Fragment>
                )
                :
                (
                    <React.Fragment >
                        <p>this is navigation bar for loggin</p>
                        <button onClick = {this.handleClick}>Logout</button>
                    </React.Fragment>
                )
                }
            </div>
        )
    }
}

export default NavigationBar