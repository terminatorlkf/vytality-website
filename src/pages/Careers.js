import React, {Component} from 'react'

export default class Careers extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="careers" className="header">
          <div className="container">
            <h1>CAREERS</h1>
            <h2>
              Join our team
            </h2>
            <h5>
              Make a difference in someone’s life. Together we can bring people together to make a change.
            </h5>
          </div>
        </div>
        <div className="content">
          <h1>Open Positions</h1>
          <div className="role-container">
            <h2>Design</h2><br/>
              <button className="button" style={{float:'right'}}>APPLY</button>
              <h3>Illustrator/Graphics Designer</h3>
              <h4>United States, Remote</h4><br/>
              <button className="button" style={{float:'right'}}>APPLY</button>
              <h3>UX Writer</h3>
              <h4>United States, Remote</h4><br/><br/>
            <h2>Engineering</h2><br/>
              <button className="button" style={{float:'right'}}>APPLY</button>
              <h3>Front End Developer</h3>
              <h4>United States, Remote</h4>
          </div>
        </div>
      </React.Fragment>
    );
  }
}