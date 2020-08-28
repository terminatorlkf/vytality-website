import React, {Component} from 'react';
import NewsLetter from '../components/NewsLetter';

export default class Home extends Component{
  render(){
    return(
      <div>
        <section id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  Care for everyone, everywhere
                </h1>
                <h5>
                  Supporting and caring for each other can bring happiness, health and healing. 
                  Vytality gives you the tools and resources to care for yourself and care for others - 
                  <a className="smoothscroll" href="#co-caring">co-caring</a>.
                </h5>
                <a href="/download">
                  <button className="download-btn">
                    DOWNLOAD
                  </button>
                </a>
                <a href="/ourstory">
                  <button className="learnmore-btn">
                    LEARN MORE
                  </button>
                </a>
              </div>
              <div className="col-md-6">
                <div className="message1">
                  <img src='/images/aw-creative-xpnRRH6z2NA-unsplash.png' style={{float:'left', marginRight:'20px'}} alt="logo"/>
                  <p>Anyone around the city that can drop off food to a shelter in Park Slope this week?</p>
                </div>
                <div className="message2">
                  <img src='images/petr-sevcovic-auCjz0gucr0-unsplash.png' style={{float:'right', marginLeft:'20px'}} alt="logo"/>
                  <p>Yes I can help! I’ll send you a direct message so we can connect.</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <img src='images/white-down-arrow.png' alt="down"/>
            </a>
          </p>
        </section>



        <section id="about">
          <div className="container">
            <h1>
              Your social network for support    
            </h1>
            <div className="row">
              <div className="text-column">
                <h3>Share your life</h3>
                <p>Let people know what you are doing and how you are doing. Post your thoughts, ideas and inspiration.</p>
              </div>
              <div className="column">
                <img className="screenshot" src='images/ss1.png' alt="logo" style={{marginTop: '100px'}}/>
                <img className="screenshot" src='images/ss2.png' alt="logo" />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <img className="screenshot" src='images/ss3.png' alt="logo" />
                <img className="screenshot" src='images/ss4.png' alt="logo" style={{marginTop: '100px'}}/>
              </div>
              <div className="text-column">
                <h3> Find ways to help others </h3>
                <p> Support others through volunteering opportunities. Find companies and organizations that you can help. </p>
              </div>
            </div>
            <div className="row">
            <div className="text-column">
                <h3>Support each other</h3>
                <p>Let people know you care, give them some inspiration or kudos to keep going on their journey of health and wellness.</p>
              </div>
              <div className="column">
                <img className="screenshot" src='images/ss1.png' alt="logo" style={{marginTop: '100px'}}/>
                <img className="screenshot" src='images/ss5.png' alt="logo" />
              </div>
            </div>
            <div className="row">
              <div className="column">
                <img className="screenshot" src='images/ss6.png' alt="logo" />
                <img className="screenshot" src='images/ss7.png' alt="logo" style={{marginTop: '100px'}}/>
              </div>
              <div className="text-column">
                <h3> Ask for help </h3>
                <p> Everyone needs help from time to time. Find mutual connections or people in your local community that can help out. </p>
              </div>
            </div>
          </div>
        </section>


        <section id="co-caring">
          <div className="text-container">
            <h1>
              What is Co-Caring?
            </h1>
            <img src='images/noun_relationship_1565410.png' alt="logo"/>
            <p>
              Supporting and caring for one another, connecting with others to provide help and resources, 
              sharing inspiration and positivity - that is what co-caring means.
            </p>
          </div>
        </section>

          
        <div id="features">
          <div className="row">
            <div className="column">
              <img src='images/inc.png' alt="logo" style={{width: '150px', height:'50px', margin:'22px 0'}}/>
              <p>“…a product with deep social impact…”</p>
            </div>
            <div className="column">
              <img src='images/time.png' alt="logo" style={{padding:'22px 0'}}/>
              <p>“…features help them stay connected…”</p>
            </div>
            <div className="column">
              <img src='images/silicon-valley.png' alt="logo" />
              <p>Minda Aguhob, Vytality CEO, featured in Silicon Valley Business Journal</p>
            </div>
            <div className="column">
              <img src='images/startups.png' alt="logo" />
              <p>“Wow…listening to and helping people…it’s going to spread virally.”</p>
            </div>
          </div>
        </div>
        <NewsLetter>
          
        </NewsLetter>s
      </div>
    );
  }
}