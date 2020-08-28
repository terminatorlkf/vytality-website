import React, {Component} from 'react';

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <img src='images/Vytality.png' alt="logo" style={{height:'50px', width:'70px'}}/>
                <p>info@vytality.co | vytality.co</p>
                <p>Privacy Policy | Terms of Service</p>
                <p>© 2020 by Peakfoqus LLC</p>
            </div>
        );
    }
}