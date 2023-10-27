import React from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo (adjust the src and alt attributes) */}
        <IconButton edge="start" color="inherit" aria-label="logo">
          <img src="/path-to-your-logo.png" alt="Logo" width="40" height="40" />
        </IconButton>

        {/* Menu Buttons */}
        <div style={{ flexGrow: 1 }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">About Us</Button>
        </div>

        {/* Sign Up Button */}
        <Button color="inherit">Sign Up</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
