import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Contact from './Smurf';
import '../App.css';

class Contacts extends Component {

  state = {
    contacts:[]
  }

  componentDidMount(){
    axios.get(`https://build-week-web19.herokuapp.com/api/contacts`)
    .then(res => {
      this.setState({contacts:res.data})  
  }
)
  }

  render() {
    return (
      <div>
        <header>
          <h1>RGE Contact List</h1>
          <Link to='/'><button className='headerBtn'>Add A New Contact</button></Link>
        </header>
        <div>
          {this.state.contacts.map(contact => {
            return (
            <div key = {contact.id}>
              
              {contact.id}
              {contact.contactFirst}
              {contact.contactLast}
              {contact.contactPhone}
              {contact.relation}
            </div>
              /*<Contact key = {contact.id}
                id={contact.id}
                first={contact.contactFirst}
                last={contact.contactLast}
                phone={contact.contactPhone}
                relation={contact.relation}
                userid={contact.user_id}
              />*/
            )
          })}
        </div>
      </div>
    );
  }
}

export default Contacts;