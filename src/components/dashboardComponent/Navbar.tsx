import More from "@/_assets/svg/nav-menue.svg";
import Profile from "@/_assets/svg/profile.svg";
import Search from "@/_assets/svg/searchbar.svg";
import Logo from "@/_assets/svg/white-logo.svg";
import { Box, InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Button from "../button/Button";
import styles from "./Navbar.module.css";

const options = ["None", "Atria", "Callisto"];
const ITEM_HEIGHT = 48;

const NavBar = ({ newChapter }: { newChapter?: () => void }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#197065",
        padding: "8px 25px 8px 14px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Image src={Logo} alt="logo" className={styles.logo} />
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "0 20px 0 6px",
            width: "300px",
            display: "flex",
            alignItems: "center",
            borderRadius: "15px",
            marginLeft: "85px",
          }}
          className={styles.searchBox}
        >
          <Image src={Search} alt="logo" />
          <InputBase
            sx={{
              backgroundColor: "#fff",
              width: "100%",
              paddingLeft: "5px",
              opacity: ".6",
              fontSize: "16px",
            }}
            placeholder="Search"
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Button
          onClick={() => {
            return newChapter();
          }}
          title="Start a new Chapter"
          border="1px solid #fff"
          background="transparent"
          width="180px"
          padding="8px 0"
          borderRadius="19px"
          color="#fff"
        />
        <Button
          onClick={() => {
            console.log("pushed");
            router.push("/dashboard/templates");
          }}
          title="Get Template"
          border="1px solid #fff"
          background="#fff"
          width="180px"
          padding="8px 0"
          borderRadius="19px"
          color="#197065"
        />
        {/* <Image
          src={Noti}
          alt='logo'
          className={styles.logo}
        /> */}
        <Image src={Profile} alt="logo" className={styles.logo} />
        {/* More option :start */}
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Image alt="options" src={More} />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "20ch",
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                selected={option === "Pyxis"}
                onClick={handleClose}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
        {/* More option :end */}
      </Box>
    </Box>
  );
};

export default NavBar;
