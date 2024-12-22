// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import LeftBar from './leftBar'; 

const Layout = ({ children }) => {
  return (
    <div className="flex w-full h-full flex-col md:flex-row">
      <LeftBar />
      <div className="h-screen w-full box-border overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

// Add prop validation
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
