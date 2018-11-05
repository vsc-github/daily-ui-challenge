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
            {
              'somanycontacts'.split('')
                .map((contact, key) => <Contact setActiveIndexToFunc={this.setActiveIndexTo}
                                                index={key}
                                                selected={this.state.activeIndex === key}/>)
            }
          </div>
          <div className="thread"></div>
        </div>
      </div>
    </div>);
  }
}

export default One;

One.propTypes = {};

One.defaultProps = {};
