import React, {useState} from 'react';
import './App.css';
import './Header';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import './Rajasthan.png';
import Giftspage from './Giftspage';
//import './Login/login';
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
 import ReactPlayer from 'react-player';



//import Navbar from "./components/Navbar";
 


export function App() {


 


  return (
    <div className="App">
     
      <Router>
        
    <Header/>
    
    <Switch>
    <Route path="/search">
      
    <SearchPage/>
      </Route>
     
      <Switch>
      <Route exact path="/" component={Home}/>
      
  <Route exact path="/Giftspage" component={Giftspage}/>
   <Route component={Error}/>
    </Switch>
   
  
    
    {/* <Route path="/giftspage">
      <giftspage />
    </Route> */}

    </Switch>
    
    <Footer />
    </Router>
    
   

    </div>
  );
}

export default App;
