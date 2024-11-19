"use server";

import { auth } from "@clerk/nextjs/server";
import Stripe from "stripe";

export const CreateStripeCheckout = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  if (!process.env.STRIPE_SECRETS_KEY) {
    throw new Error("Stripe secret key not found");
  }
  const stripe = new Stripe(process.env.STRIPE_SECRETS_KEY as string, {
    apiVersion: "2024-10-28.acacia",
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    success_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
    line_items: [
      {
        price: process.env.STRIPE_PRO_PLAN_PRICE_ID,
        quantity: 1,
      },
    ],
  });
  return { sessionId: session.id };
};