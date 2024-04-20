import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';

function Header(props) {
  const { title } = props;

  return (
    <React.Fragment>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;