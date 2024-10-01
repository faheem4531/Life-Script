import Register from "@/components/authComponent/Register";
import Head from "next/head";

export default function AuthPage() {
  return (
    <>
      <Head>
        <title>
          Login - LifeScript
        </title>
        <meta
          name="description"
          content="Login to LifeScript and continue creating your personalized autobiography book. Safely access your account and enjoy preserving life's special moments."
        />
      </Head>
      <Register />
    </>
  );
}
