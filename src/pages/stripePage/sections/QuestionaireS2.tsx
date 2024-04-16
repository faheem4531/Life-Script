"use client";
import Button from "@/__webComponents/button/Button";
import Logo from "@/_assets/svg/logo-dashboard.svg";
import {
    Box,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";
import Image from "next/image";
import BgLogo from "../../../_assets/svg/BgLogo.svg";

const QuestionaireS2 = () => {

    return (
        <>
            <Box
                sx={{
                    bgcolor: "#f3ecda",
                    color: "#3e4f3c",
                    height: "100vh",
                    position: "relative"
                }}
                
            >
            <Box position={"relative"} zIndex={2}>

                <Box
                    sx={{
                        bgcolor: "#30422e",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                    }}
                >
                    <Image src={Logo} alt="Logo" />
                </Box>

                <Box>
                    <FormControl
                        sx={{
                            width: "500px",
                            // height: "400px",
                            marginTop: "100px",
                            marginLeft: "100px",
                        }}
                    >
                        <Typography
                            sx={{ color: "#30422E", fontSize: "30px", margin: "10px" }}
                        >
                            Select Your Preference
                        </Typography>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="buynow"
                            name="radio-buttons-group"
                            sx={{ padding: "20px" }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: "white",
                                    margin: "10px",
                                    border: "1px solid black",
                                    borderRadius: "4px",
                                }}
                            >
                                <FormControlLabel
                                    value="buynow"
                                    control={<Radio sx={{
                                        "&.Mui-checked .MuiSvgIcon-root": {
                                          fill: "#30422E",
                                        },
                                      }}/>}
                                    label="Buy Now"
                                    sx={{ marginLeft: "10px" }}
                                />
                            </Box>
                            <Box
                                sx={{
                                    backgroundColor: "white",
                                    margin: "10px",
                                    border: "1px solid black",
                                    borderRadius: "4px",
                                }}
                            >
                                <FormControlLabel
                                    value="free-trial"
                                    control={<Radio sx={{
                                        "&.Mui-checked .MuiSvgIcon-root": {
                                          fill: "#30422E",
                                        },
                                      }}/>}
                                    label="Start 7-Day Free Trial"
                                    sx={{ marginLeft: "10px" }}
                                />
                            </Box>
                            <Box sx={{ margin: "10px" }}>
                                {/* <Link href="/">   */}
                                <Button

                                        width='50%'
                                        height='50px'
                                        backgroundColor="#E1693B"
                                        title={"Continue"}
                                        bgHover="#B5522D" onClick={undefined} img1={undefined} img2={undefined} borderRadius={undefined}        />
                                {/* </Link> */}
                            </Box>
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Box>
                <Box sx={{position: "absolute", right: "0px", bottom:"0px", zIndex: 1, maxWidth:"768px", width:"100%", 
                 }}>
          <Image
          src={BgLogo}
          alt="Giving Tree Logo"
          style={{
            width: "100%",
            height: "100%"
          }}
          />

        </Box>
            </Box>
        </>
    );
};

export default QuestionaireS2;
