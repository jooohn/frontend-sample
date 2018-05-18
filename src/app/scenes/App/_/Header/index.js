import * as React from 'react';
import {
  AppBar,
  Icon,
  IconButton,
  Toolbar,
  Typography
} from '../../../../../lib/atoms';
import { Link } from 'react-router-dom';

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <IconButton area-labell="home" component={Link} to="/">
        <Icon>home</Icon>
      </IconButton>
      <Typography variant="title" color="inherit">
        Redundant Todo
      </Typography>
    </Toolbar>
  </AppBar>
);
export default Header;
