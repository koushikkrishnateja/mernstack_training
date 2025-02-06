import React, { Component} from 'react'
    
class CBCStateEx extends Component{
    constructor(){
        super();
        this.state={
            university:"MRU"
        };

    }
    changeName=()=>{
        this.setState({univerity : "Mallareddy university"});
    }
    render(){
        console.log(this.state);
        return(
            <div>CBCState
                <h1>{this.state.univerity}</h1>
                <button onClick={this.changeName}>Change name</button>
            </div>
            
               )
    }
}
export default CBCStateEx;