import EmailVerification from "@/components/authComponent/EmailVerification";
import ForgetPassword from "@/components/authComponent/ForgetPassword";
import Register from "@/components/authComponent/Register";
import { Box } from "@mui/material";

export default function AuthPage() {
  return (
    <Box>
      <Register />
      {/* <ForgetPassword/> */}
    {/* <EmailVerification/> */}
    </Box>
  );
}
