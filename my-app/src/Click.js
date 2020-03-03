import { Component } from "react";
import React from 'react';

class Click extends Component{
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            foo: "Click Me"
        }
    }
    handleClick(){
        this.setState({
            foo : "Hi"
        });
    }
    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.foo}

            </button>

        );
    }
}
export default Click;