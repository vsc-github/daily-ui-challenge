import React from 'react';

import './one.css';

class One extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (<div className="base">
      <div className="chg">
        ONEEEEEE
      </div>
    </div>);
  }
}

export default One;

One.propTypes = {};

One.defaultProps = {};
