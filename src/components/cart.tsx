"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import CartItem from "@/components/cart-item";

import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";

const Cart = () => {
  const { items } = useCart();

  const itemCount = items.length;

  const cartTotal = items.reduce(
    (total, { product }) => total + product.price,
    0
  );

  const fee = 1;
  return (
    <Sheet>
      <SheetTrigger className="bg-orange-500 flex items-center py-2 px-4 -m-2 rounded-full  hover:bg-orange-500/90">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-white"
        />
        <span className="ml-2  text-sm font-medium text-white ">
          {itemCount}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle> Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        {itemCount > 0 ? (
          <ScrollArea>
            <div className="flex w-full flex-col pr-6">
              <>
                {items.map(({ product }) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </>
            </div>
            <div className="space-y-1.5 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>{formatPrice(fee)}</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Total</span>
                  <span>{formatPrice(cartTotal + fee)}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({
                      className: "w-full",
                    })}
                  >
                    Continue to checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </ScrollArea>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-5 h-60 w-60 text-muted-foreground"
            >
              <Image src="/empty-cart.png" fill alt="empty shop cart" />
            </div>

            <p className="text-xl font-semibold"> Your cart is empty</p>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
