
"use client";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import More from "@/_assets/png/options.png"
import { Divider } from '@mui/material';
import Tick from "@/_assets/svg/checked.svg"
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const options = [
  'None',
  'Atria',
  'Callisto',
];

const ITEM_HEIGHT = 48;
export default function DetailCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card sx={{ maxWidth: 512, borderRadius: "6.5px" }}>
      <div style={{ backgroundColor: "#197065", padding: "25px 0 25px 17px" }}>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Image
            alt='options' src={More} />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <CardContent>
        <Typography variant="body2" color="text " fontWeight="600" fontSize="19px" textAlign="center" marginBottom="40px">
          The Book Of John Doe
          <Divider sx={{ width: "245px", backgroundColor: "#000", height: "2px", margin: "9px auto 0" }} />
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="10px" color="rgba(22, 22, 22, 0.90)" fontSize="13px" marginTop="7px">
          <Image alt='check' src={Tick} />
          Winner of the National Academy of Sciences Best Book Award in 2012
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="10px" color="rgba(22, 22, 22, 0.90)" fontSize="13px" marginTop="7px">
          <Image alt='check' src={Tick} />
          The Worst Job Ever
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="10px" color="rgba(22, 22, 22, 0.90)" fontSize="13px" marginTop="7px">
          <Image alt='check' src={Tick} />
          The Best Job Ever
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="10px" color="rgba(22, 22, 22, 0.90)" fontSize="13px" marginTop="7px">
          <Image alt='check' src={Tick} />
          Your Best Employee
        </Typography>
        <Typography display="flex" alignItems="center" columnGap="10px" color="rgba(22, 22, 22, 0.90)" fontSize="13px" marginTop="7px">
          <Image alt='check' src={Tick} />
          The Best Project You've Worked On
        </Typography>
        <Typography color="rgba(22, 22, 22, 0.90)" fontSize="11px" marginTop="30px">
          Last Edited 3 Days Ago
        </Typography>
      </CardContent>
    </Card>
  );
}
