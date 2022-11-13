import React from 'react'
import Footer from './footer';
import MainNavigation from './mainnavigation';

const Layout = props => {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
      <Footer />
    </div>
  )
};

export default Layout;