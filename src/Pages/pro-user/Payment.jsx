import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutFom from "./CheckoutFom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutFom></CheckoutFom>
    </Elements>
  );
};

export default Payment;
