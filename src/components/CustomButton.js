import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

function CustomButton(props) {
  return <div>
      <Button variant="text" className={props.className} onClick={props.onClick} {...props}>
        {props.icon ? <i className="material-icons">{props.icon}</i> : props.children}
      </Button>
    </div>;
}

CustomButton.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func
};

export default CustomButton;