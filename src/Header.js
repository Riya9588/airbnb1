import React ,{useState} from 'react';
import {Component} from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
 import LanguageIcon from "@material-ui/icons/Language";
 import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
 import {Avatar} from "@material-ui/core";
 import { Link } from "react-router-dom";
 import { IconButton } from '@material-ui/core';
import {FaAlignRight} from 'react-icons/fa';
import Getstarted from './Getstarted';

export default class Header extends Component{
  state={
    isOpen:false
  }
  handleToggle=()=>{
    this.setState({isOpen:!this.state.isOpen})
  }
  render(){
    return(
  
      <div className='header'>
          <Link to='/search'>
          <img className="header_icon"
src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=""/>
</Link>
<div className='header_center'>
<input type="text" placeholder="search your destination"/>
<SearchIcon/>
</div>



<div className="nav-center">
  <div className="nav-header">
    <button
    type="button"
    className="nav-btn"
    onClick={this.handleToggle}>
      <FaAlignRight className="nav-icons"/>
    </button>
  </div>
  
</div>



<div className='header_right'>
 <p>Become a host</p>
  <LanguageIcon/>
  
  <ExpandMoreIcon/>

  
  <Avatar >
  
  </Avatar>
    </div>
  
  </div>
  )
}
}





        
    

//export default Header