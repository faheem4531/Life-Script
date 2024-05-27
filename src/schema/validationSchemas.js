import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const useValidationSchema = () => {
  const { t } = useTranslation();
  
  const validationSchema = Yup.object({
    email: Yup.string().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, "Invalid email format").required(t("signup-page.emailRequired")),
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Name must contain only letters")
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    sendGiftDate: Yup.date().min(new Date(), "Please select a future date").required("Please select a date"),
    giftFrom: Yup.string().matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, "Invalid email format").required("Sender's email is required"),
    giftFromName: Yup.string().matches(/^[A-Za-z\s]+$/, "Sender's name must contain only letters")
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    giftMessage: Yup.string().required("Gift message is required"),
  });

  return validationSchema;
};

export default useValidationSchema;
