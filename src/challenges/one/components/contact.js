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
             boxShadow: '0 10px 20px 10px #f3eaed',
             zIndex: 50
           } : null}>
        {!selected ? <div className="bar"></div> : null}
        <br/>
        <div className="avatar">
          <img src={contact.img} alt=""/>
        </div>
        <div className="text">
          <div className="name">{contact.name}</div>
          <div className="msg">{contact.thread[contact.thread.length - 1].text}</div>
        </div>
        <div className="stats">
          <div className="time">18:06</div>
          {
            contact.unread ? <div className="unread">1</div> : null
          }
        </div>
      </div>
    );
  }
}

export default Contact;
