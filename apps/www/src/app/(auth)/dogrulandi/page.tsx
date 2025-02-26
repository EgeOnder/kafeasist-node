import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CircleCheckIcon } from "lucide-react";

import { Button, Typography } from "@kafeasist/ui";

import AuthHeading from "../_components/auth-heading";

export default async function EmailVerificationSuccessPage() {
  return (
    <main className="m-auto flex h-screen w-4/5 items-center justify-center">
      <div className="flex flex-1 flex-col items-center justify-center space-y-4">
        <AuthHeading title="Hesabınız doğrulandı" />
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex items-center space-x-2">
            <CircleCheckIcon className="h-5 w-5" />
            <Typography as="span">Hesabınız başarıyla doğrulandı!</Typography>
          </div>
          <Image
            src="/penguin/happy.png"
            alt="Penguen"
            height={144}
            width={163}
          />
          <Link href="/panel">
            <Button className="w-full px-12" suffixIcon={ArrowRightIcon}>
              Panele gir
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
