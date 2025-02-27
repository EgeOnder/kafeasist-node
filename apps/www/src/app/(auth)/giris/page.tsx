import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, CircleCheckIcon } from "lucide-react";

import { Button, Typography } from "@kafeasist/ui";

import AuthHeading from "../_components/auth-heading";
import { EmailPasswordForm, MagicLinkForm } from "./_components/forms";

export interface LoginSearchParams {
  type: string;
  email?: string;
}

interface LoginPageProps {
  searchParams: Promise<LoginSearchParams>;
}

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const { type } = await searchParams;
  const isUsingEmailPassword = type === "password";
  const isSent = type === "sent";

  return (
    <>
      <AuthHeading
        title="Hesabına giriş yap"
        description="E-posta adresinizi girin, ya şifresiz giriş yapın, ya da şifrenizle giriş yapın."
      />
      {isUsingEmailPassword ? (
        <EmailPasswordForm />
      ) : isSent ? (
        <LinkSent />
      ) : (
        <MagicLinkForm />
      )}
    </>
  );
}

function LinkSent() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="flex items-center space-x-2">
        <CircleCheckIcon className="h-5 w-5" />
        <Typography as="span">
          Şifresiz giriş bağlantısı e-posta adresinize gönderildi.
        </Typography>
      </div>
      <Image src="/penguin/happy.png" alt="Penguen" height={144} width={163} />
      <Link href="/giris">
        <Button prefixIcon={ArrowLeftIcon} className="w-full px-12">
          Geri dön
        </Button>
      </Link>
    </div>
  );
}
