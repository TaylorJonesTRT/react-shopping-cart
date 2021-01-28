import React from 'react';
import '../styles/Header.css';
import { AppBar, Typography, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartOutlined';

const Header = () => (
  <AppBar position="static">
    <div className="wrapper">
      <div className="header">
        <Typography variant="h3" className="logo">
          Shopping Cart
        </Typography>
        <div className="cart-icon">
          <Badge color="secondary" badgeContent={2}>
            <ShoppingCartIcon style={{ fontSize: 40 }} />
          </Badge>
        </div>
      </div>
    </div>
  </AppBar>
);

export default Header;
