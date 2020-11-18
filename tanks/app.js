import React, { Component } from "react";
import Tank from "./tank";


class App extends Component {

 render(){
    

     return(
        <div>
            <h1>tansks</h1>
            <Tank />
        </div>
     )
 }
}

// // ReactDOM.render(<App /> , document.getElementById("root"))
export default App