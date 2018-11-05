import React from 'react';
import Contact from './components/contact';

import './one.css';

class One extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIndex: 2,
      contacts: [
        {
          name: 'Vanessa',
          img: '',
          location: '',
          thread: [
            {
              text: 'When should we meet? Maybe at 2-3pm or later?',
              self: true
            },
            {
              text: 'Let\'s meet at best pizza house. I haven\'t been there in a long time. I heard they just came ip with a new pizza.',
              self: false
            },
            {
              text: 'That sounds like a good idea!',
              self: true
            },
            {
              text: 'How  about going to see a movie? Cinemax 26 on Broadway is showing Enchanted.',
              self: false
            }
          ]
        }
      ]
    };

    this.setActiveIndexTo = this.setActiveIndexTo.bind(this);
  }

  setActiveIndexTo(activeIndex) {
    this.setState({ activeIndex });
  }


  render() {
    return (<div className="base">
      <div className="chg">
        <img src="https://res.cloudinary.com/dzas6ep30/image/upload/v1541247085/dailyui/texture.jpg"
             alt="" className="hero"/>
        <div className="maincard">
          <div className="nav"></div>
          <div className="contacts">
            <div className="search">
              <img
                src="https://res.cloudinary.com/dzas6ep30/image/upload/v1541416229/dailyui/1/search.svg"
                alt=""/>
              <input type="text" placeholder="Search"/>
            </div>
            <div className="list">
              {
                'somanycontacts'.split('')
                  .map((contact, key) => <Contact setActiveIndexToFunc={this.setActiveIndexTo}
                                                  index={key}
                                                  selected={this.state.activeIndex === key}/>)
              }
            </div>
          </div>
          <div className="thread">
            <div className="top">
              <img src="https://randomuser.me/api/portraits/women/63.jpg" alt=""/>
              <div className="details">
                <div className="name">Vanessa</div>
                <div className="time">18:05 Los-Angeles</div>
              </div>
              <div className="state">
                Online
              </div>
              <div className="bar"></div>
            </div>
            <div className="middle">
              <div className="rope">
                <div className="message">
                  <div className="time">16:05</div>
                  <div className="text">When should we meet? Maybe at 2-3pm or later?</div>
                </div>
                <div className="message me">
                  <div className="time">16:08</div>
                  <div className="text">Let's meet at best pizza house. I haven't been there in a
                    long time. I heard they just came ip with a new pizza.
                  </div>
                </div>
                <div className="message">
                  <div className="time">16:15</div>
                  <div className="text">When should we meet? Maybe at 2-3pm or later?</div>
                </div>
                <div className="message me">
                  <div className="time">16:23</div>
                  <div className="text">Let's meet at best pizza house. I haven't been there in a
                    long time. I heard they just came ip with a new pizza.
                  </div>
                </div>
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
