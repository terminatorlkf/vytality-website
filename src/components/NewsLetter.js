import React, {Component} from 'react';

export default class NewsLetter extends Component{
    state={
        email: '',
        sent: false
    }
    handleEmail=(event)=>{
        this.setState({
            email: event.target.value
        })
    }
    formSubmit=(event)=>{
        event.preventDefault();

    }

    resetForm=()=>{
        this.setState({
            email:'',
        })
        setTimeout(()=>{
            this.setState({
                sent: false
            })
        }, 3000)
    }

    render(){
        return(
            <div className="container">
                <div className="newsletter">
                    <h1> Stay Connected </h1>
                    <p> Sign up for the latest news and updates from Vytality. </p>
                    <form action='/subscribe' method="POST">
                        <input type="submit" id="email" name="email" placeholder="Email address" value={this.state.email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={this.handleEmail}/> 
                        <button className="button" type="submit" style={{marginLeft:"25px"}}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}