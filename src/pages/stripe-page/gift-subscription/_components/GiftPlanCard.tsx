"use client";
import Check from "@/__webAssets/svgs/check.svg";
import Lock from "@/__webAssets/svgs/lock.svg";
import EditIconPriceCard from "@/_assets/svg/EditIconPriceCard.svg";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { categoryArrayMapping, imageMapping } from '../../../../utils/constants/constants';
import { formatDate } from "../../../../utils/highOrderFunctions";
import styles from "./GiftPlanCard.module.css";

const GiftPlanCard = ({ price, category }) => {
  const receiverName = localStorage.getItem("receiverName");
  const selectedDate = localStorage.getItem("selectedDate");
  const sendMessage = localStorage.getItem("sendMessage");

  const renderFeatureList = (array) => (
    array?.map((item, index) => (
      <Box
        className={styles.featureItem}
        key={index}
      >
        <Image src={item[`${category.toLowerCase()}Status`] ? Check : Lock} alt="status icon" />
        <Typography className={styles.featureText}>{item.dis}</Typography>
      </Box>
    ))
  );

  return (
    <Box className={styles.container}>
      <Box className={styles.imageContainer}>
        <Image
          src={imageMapping[category]}
          alt={`${category} Book Image`}
          width={250}
          height={348}
        />
      </Box>

      <Box className={styles.detailsContainer}>
        <Typography className={styles.planTitle}>
          {category ? `${category} Plan` : "Choose Plan"}
        </Typography>
        <Typography>Includes a premium full-color hardcover book, free shipping and one year LifeScript subscription with:</Typography>

        <Box className={styles.featureList}>
          {renderFeatureList(categoryArrayMapping[category] || [])}
        </Box>

        {receiverName && (
          <Box className={styles.extraInfoContainer}>
            <Box className={styles.extraInfoHeader}>
              <Typography className={styles.extraInfoTitle}>Details:</Typography>
              <Image alt="icon" src={EditIconPriceCard} className={styles.editIcon} />
            </Box>
            <Divider className={styles.divider} />

            <Box className={styles.infoItem}>
              <Typography className={styles.infoTitle}>Deliver to:</Typography>
              <Typography>{receiverName}</Typography>
            </Box>
            <Box className={styles.infoItem}>
              <Typography className={styles.infoTitle}>Date:</Typography>
              <Typography>{formatDate(selectedDate)}</Typography>
            </Box>
            <Box className={styles.infoItem}>
              <Typography className={styles.infoTitle}>Gift Message:</Typography>
              <Typography className={styles.messageText}>{sendMessage}</Typography>
            </Box>
          </Box>
        )}

        <Typography className={styles.priceText}>
          {price ? `$${price}` : "$0"}
        </Typography>
      </Box>
    </Box>
  );
};
export default GiftPlanCard;
