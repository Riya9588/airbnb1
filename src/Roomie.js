import React from 'react';
import './Roomie.css';
function Roomie(){
    return(
        <div className="container">
            <img className="image" src="https://th.bing.com/th/id/R496b5da68b60f5c29894e75b48cdde16?rik=xesbsSAMEPiGcQ&riu=http%3a%2f%2fcdn.thecoolist.com%2fwp-content%2fuploads%2f2016%2f09%2fThe-Wedge-tiny-home.jpg&ehk=%2bWfLBltoDmYOXf9tUnqJj1jnDaF0HQ7V5cihLCi17SM%3d&risl=&pid=ImgRaw"  width="100%"></img>
            <h1 className="name">The Sunset Dome</h1>
            <p className="address">439 chb</p>
            <br></br>
            <hr></hr>
            <br></br>
            <h3 className="host">Dome house<br></br>hosted by Riya</h3>
            <p className="detail">1)2 guests &nbsp; 2)1 bedroom &nbsp;  3)1 bed &nbsp;  4)1 bathroom </p>
            <br></br>
            <hr></hr>
            <div className="photo">

<img className="icon1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7uttNMf7TUZ9ppGFExBkI1pWzsuRVbstyjA&usqp=CAU" width="3%" height="2%" ></img> 
<br></br><br></br>

    <img className="icon2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4bRO68XRualSRxcL0cf-H96-5WnTNbTD4rDcgWaKRncfIuRskCqZ-kTxuZzNbfLJehk&usqp=CAU" width="3%" height="2%"></img>
<br></br><br></br>

    <img className="icon3" src="data:image/png;base64,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" width="3%" height="2%"></img>

<br></br><br></br>

    <img className="icon4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRG-KXG6dKsAI2B8tPvenNWAKHSKF8iSW8dw&usqp=CAU" width="3%" height="2%"></img>

<hr></hr>
</div>
            
<br></br>
<div className="para1">
    <h2>Description</h2>
    <p>

We are proud to present the Geodome experience, nestled up against the Witzenburg mountain range about 10km from the historic town of Tulbagh. Keeping up with the increasing demand for experiential stays in stead of the traditional B&B, we have created this unique rental situated in our favourite part of a 270 hectare farm. Swimming, fishing, mountain biking, hiking and enjoying nature are some of the favourite activities our guests enjoy. And yes, the outdoor bathtub in the picture is real </p>
</div>
<hr></hr><br></br>
<div className="arrangement">
    <h2>Sleeping Arrangements</h2>
    <img src="https://th.bing.com/th/id/OIP.PJBR5WnV1807RZb2dvaclQHaHa?w=162&h=180&c=7&o=5&dpr=1.5&pid=1.7" width="12%" height="15%"></img>
<h4>Bedroom 1<br></br>1 double bed</h4>
</div><hr></hr><br></br>
<div className="cont3">
    <h2 className="amenities">Amenities</h2>
    <ul className="services">
        <li>Free parking on premises</li>
        <li>Hot tub</li>
        <li>Kitchen</li>
        <li>Essentials</li>
        <li>Heat</li>
        <li>Laundry</li>
    </ul>
</div>
<hr></hr><br></br>
<h2 className="location">Location</h2>
<hr></hr><br>
</br>


        </div>


    )
}
export default Roomie;