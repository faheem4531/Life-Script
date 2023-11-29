import Layout from "@/components/Layout/Layout";
import Button from "@/components/button/Button";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import RevertIcon from "@/_assets/svg/revert-response-icon.svg"
import Title from "@/_assets/svg/topic-title.svg"
import EditIcon from "@/_assets/svg/edit-icon-green.svg"
import SaveIcon from "@/_assets/svg/save-response-white-icon.svg"
import styles from "./Narrative.module.css"
import NextIcon from "@/_assets/svg/next-iconX.svg"
import PreviousIcon from "@/_assets/svg/previous-icon.svg"
import TransitionsDialog from "@/components/modal/TransitionDialog";
import { useState } from "react";

const NarrativeResponse = () => {
  const [revertModal, setRevertModal] = useState(false)

  const text1 = "You don’t need to have a full time ecommerce business to earn a little extra money through your website. You don’t even need to be there all the time. All you need to do is wait for the day your advertisers will pay you."
  const text2 = "However, this is not as easy as it seems. You can’t expect to just make a website and watch the money roll in. You have to exert first the effort to make the site popular and produce a huge traffic flow. Advertisers would only post their banners and ads on sites where they know there are many people who will see them. The more traffic and visitors you have the likely the chance that advertisers will want their ads on your site. You can also have pay-per-click advertising in your site. As each visitor clicks on an ad, the advertiser will pay you for those redirects. Google’s Adsense and Yahoo’s Search marketing are some of those that offer this performance. The more traffic and visitors you have the likely the chance th"

  return (
    <>
      <Layout>
        <Box sx={{
          marginTop: { xl: "30px", sm: "20px" },
          display: "flex",
          columnGap: "100px",
        }}
          className={styles.nativeMainBg}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignContent: "space-between",
          }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Image alt="image" src={Title} className={styles.titleIcon} />
              <Box>
                <Typography sx={{ fontSize: { xl: "20px", sm: "17px" }, color: "#171725", fontWeight: 600 }}>My Adventurous Life</Typography>
                <Typography sx={{ fontSize: "12px", color: "#696974", fontWeight: 300, textDecoration: "underline" }}>view only</Typography>
              </Box>
            </Box>
            <Box sx={{ marginTop: "auto" }}>
              <Typography sx={{ fontSize: "15px", fontWeight: 300, marginBottom: "8px" }}>Doesn’t like the narrative fusion response?</Typography>
              <Button
                image={RevertIcon}
                title="Revert Response"
                background="#fff"
                borderRadius="27px"
                color="#197065"
                width="155px"
                height="30px"
                fontSize="14px"
                padding={undefined}
                onClick={() => setRevertModal(true)}
                border="1px solid #197065"
              />
            </Box>
          </Box>
          <Box sx={{
            maxWidth: "445px",
            minHeight: "90vh",
          }}>
            <Box sx={{
              padding: { xl: "45px 60px", sm: "40px 45px", },
              bgcolor: "#fff", position: "relative"
            }}>
              <Typography
                sx={{ textAlign: "center", fontSize: "20px", fontWeight: 600, color: "#171725", marginBottom: "35px" }}>
                My Adventurous Life</Typography>
              <Typography
                sx={{ fontSize: "13px", color: "#696974", marginBottom: "25px", lineHeight: "22px" }}>
                {text1}</Typography>
              <Typography
                sx={{ fontSize: "13px", color: "#696974", lineHeight: "22px" }}>
                {text2}</Typography>
              <Image alt="icon" src={NextIcon} className={styles.nextIcon} />
              <Image alt="icon" src={PreviousIcon} className={styles.previousIcon} />
            </Box>
            <Box sx={{ marginTop: "18px", fontSize: "15px", fontWeight: 500, textAlign: "center" }}>
              Page 01 of 40
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", flexDirection: { sm: "column", xl: "row" }, gap: "10px" }}
          >
            <Button
              image={EditIcon}
              title="Edit Response"
              background="#fff"
              borderRadius="27px"
              color="#197065"
              height="28px"
              width="155px"
              fontSize="14px"
              padding="9px 10px"
              onClick={() => { }}
              border="1px solid #197065"
            />
            <Button
              image={SaveIcon}
              title="Save Response"
              background="#197065"
              borderRadius="27px"
              color="#fff"
              height="28px"
              width="155px"
              fontSize="14px"
              padding="9px 10px"
              onClick={() => { }}
              border="none"
            />
          </Box>
        </Box>
      </Layout>


      {/* Revert changes Modal  */}
      <TransitionsDialog
        open={revertModal}
        heading="Revert Response"
        description="This will undo all narrative fusion changes. You will be redirected to the original content compiled chapter for editing."
        cancel={() => setRevertModal(false)}
        proceed={() => setRevertModal(true)}
        proceedText="Not Yet" // Customize the text for the "Yes" button
        cancelText="Revert Changes" // Customize the text for the "No" button
      />

    </>
  );
};

export default NarrativeResponse;
