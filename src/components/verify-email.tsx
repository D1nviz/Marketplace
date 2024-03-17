"use client";

import Image from "next/image";
import Link from "next/link";
import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

type VerifyEmailProps = {
  token: string;
};

type MessageProps = {
  icon: React.ReactNode;
  title: string;
  message: string;
  children?: React.ReactNode;
};

const Message = ({ icon, title, message, children }: MessageProps) => (
  <div className="flex flex-col items-center gap-2">
    {icon}
    <h3 className="font-semibold text-xl">{title}</h3>
    <p className="text-muted-foreground text-sm">{message}</p>
    {children}
  </div>
);

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });
  
  if (isLoading) {
    return (
      <Message
        icon={<Loader2 className="animate-spin h-8 w-8 text-zinc-300" />}
        title="Verifying..."
        message="This takes a long time, please wait."
      />
    );
  }
  if (isError) {
    return (
      <Message
        icon={<XCircle className="h-8 w-8 text-red-600" />}
        title="Failed to verify email"
        message="This token is invalid or has expired. Please try again."
      />
    );
  }

  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <Image src="/email-sent.png" fill alt="The email was sent" />
        </div>
        <h3 className="font-semibold text-2xl">You&apos;re all set!</h3>
        <p className="text-muted-foreground text-center mt-1">
          Thank you for verifying your email.
        </p>
        <Link className={buttonVariants({ className: "mt-4" })} href="/sign-in">
          Sign in
        </Link>
      </div>
    );
  }
};

export default VerifyEmail;
