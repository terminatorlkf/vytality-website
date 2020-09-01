import React,{Component} from 'react'
import NewsLetter from '../components/NewsLetter';

export default class Newsroom extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="newsroom" className="header">
          <div className="container">
            <h1>NEWSROOM</h1>
            <h2>
              #WearAMask and #BlackLivesMatter
            </h2>
            <h5>
              Learn about what we are doing to help with COVID-19 and racial inequality
            </h5><br/>
            <button className="button">
              <img src='images/white-down-arrow.png' alt="down" style={{float:'right',transform: 'rotate(-90deg)', width:'35px', height:'35px'}}/>
            </button>
          </div>
        </div>
        <div className="content">
          <h1>Latest Stories</h1>
          <div className="box-container">
            <div className="box">
              <h5>JULY 10, 2020</h5>
              <h1>Vytality Announces App Launch Date</h1>
              <p>
                The long anticipated release of the Vytality app finally has a launch date set. 
                The new app will ultimately bring people together and will be especially valuable during this pandemic.
              </p>
            </div>
            <div className="box" style={{padding:'0'}}>
              <img src='images/minda-interview.png' alt="minda" style={{width:'100%', marginBottom:'10px'}}/>
              <h5 style={{padding:'0 30px'}}>APRIL 03, 2019</h5>
              <h1 style={{padding:'0 30px'}}>Vytality CEO, Minda Aguhob, featured on…</h1>
            </div>
            <div className="box">
              <h5>JANUARY 05, 2019</h5>
              <h1>Bacon ipsum dolor amet cupim biltong</h1>
              <p>
                Bacon ipsum dolor amet cupim biltong shankle frankfurter brisket pork chop buffalo beef tongue. 
                Chislic alcatra sirloin corned beef picanha sausage.
              </p>
            </div>
          </div>
        </div>
        <div className="quote-container">
          <div className="quote-box">
            <p>“Our prime purpose in this life is to help others and if you can’t help them, at least don’t hurt them.”</p>
            - Dalai Lama
          </div>
        </div>
        <NewsLetter/>
      </React.Fragment>
    );
  }
}