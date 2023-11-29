import * as React from 'react';
import { Fab } from '@mui/material';
import styles from './Button.module.css';
import FloatImage from '@/_assets/svg/float-btn.svg';
import Image from 'next/image';

const FloatButton = ({ onClick }) => {
  return (
    <div className={styles.floatButton}>
      <Fab
        sx={{ height: '100px', width: '100px' }}
        onClick={onClick} // Handle the click event
      >
        <Image alt="image" src={FloatImage} />
      </Fab>
    </div>
  );
};

export default FloatButton;
