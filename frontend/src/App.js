// import React,{ Component } from "react";

/*class on karva...*/
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React , { Component } from 'react'
// import Greet from './Components/greet.js'
// class App extends Component{
//     constructor(props){
//         super(props)
//         this.func=this.func.bind(this)
//     }
//     func(name){
//         alert(`Hello ${name} click button to change the content of Button `);
//     }
//     render() {
//         return (
//             // <div>
//             //     <h1>Hello world</h1>
//             //     <h1>I am Dishant</h1>
//             //     <Greet name="dishant" rollno="1231">
//             //         <h1>I am</h1>
//             //     </Greet>
//             // </div>
//             // <Greet callAlert={this.func}/>
//             <Greet />
//         )
//     }
// }
// export default App;

/*Css implementation*/
// import './stylesheet.css'
// import Greet from './Components/greet.js'
// import Inline from './inlineCss.js'
// class App extends Component{
//     render(){
//         return <div>
//             <h1 className="mainContent">Hello I am from App Component</h1>
//             <Inline />
//         </div>
//     }
// }
// export default  App;

/*form implementation*/
// import Form from './Components/form1.js'
// import Refs from './Components/refsImplementation.js'
// class App extends Component{
//     render(){
//         return <div>
//             {/* <Form /> */}
//             <Refs />
//         </div>

//     }
// } 
// export default App;
/*1 november 2019*/
import React,{Component} from 'react';
import { Route ,BrowserRouter } from 'react-router-dom';
import Title from './Components/title.js';
// import Table from './Components/tableDisplay';
// import AddBook from './Components/form'

export default class App extends Component{
    render()
    {
        return <div>
            <BrowserRouter>
                <Route exact path="/" component={Title} />
                {/* <Route exact path="/homepage" component={Table} />
                <Route exact path="/Add" component={AddBook} /> */}
            </BrowserRouter>
        </div>
    }
}   
/** Error Handling. */

// import React, { Component } from 'react'
// import Name from './Components/Name.js'
// import ErrorBoundary from './Components/ErrorBoundary.js'
// export class App extends Component {
//     render() {
//         return (
//             <div>
//                 <ErrorBoundary>
//                     <Name name="Geetanjli"/>
//                 </ErrorBoundary>
//                 <ErrorBoundary>
//                     <Name name="Devik"/>
//                 </ErrorBoundary>
//                 <ErrorBoundary>
//                     <Name name="Muskan"/>
//                 </ErrorBoundary>
                
//             </div>
//         )
//     }
// }

// export default App
/**Higher order Component */
// import React, { Component } from 'react'
// import ClickCounter from './Components/ClickCounter.js'
// import ClickHover from './Components/ClickHover.js'
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <ClickCounter />
//                 <ClickHover />
//             </div>
//         )
//     }
// }

// export default App
/**Context */
// import React,{Component} from 'react'
// import GreatGrandFather from './Components/GreatGrandFather.js'
// import {UserProvider} from './Components/ContextFile'
// class App extends Component {
//     render(){
//         return (<div>
//             <UserProvider  value = "check 10,00000 Rupees">
//                 <GreatGrandFather/>
//             </UserProvider>
//         </div>
//         )
//     }
// }
//  export default  App;
// import React, { Component } from 'react'

// class App extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default App


