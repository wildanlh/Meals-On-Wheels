import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import "../../pages/css/DonatePage.css";

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
        return_url: `${window.location.origin}/ThankYou`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };

  return (
    <div className="d-flex d-flex justify-content-center mb-5">
      <div className="w-50">
        <form
          id="donate-form"
          onSubmit={handleSubmit}
          className="rounded border-1"
        >
          <PaymentElement id="payment-element" />
          <button
            disabled={isProcessing || !stripe || !elements}
            className="button fw-bold mt-3 text-white rounded px-3"
            id="submit"
          >
            <span id="button-text">
              {isProcessing ? "Processing. . ." : "Donate Now"}
            </span>
          </button>
          {message && <div id="payment-message">{message}</div>}
        </form>
      </div>
    </div>
  );
}
