import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

class Layout extends React.Component {
  render() {
    const { children, location } = this.props;

    console.log('LOC', location.pathname, location.pathname.includes('/posts/'));

    return (<div style={{ backgroundColor: location.pathname.includes('/posts/') ? '#ffffff' : '#f4f4f4' }}>
        <div className="layout">
          <Helmet defaultTitle="Blog by John Doe"/>
          {children()}
        </div>
      </div>
    );
  }
}

export default Layout;
