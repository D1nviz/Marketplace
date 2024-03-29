import Link from "next/link";
import { cookies } from "next/headers";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import NavItems from "@/components/nav-items";
import Cart from "@/components/cart";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import UserAccountNav from "@/components/user-account-nav";
import MobileNav from "@/components/mobile-nav";

import { getSerVerSideUser } from "@/lib/get-server-side-user";

const Navbar = async () => {
  const nextCookies = cookies();
  const { user } = await getSerVerSideUser(nextCookies);

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <MobileNav user={user} />
              <div className="ml-4 flex-lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {!user && (
                    <>
                      <Link href="/sign-in" className={buttonVariants({})}>
                        Sign in
                      </Link>
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </>
                  )}
                  {user ? (
                    <>
                      <UserAccountNav user={user} />
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </>
                  ) : (
                    <Link
                      href="/sign-up"
                      className={buttonVariants({
                        variant: "secondary",
                      })}
                    >
                      Create account
                    </Link>
                  )}
                  {!user && (
                    <div className="flex lg:ml-6">
                      <span
                        className="h-6 w-px bg-gray-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
                <div className="mx-4 flow-root lg:ml-6">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
