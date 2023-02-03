import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import FormDonate from "../components/forms/FormDonate";
import Layout from "../components/layout/Layout";



function DonatePage() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      // console.log(publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
          // console.log(clientSecret);
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <>
    <Layout>
    <div className="container">
      <div>
        <h1 className="d-flex justify-content-center">Donate to Meals on Wheels</h1>
        <p>By donating, you are nourshing our comunity wellness.</p>
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <FormDonate />
          </Elements>
        )}
      </div>
    </div>
    </Layout>
    </>
  );
}
export default DonatePage;
