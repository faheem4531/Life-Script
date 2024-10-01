import Thankyou from "@/components/webComponents/Thankyou";
import Head from "next/head";
import { useRouter } from "next/router";

const FreeTrial = () => {
  const router = useRouter();

  function handleRoutes() {
    const auth = router.query.auth || '';
    const userName = localStorage.getItem("username");

    if (auth === 'google' || auth === 'facebook') {
      router.push(`/getStarted/getTitle?userName=${userName}`);
    } else {
      router.push('/login');
    }
  }

  return (
    <>
      <Head>
        <title>Welcome to Free Trial</title>
      </Head>
      <Thankyou
        onClick={handleRoutes}
        head1={"WELCOME TO THE"}
        head2={"7-DAY FREE TRIAL!"}
      />
    </>
  )
}

export default FreeTrial