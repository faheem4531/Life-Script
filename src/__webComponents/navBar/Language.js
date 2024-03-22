'use client'

import * as React from 'react';
import { Select as BaseSelect } from '@mui/base/Select';
import { Option as BaseOption } from '@mui/base/Option';
import DownAero from "@/__webAssets/svgs/dropdown.svg"
import EN from "@/__webAssets/svgs/EN.svg"
import SP from "@/__webAssets/svgs/SP.svg"
import Image from 'next/image';
import { Box } from '@mui/material';
import styles from "./NavBar.module.css"
import Check from "@/__webAssets/svgs/check.svg"
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function LanguageOption() {
  const [selectedValue, setSelectedValue] = React.useState(10); // Initial selected value
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, value) => {
    setSelectedValue(value);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ position: "relative" }} onClick={handleToggle}>
      <BaseSelect
        value={selectedValue}
        className={styles.selector}
        onChange={handleChange}
      >
        <BaseOption value={10} className={`${styles.option} ${styles.optiontop} ${selectedValue == 10 && styles.optionsBg}`}>
          EN
          <Box sx={{
            borderRadius: "50%", width: "36px", height: "36px", position: "absolute", left: "15px", top: "17px",
          }}>
            <Tooltip title="English" placement="left">
              <Image src={EN} alt="English" width={25} height={25} />
            </Tooltip>
          </Box>
          {selectedValue == 10 &&
            <Box sx={{ position: "absolute", right: "15px", bottom: "20px" }}>
              <Image src={Check} alt="check" width={17} />
            </Box>}
        </BaseOption>
        <BaseOption value={20} className={`${styles.option} ${selectedValue == 20 && styles.optionsBg}`}>
          ES
          <Box sx={{ borderRadius: "50%", width: "36px", height: "36px", position: "absolute", left: "15px", bottom: "8px" }}>
            <Tooltip title="Spanish" placement="left">
              <Image src={SP} alt="Spanish" width={25} height={25} />
            </Tooltip>
          </Box>

          {selectedValue == 20 && <Box sx={{ position: "absolute", right: "15px", bottom: "20px" }}>
            <Image src={Check} alt="check" width={17} />
          </Box>}
        </BaseOption>

      </BaseSelect >
      <Image src={DownAero} alt="aero" width={13} className={styles.downAero} />

    </Box>
  );
}
