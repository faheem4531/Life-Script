import Head from "next/head";
import { useRouter } from "next/router";

import Thankyou from "@/components/webComponents/Thankyou";

const UpgradePremium = () => {
  const router = useRouter();

  function handleRoutes() {
    router.push("/dashboard/overview");
  }

  return (
    <>
      <Head>
        <title>Congratulations on Upgrading</title>
      </Head>
      <Thankyou
        onClick={handleRoutes}
        head1={"THANK YOU FOR"}
        head2={"UPGRADING!"}
        typo1={`You’ve upgraded to the Premium Plan.`}
        typo2={"A confirmation email will be sent shortly."}
      />
    </>
  )
}

export default UpgradePremium