import React from 'react';

import './three.css';

class Three extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (<div className="base">
      <div className="chg">
        THREE
      </div>
    </div>);
  }
}

export default Three;

Three.propTypes = {};

Three.defaultProps = {};
