import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Careers  from './pages/Careers';
import Newsroom from './pages/Newsroom';
import Download from './pages/Download';
import Footer from './components/Footer';
import { NavigationBar } from './components/NavigationBar';
import data from "./data";

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <BrowserRouter>
          <NavigationBar/>
          <Switch>
            <Route exact path="/" render={() => <Home />}/>
            <Route exact path="/ourstory" render={() => <OurStory data={data} />}/>
            <Route exact path="/careers" render={() => <Careers data={data} />}/>
            <Route exact path="/newsroom" render={() => <Newsroom data={data} />}/>
            <Route exact path="/download" render={() => <Download data={data} />} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
export default App;
