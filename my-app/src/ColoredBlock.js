import { Component } from "react";
import ChangeColorButton from './ChangeColorButton';
import React from 'react';

class ColoredBlock extends Component{
    constructor(props){
        super(props);
        this.changeColor=this.changeColor.bind(this);
        this.state={
            backgroundColor:"red"
        };
    }
    changeColor(){
        this.setState((prevState)=>{
            let newColor=prevState.backgroundColor=="red"? "blue" : "red";
            return{
                backgroundColor: newColor
            }
        })
    }
    render(){
        return(
            <div style={{width:"200px", height:"200px",backgroundColor:this.state.backgroundColor}}>
                <ChangeColorButton onClick={this.changeColor}/>

            </div>
        )
    }
}
export default ColoredBlock;