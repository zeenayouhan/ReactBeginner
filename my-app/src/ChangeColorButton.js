import { Component } from "react";
import React from 'react';

class ChangeColorButton extends Component{
    constructor(props) {
        super(props);
        this.handleClick=this.handleClick.bind(this);
        
    }
    handleClick(){
        this.props.onClick();
    }
    


    render(){
        return(
            <button onClick={this.handleClick}>
                Change Me
            </button>

        )
    }
}
export default ChangeColorButton;