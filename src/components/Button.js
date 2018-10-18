import React from 'react';

import Button from '@material-ui/core/Button';

function Buttons(props) {
  return <div>
      <Button variant="text" className={props.className} onClick={props.onClick} {...props}>
        {props.icon ? <i className="material-icons">{props.icon}</i> : props.children}
      </Button>
    </div>;
}

export default Buttons;