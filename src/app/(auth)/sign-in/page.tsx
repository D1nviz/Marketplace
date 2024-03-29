"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  AuthCredentialsValiador,
  type TAuthCredentialsValiador,
} from "@/lib/validators/account-credentials";
import { cn } from "@/lib/utils";

const SignInPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const isSeller = searchParams.get("as") === "seller";
  const origin = searchParams.get("origin");

  const continueAsSeller = () => {
    router.push("?as=seller");
  };
  const continueAsCustomer = () => {
    router.replace("/sign-in", undefined);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValiador>({
    resolver: zodResolver(AuthCredentialsValiador),
  });

  const { mutate: signIn, isLoading } = trpc.auth.signIn.useMutation({
    onSuccess: () => {
      toast.success("Signed in successfully");

      router.refresh();

      if (origin) {
        router.push(`${process.env.NEXT_PUBLIC_SERVER_URL}/${origin}`);
        return;
      }

      if (isSeller) {
        router.push("/sell");
        return;
      }

      router.push("/");
      router.refresh();
    },
    onError: (error) => {
      if (error.data?.code === "UNAUTHORIZED") {
        toast.error("Invalid email or password. Please try again.");
        return;
      }
    },
  });

  const onSubmit = ({ email, password }: TAuthCredentialsValiador) => {
    signIn({ email, password });
  };

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo className="w-20 h-20" />
          <h1 className="text-2xl font-bold">
            Sign in to your {isSeller ? "seller" : ""} account
          </h1>
          <Link
            className={cn(
              buttonVariants({ variant: "link", className: "gap-1.5" })
            )}
            href="/sign-up"
          >
            Don&apos;t have an account? Register!
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  className={cn({
                    "focus-visible:ring-red-500": errors.email,
                  })}
                  placeholder="you@example.com"
                />
                {errors?.email && (
                  <p className="text sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  {...register("password")}
                  type="password"
                  className={cn({
                    "focus-visible:ring-red-500": errors.password,
                  })}
                  placeholder="Password"
                />
                {errors?.password && (
                  <p className="text sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign in
              </Button>
            </div>
          </form>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center"
            >
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>
          {isSeller ? (
            <Button
              onClick={continueAsCustomer}
              variant="secondary"
              disabled={isLoading}
            >
              Continue as customer
            </Button>
          ) : (
            <Button
              onClick={continueAsSeller}
              variant="secondary"
              disabled={isLoading}
            >
              Continue as seller
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
