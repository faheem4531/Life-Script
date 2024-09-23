import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Thankyou from "@/components/webComponents/Thankyou";

const UpgradeBasic = () => {
  const router = useRouter();
  const [plan, setPlan] = useState("");
  const subPlan = router.query.plan || '';

  useEffect(() => {
    if (subPlan === "BasicPlan") {
      setPlan("Basic")
    }
    else if (subPlan === "StandardPlan") {
      setPlan("Standard")
    }
    else {
      setPlan("Premium")
    }
  }, [subPlan])

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
        typo1={`You’ve upgraded to the ${plan} Plan.`}
        typo2={"A confirmation email will be sent shortly."}
      />
    </>
  )
}

export default UpgradeBasic