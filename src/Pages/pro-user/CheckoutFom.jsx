import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutFom = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const axiosSecure = useAxiosSecure();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    axiosSecure.post("/create-payment-intent").then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        email: user?.email,
        name: user?.displayName,
      },
    });
    if (error) {
      console.log("error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });
    if (error) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your are now a pro-user",
        });
      }
    }
  };
  return (
    <div className="mx-auto max-w-screen-xl mt-10">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",

                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <p className="text-red-600">{error}</p>
        <button
          className="btn mt-4 bg-main"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutFom;
