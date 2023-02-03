import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";


function DonatePage() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();

      console.log(publishableKey);
      // setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  return (
    <>
    <h1>Hello</h1>
    </>

  );

}
export default DonatePage














// import FormDonate from "../components/forms/FormDonate";
// import Layout from "../components/layout/Layout";

// import "./css/DonatePage.css";

// const DonatePage = () => {
//   return (
//     <Layout>
//       <FormDonate />
//     </Layout>
//   );
// };

// export default DonatePage;
