import React from 'react';
import './Hotelform.css';
class Hotelform extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
      }
     
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
      render() {
        return (
            <div className="design">
                <div className="design1">
                <img src="https://th.bing.com/th/id/R84550964178d5663b0f9a796a8e773b5?rik=AJAqZhtvmDadGg&riu=http%3a%2f%2fhydeparkwinterwonderland.com%2fwp-content%2fthemes%2fwinter-wonderland%2fdist%2fimages%2ftrees_left_new.png&ehk=PQVPecogw%2fCoi765RZbJZDKbti9BzJCwKMtOv81azjE%3d&risl=&pid=ImgRaw" width="50%" height="100%" />
                </div>
              
            <div className="form">
          <form onSubmit={this.mySubmitHandler}>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name</p>
          <input
            type='text'
            onChange={this.myChangeHandler}
          />
          
         
            <p>Property Name</p>
            <input type='text' />
            <p>Where's your place located?</p>
          <input type='text'/>
          <p>Place's Description</p>
          <input type='text'/>
          <p>Price</p>
          <input type='number' />

          <p>Availability</p>
          <input type='number'/>
          <br></br><br></br>
          <button className="submit">Submit</button>
            
          </form>
          </div>
          <div className="design2"><img src="https://th.bing.com/th/id/Rcfc3b79965feded0f86ea705249e9926?rik=Cs49jYzNGrqHAw&riu=http%3a%2f%2fhydeparkwinterwonderland.com%2fwp-content%2fthemes%2fwinter-wonderland%2fdist%2fimages%2ftrees_right_new.png&ehk=C1sPaz4%2bro%2b34Pblp908d2Iuyd2ddVDUTvFgSuKh0BM%3d&risl=&pid=ImgRaw" width="50%" height="100%"></img></div>
          </div>
          
        );
      }
    }
export default Hotelform;