import React, {Component} from 'react';
import imgsrc from '../images/userimage.svg';
import './login.css';
import httpservice from '../service/http-service';
const http = new httpservice;

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {datas:[]};
        this.ticketcancel = this.ticketcancel.bind(this);
    }
    
    
    ticketcancel = () =>{
        var useremail=this.props.email; 
        var self = this;
        http.bookticket(useremail,null,null,null,100,this.props.title).then(data => {
          console.log("inticketbook",data);
            self.setState({datas:data});
        }, err => {
      });
    }
    
    
    render() {
        console.log("props of ticketbooking",this.props);
        if(this.props.pname==null||this.props.pname==0){
         return(
             <div>
             </div>
         );   
        }else{
        return(
        <div className= "card product">
            <div className="card-block userbox">
                <div className="">
                    <h4 className ="card-title userdetail">Ticket</h4>
                </div>
                <div >
                    <p className = "card-text  userdetail">Name of passenger:{this.props.pname}</p>
                    <p className = "card-text  userdetail">{this.props.title}</p>
                    <p className = "card-text  userdetail">From:{this.props.pfrom}</p>
                    <p className = "card-text  userdetail">To:{this.props.pto}</p>
                </div>
                <div>
                    <button onClick={this.ticketcancel} className = "btn btn-danger">Cancel</button>
                </div>
            </div>
        </div>
        );
        }
    }
}

export default Profile;