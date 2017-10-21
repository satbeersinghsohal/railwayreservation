import React, {Component} from 'react';
import imgsrc from '../images/userimage.svg';
import './login.css';
class Profile extends Component {
    render() {
        return(
        <div className= "card product">
            <div className="card-block userbox">
                <img src={imgsrc} className="img-fluid userimage"></img>
                <p className ="card-title userdetail">Money:&#8377;{this.props.balance}</p>
                <p className ="card-title userdetail">{this.props.name}</p>
                <p className = "card-text  userdetail">Email:{this.props.email}</p>
            </div>
        </div>
        );
    }
}

export default Profile;