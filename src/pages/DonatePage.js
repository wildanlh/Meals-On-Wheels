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
            <div className="pt-5 pb-3">
              <h1 className="text-center  fw-bold">
                Donate to Meals on Wheels
              </h1>
              <p className="text-center">
                By donating, you are nourshing our comunity wellness.
              </p>
            </div>

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
