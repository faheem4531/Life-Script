import * as Yup from "yup";
import { useTranslation } from "react-i18next";

export const RegisterFormSchema = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/, t("Invalid email format"))
      .required(t("signup-page.emailRequired")),
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, t("Name must contain only letters"))
      .required(t("Name is required")),
  });

  return validationSchema;
};