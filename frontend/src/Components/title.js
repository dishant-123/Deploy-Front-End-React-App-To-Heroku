/*class on karva...*/

// class Title{
//     render(){
//         return<h1>this.props.description</h1>
//     }
// }
// export default Title;
/**1 november 2019 */

// import React,{Component} from 'react';
// import {Link} from "react-router-dom";
// export default class Title extends Component
// {
//     render()
//     {
//         return <div><p>Welcome To Library of Chitkara University</p>
//         <Link to="homepage" >GO TO HOMEPAGE</Link></div>
//     }
// }
import React, { Component } from 'react'
import NavigationBar from './NavigationBar.js'
import './title.css'
// import Logout from './LogoutPage'
 class title extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              content : []
         }

     }
     componentDidMount()
     {
         fetch('https://newsapi.org/v2/everything?domains=techcrunch.com&pageSize=10&language=en&q=startUps&apiKey=58a84899e43340acaaf064b2f5db6394').then((response) =>{
             response.json().then((data) =>{
                 console.log( typeof data.articles);
                 let Data = data.articles.map((info,index) =>{
                     return (
                         <div className = "otherDiv" key ={index}>
                             <hr />
                            <h2>{index}  .</h2>
                             <font>author = <h6>{info.author}</h6></font>
                             <font>title = <h6>{info.title}</h6></font>
                             <font>description = <h6>{info.description}</h6></font>
                             <font>publishedAt = <h6>{info.publishedAt}</h6></font>
                             <font>Content = <h6>{info.content}</h6></font>
                             <img height = "200" width = "200" alt = "shows" src = {info.urlToImage}/>
                             <hr />
                            
                         </div>
                     )
                 })
                 this.setState({
                     content : Data
                 })
             })
         })
     }
    render() {
        // console.log(this.props.location.props)
        // console.log(this.props.location.props1)
        return (
            <div>
                <h4>This is Main Page</h4>
                <NavigationBar/>
                 {/* {
                     this.props.location.props?
                     (
                            <h6>logged in</h6>
                     ):
                     (
                            <h6>logout</h6>
                     )
                 } */}
                 {/* <Logout />
                 {
                     this.props.location.props1?
                     (
                            <h5>logout</h5>
                     ):
                     (
                            <h5>loggin</h5>
                     )
                 } */}
                <h3>This is Content Coming from API(Application Programming Interface.)</h3>
                {
                this.state.content.length !==0 ? (
                    this.state.content
                ):
                (
                    <h5>Loading..</h5>
                )
                 }
            </div>
        )
    }
}

export default title
