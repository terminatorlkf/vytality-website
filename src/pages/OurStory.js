import React, {Component} from 'react';
import NewsLetter from '../components/NewsLetter';

export default class OurStory extends Component{
  render(){
    return(
      <React.Fragment>
        <div id="ourstory" className="header">
          <div className="container">
            <h1>OUR STORY</h1>
            <h2>
              Bringing people
              together for
              positive change
            </h2>
            <h5>
              At Vytality, we believe helping to care and
              support each other will make a difference in
              so many lives.
            </h5>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <h1>
              Our Mission
            </h1>
            <p>
              Vytality is dedicated to bringing people together to connect and be cared for, regardless of age,
              gender, race, religion, ability or resources.
            </p>
          </div>
        </div>
        <div className="story">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  The Story of Vytality
                </h1>
                <p>
                  Do you ever wonder who will really be there for you in your time of need? In xxxx, CEO & Co-founder of Vytality, 
                  Minda Aguhob had to wonder with panic stricken anxiety who would be there for her. She suffered a traumatic 
                  brain injury after flying over the handlebars of her bike while training for a triathlon. <br/> <br/>
                  During her recovery, Minda had to rely on others to do even the simplest tasks. Through her healing Vytality was 
                  born, with the idea that everyone, everywhere should be cared for.
                </p>
              </div>
              <div className="col-md-6" style={{paddingTop:'50px', textAlign:'center'}}>
                <img src='images/1_Bjft7wTFbejTHAn-PNHfPw.png' alt="minda" style={{borderRadius: '15px 0 0 15px'}}/>
                <img src='images/1_CFitB6VP0wl9Mnfh0yhdNw@2x.jpeg' alt="minda" style={{borderRadius: '0 15px 15px 0'}}/>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <h1>
              Our Founders
            </h1>
            <p>
              Meet the team that started it all. Their passion for health and co-caring brought them together.
            </p>
          </div>
        </div>
        <div className="founder-container">
          <div className="row">
            <div className="col-md-4">
              <div className="founder-content">
                <div className="titlebox">
                  <img src='images/Minda.jpeg' alt="headshot" />
                  <h1>Minda Aguhob</h1>
                  <h2>CEO & Co-Founder</h2>
                </div>
                <p>
                  Trained as a data scientist in education and healthcare, 
                  Minda discovered her passion for connecting community and data-driven results while competing in triathalons. 
                  Helping victims after Hurricane Sandy as well as experiencing her own fight with a traumatic brain injury 
                  cemented her determination to provide a powerful solution for support and caring. 
                  She believes in the power of “humanizing” technologies as one of the most powerful ways to transform lives.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="founder-content">
                <div className="titlebox">
                  <img src='images/Scott.jpeg' alt="headshot" />
                  <h1>Scott Forgey</h1>
                  <h2>COO & Co-Founder</h2>
                </div>
                <p>
                  Scott is a highly sought coach and serial entrepreneur who masterfully builds environments and cultures 
                  that empower people, having led PayPal’s Agile transformation and taken a company public. 
                  Developing people’s capacities at the intersection of individual/team performance and mindfulness, 
                  Scott is known for generating new levels of personal success and business performance for companies from major corporations to startups.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="founder-content">
                <div className="titlebox">
                  <img src='images/Christine.jpeg' alt="headshot" />
                  <h1>Christine Tran</h1>
                  <h2>CPD & Co-Founder</h2>
                </div>
                <p>
                  Chris is a doctoral candidate trained in health economics and data science, 
                  with a passion for leading the cultural transformation of digital health by empowering patients 
                  as consumers of healthcare and unleashing creative capabilities in organizational change. 
                  Champion for closing the gender gap in technology and #womenintech.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="quote-container">
          <div className="quote-box">
            <p>
              “…a compassionate or constructive act - has the potential to help many.”
            </p>
            - Dalai Lama
          </div>
        </div>
        <NewsLetter/>
      </React.Fragment>
    );
  }
}
