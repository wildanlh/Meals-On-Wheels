import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import "../../pages/css/DonatePage.css"

export default function FormDonate() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
      return_url: `${window.location.origin}/DonateThankYou`,
    },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.")
    }

    setIsProcessing(false);
  };

  return (
    <form id="donate-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element">
        <button disabled={isProcessing || !stripe || !elements} id="submit">
          <span id="button-text">{isProcessing ? "Processing. . ." : "Donate Now"}</span>
        </button>
      </PaymentElement>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}