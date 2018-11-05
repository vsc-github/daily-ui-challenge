import React from 'react';
import Link from 'gatsby-link';
import './contact.css';

class Contact extends React.Component {
  render() {
    const { contact, selected, index } = this.props;

    return (
      <div className="contact"
           onClick={() => this.props.setActiveIndexToFunc(index)}
           style={selected ? {
        backgroundColor: 'white',
        boxShadow: '0 10px 20px 10px #f3eaed'
      } : null}>
        {!selected ? <div className="bar"></div> : null}
        <br/>
        <div className="avatar">
          <img src="https://randomuser.me/api/portraits/women/63.jpg" alt=""/>
        </div>
        <div className="text">
          <div className="name">Alex</div>
          <div className="msg">Do you remember the name of movie we watch last sunday?</div>
        </div>
        <div className="stats">
          <div className="time">18:06</div>
          <div className="unread">1</div>
        </div>
      </div>
    );
  }
}

export default Contact;
