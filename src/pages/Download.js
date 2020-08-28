import React,{Component} from 'react';

export default class Download extends Component{
  render(){
    return(
      <div id="download" className="download-header">
        <div className="download-container">
          Discover what a difference you can make
          <div className="col-md-6 m-auto" style={{textAlign:'center'}}>
            <img src="images/google-play.png" alt="logo"/>
            <img src="images/app-store.png" alt="logo"/>
          </div>
        </div>
      </div>
    );
  }
}