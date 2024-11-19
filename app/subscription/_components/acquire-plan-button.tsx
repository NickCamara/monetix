"use client";

import { Button } from "@/app/_components/ui/button";
import { CreateStripeCheckout } from "../_actions/create-checkout";
import { loadStripe } from "@stripe/stripe-js";

const AcquirePlanButton = () => {
  const handleAcquirePlanClick = async () => {
    const { sessionId } = await CreateStripeCheckout();
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
    );
    await stripe?.redirectToCheckout({ sessionId });
  };
  return (
    <Button className="w-full rounded-full" onClick={handleAcquirePlanClick}>
      Adquirir plano
    </Button>
  );
};

export default AcquirePlanButton;
