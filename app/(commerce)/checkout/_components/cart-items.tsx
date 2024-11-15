"use client";

import BagCard from "@/components/cards/bag-card";
import { cartItems } from "@/placeholders/cart-items";

export default function CartItems() {
  return (
    <>
      {cartItems.map((item) => (
        <BagCard
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          variant={String(item.size)}
          quantity={2}
        />
      ))}
    </>
  );
}
