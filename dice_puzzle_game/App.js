import React, { Component } from "react";
import Playground from "./playground";

class App extends Component{

    render(){
        return(
            <div>
                <h3>dice puzzle</h3>
                <Playground />
            </div>
        )
    }
}

export default App