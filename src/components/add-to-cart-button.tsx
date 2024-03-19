"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/payload-types";

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [isSucces, setIsSucces] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSucces(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isSucces]);

  return (
    <Button
      disabled={isSucces}
      onClick={() => {
        addItem(product);
        setIsSucces(true);
      }}
      size={"lg"}
      className="w-full"
    >
      {isSucces ? "Added!" : "Add to cart"}
    </Button>
  );
};
export default AddToCartButton;
