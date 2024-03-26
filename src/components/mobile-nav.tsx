"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogOutIcon, MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Icons } from "@/components/icons";

import { cn } from "@/lib/utils";
import { User } from "@/payload-types";
import useAuth from "@/hooks/use-auth";
import { productCategories } from "@/config";

type MobileNavProps = {
  user: User | null;
};

const MobileNav = ({ user }: MobileNavProps) => {
  const { sigOut } = useAuth();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(() => !isOpen);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        onClick={toggleMenu}
        className="lg:hidden relative z-100 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
      >
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </SheetTrigger>

      <SheetContent className="flex gap-0 w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6 pb-3 border-b border-gray-200 bg-white ">
          <SheetTitle className="flex items-center justify-center gap-3">
            <Icons.logo className="h-10 w-10" /> Marketplace
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="w-full bg-white pr-4 overflow-y-hidden">
          <ul>
            {productCategories.map((category) => (
              <li key={category.label} className="px-4 pb-8 mb-3 ">
                <div className="-mb-px flex">
                  <p className=" text-gray-900 flex-1 whitespace-nowrap  py-4 text-base font-medium">
                    {category.label}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-y-10 gap-x-4">
                  {category.featured.map((item) => (
                    <Link
                      onClick={toggleMenu}
                      href={item.href}
                      key={item.name}
                      className="group relative text-sm"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                        <Image
                          fill
                          src={item.imageSrc}
                          alt="product category image"
                          className="object-cover object-center"
                        />
                      </div>
                      <span className="mt-2 pl-2 block font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <div className="flex gap-4 justify-center items-center  border-t border-gray-200 px-4 py-6">
            {user ? (
              <Button
                className="w-full gap-2"
                variant="destructive"
                onClick={sigOut}
              >
                <LogOutIcon className="w-4 h-4" />
                Logout
              </Button>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  onClick={toggleMenu}
                  className={cn(buttonVariants())}
                >
                  Sign in
                </Link>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <Link
                  href="/sign-up"
                  onClick={toggleMenu}
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
