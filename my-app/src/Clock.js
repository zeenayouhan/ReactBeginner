import React, { Component } from 'react';
import { render } from '@testing-library/react';

let time = new Date().toLocaleString();
//function Clock(){
    //    return(
    //    <p>{time}</p>
     //   );
        
    //}
class Clock extends Component{
    constructor(props){
        super(props);
        this.state={
            time : new Date().toLocaleString()
        };
        this.updateClock=this.updateClock.bind(this);
    }
    componentDidMount(){
        this.intervalID= setInterval(
            this.updateClock,
            1000
        );
    }
    componentWillMount(){
        clearInterval(this.intervalID);
    }
    updateClock(){
        this.setState({
            time: new Date().toLocaleString()
        });
        
    }
    render(){
        return(
            <p>
                {this.state.time}
            </p>
        )
    }
}
export default Clock;