import React from 'react';
import Contact from './components/contact';
import contacts from './contacts';
import './one.css';

class One extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 2,
      activeTab: 1,
      contacts
    };

    this.setActiveIndexTo = this.setActiveIndexTo.bind(this);
  }

  setActiveIndexTo(activeIndex) {
    this.setState({ activeIndex });
  }

  setActiveTabTo(activeTab) {
    this.setState({ activeTab });
  }


  render() {
    return (<div className="base">
      <div className="chg">
        <img src="https://res.cloudinary.com/dzas6ep30/image/upload/v1541247085/dailyui/texture.jpg"
             alt="" className="hero"/>
        <div className="maincard">
          <div className="nav">
            <img src="https://pbs.twimg.com/profile_images/1009793767715397638/C3Vh-_bg.jpg" alt="" className="user"/>

            <div style={this.state.activeTab !== 0 ? null : { borderLeft: '3px solid #f77ca5' }}
                 onClick={() => this.setActiveTabTo(0)}>
              <img
                src="https://res.cloudinary.com/dzas6ep30/image/upload/v1541439709/dailyui/1/user.svg"
                alt=""/></div>
            <div style={this.state.activeTab !== 1 ? null : { borderLeft: '3px solid #f77ca5' }}
                 onClick={() => this.setActiveTabTo(1)}>
              <img
                src="https://res.cloudinary.com/dzas6ep30/image/upload/v1541440507/dailyui/1/speech.svg"
                alt=""/></div>
            <div style={this.state.activeTab !== 2 ? null : { borderLeft: '3px solid #f77ca5' }}
                 onClick={() => this.setActiveTabTo(2)}>
              <img
                src="https://res.cloudinary.com/dzas6ep30/image/upload/v1541440342/dailyui/1/setting.svg"
                alt=""/></div>
            <div style={this.state.activeTab !== 3 ? null : { borderLeft: '3px solid #f77ca5' }}
                 onClick={() => this.setActiveTabTo(3)}>
              <img
                src="https://res.cloudinary.com/dzas6ep30/image/upload/v1541440418/dailyui/1/phone.svg"
                alt=""/></div>
            <div style={this.state.activeTab !== 4 ? null : { borderLeft: '3px solid #f77ca5' }}
                 onClick={() => this.setActiveTabTo(4)}>
              <img
                src="https://res.cloudinary.com/dzas6ep30/image/upload/v1541440570/dailyui/1/info.svg"
                alt=""/></div>
          </div>
          <div className="contacts">
            <div className="search">
              <img
                src="https://res.cloudinary.com/dzas6ep30/image/upload/v1541416229/dailyui/1/search.svg"
                alt=""/>
              <input type="text" placeholder="Search"/>
            </div>
            <div className="list">
              {
                this.state.contacts.map((contact, key) => <Contact
                  contact={contact}
                  setActiveIndexToFunc={this.setActiveIndexTo}
                  index={key}
                  selected={this.state.activeIndex === key}/>)
              }
            </div>
          </div>
          <div className="thread">
            <div className="top">
              <img src="https://res.cloudinary.com/dzas6ep30/image/upload/v1541485622/windowops.png"
                   alt="" className="ops"/>
              <img src={this.state.contacts[this.state.activeIndex].img} alt=""/>
              <div className="details">
                <div className="name">{this.state.contacts[this.state.activeIndex].name}</div>
                <div className="time">{this.state.contacts[this.state.activeIndex].location}</div>
              </div>
              <div className="state">
                Online
              </div>
              <div className="bar"></div>
            </div>
            <div className="middle">
              <div className="rope">
                {
                  this.state.contacts[this.state.activeIndex].thread.map((contact, key) => (<div
                    className={`message ${contact.self ? 'me' : ''}`} key={key}>
                    <div className="time">{contact.time}</div>
                    <div className="text">{contact.text}</div>
                  </div>))
                }
              </div>
            </div>
            <div className="bottom">
              <input type="text" placeholder="your message"/>
              <img
                src="https://res.cloudinary.com/dzas6ep30/image/upload/v1541426892/dailyui/1/plus.svg"
                alt="+" className="plus"/>
              <img
                src="https://res.cloudinary.com/dzas6ep30/image/upload/v1541426981/dailyui/1/message.svg"
                alt="send" className="send"/>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default One;

One.propTypes = {};

One.defaultProps = {};
