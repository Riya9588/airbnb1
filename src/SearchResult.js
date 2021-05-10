import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

    

function SearchResult({
    
    img,
    location,
    title,
    description,
    star,
    // img2,
    link,
    price,
    // Availability1,
    // Availability2,
    // Availability3,
    // Availability4,
    // Availability5,
    // Availability6,
    // Availability7,
    // Availability8,
    
    
   
}){
    return(
        
        <div className='searchResult'>
            
            <img src={img} alt=""/>
            <FavoriteBorderIcon 
            className="searchResult_heart"/>
            <div className='searchResult_info'>
                <div className='searchResult_infoTop'>
                    
                    <h2>{title}</h2>
                    <h3>{location}</h3>
                    <p>{description}</p>
                    
                </div>
                <div className='searchResult_infoBottom'>
                    <div className="searchResult_stars">
                <StarIcon className='searchResult_star'/>
                <p>
                    <strong>{star}</strong>
                </p>
                    </div>
                    <div className='searchResults_price'>
                        
                   
                     {/* <img src={img2} alt=""/> */}
                        <h2>{price}</h2>
                        
                      {/* <Button ><a href="https://www.thrillophilia.com/cities/udaipur">{Availability1}</a></Button>
                      {/* <Button ><a href="">{Availability2}</a></Button>
                      <Button ><a href="">{Availability3}</a></Button>
                      <Button ><a href="">{Availability4}</a></Button>
                      <Button ><a href="">{Availability5}</a></Button>
                      <Button ><a href="">{Availability6}</a></Button>
                      <Button ><a href="">{Availability7}</a></Button>
                      <Button ><a href="">{Availability8}</a></Button> */} 




                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchResult