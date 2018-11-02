import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      telegram: author.telegram,
      twitter: author.twitter,
      github: author.github,
      stackoverflow: author.stackoverflow,
      linkedin: author.linkedin,
      email: author.email
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a href={links.twitter} target="_blank" >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={links.github} target="_blank" >
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={links.linkedin} target="_blank" >
              <i className="icon-linkedin" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={links.stackoverflow}>
              <i className="icon-stackoverflow" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
