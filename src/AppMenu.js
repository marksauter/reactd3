import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const AppMenu = props => {
  const { className } = props;
  const classes = cx('app-menu', className); 

  return (
    <div className={classes}>AppMenu</div>
  );
}

AppMenu.propTypes = {
  className: PropTypes.string,
}

export default AppMenu;

