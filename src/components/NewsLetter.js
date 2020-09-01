import React, {Component} from 'react';

export default class NewsLetter extends Component{
    

    render(){
        return(
            <div className="container">
                <div className="newsletter">
                    <h1> Stay Connected </h1>
                    <p> Sign up for the latest news and updates from Vytality. </p>
                    <form action='/signup' method="POST">
                        <input className="input" type="email" id="email" name="email" placeholder="Email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/> 
                        <button className="button" type="submit" style={{marginLeft:"25px"}}>SIGN UP</button>
                    </form>
                </div>
            </div>
        );
    }
}