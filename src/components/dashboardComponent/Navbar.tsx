import NavMenu from "@/_assets/svg/nav-menu.svg";
import More from "@/_assets/svg/nav-menue.svg";
import Profile from "@/_assets/svg/profile.svg";
import Search from "@/_assets/svg/searchbar.svg";
import { Box, InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";
import Button from "../button/Button";
import styles from "./Navbar.module.css";
const options = ["Logout"];
const ITEM_HEIGHT = 48;

const NavBar = ({
  newChapter,
  sideBarHandle,
}: {
  newChapter?: () => void;
  sideBarHandle?: () => void;
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const dispatch: any = useDispatch();
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOption = (option) => {
    if (option === "Logout") {
      // dispatch(logout());
      localStorage.clear();
      router.push("/");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: { md: "#197065", sm: "#fff", xs: "#fff" },
        padding: "0 14px",
        height: "70px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{ display: { xs: "block", sm: "block", md: "none" } }}
          onClick={sideBarHandle}
        >
          <Image src={NavMenu} alt="logo" />
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "0 20px 0 6px",
            border: "1px solid #197065",
            width: "300px",
            display: "flex",
            alignItems: "center",
            margin: "0 auto",
            borderRadius: "15px",
            marginLeft: "85px",
          }}
          className={styles.searchBox}
        >
          <Image src={Search} alt="logo" />
          <InputBase
            sx={{
              fontFamily: "sans-serif",
              backgroundColor: "#fff",
              width: "100%",
              paddingLeft: "5px",
              opacity: ".6",
              fontSize: "16px",
            }}
            placeholder="Search"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Box
            sx={{
              cursor: "pointer",
              display: { md: "block", sm: "none", xs: "none" },
            }}
          >
            <Button
              onClick={() => {
                if (router.asPath === "/dashboard/chapters") {
                  return newChapter();
                }
              }}
              title="Start a new Chapter"
              border="1px solid #fff"
              background="transparent"
              width="180px"
              padding="8px 0"
              borderRadius="19px"
              color="#fff"
            />
          </Box>
          <Box
            sx={{
              cursor: "pointer",
              display: { md: "block", sm: "none", xs: "none" },
            }}
          >
            <Button
              onClick={() => {
                if (router.asPath === "/dashboard/chapters") {
                  router.push("/dashboard/templates");
                }
              }}
              title="Get Template"
              border="1px solid #fff"
              background="#fff"
              width="180px"
              padding="8px 0"
              borderRadius="19px"
              color="#197065"
            />
          </Box>
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
                  onClick={() => handleClickOption(option)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
          {/* More option :end */}
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
