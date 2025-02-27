import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CircleCheckIcon } from "lucide-react";

import { Button, Typography } from "@kafeasist/ui";

import AuthHeading from "../../_components/auth-heading";

export default function ResetPasswordSuccessPage() {
  return (
    <>
      <AuthHeading title="Şifreniz sıfırlandı" />
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex items-center space-x-2">
          <CircleCheckIcon className="h-5 w-5" />
          <Typography as="span">
            Hesabınızın şifresi başarıyla sıfırlandı!
          </Typography>
        </div>
        <Image
          src="/penguin/happy.png"
          alt="Penguen"
          height={144}
          width={163}
        />
        <Link href="/panel">
          <Button className="w-full px-12" suffixIcon={ArrowRightIcon}>
            Panele dön
          </Button>
        </Link>
      </div>
    </>
  );
}
