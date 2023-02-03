import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import FormDonate from "../components/forms/FormDonate";
import Layout from "../components/layout/Layout";

function DonatePage() {

  return (
    <Layout>
      <FormDonate />
    </Layout>
  );
}
export default DonatePage;
