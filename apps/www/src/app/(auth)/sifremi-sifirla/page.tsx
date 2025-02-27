import React, { Suspense } from "react";

import AuthHeading from "../_components/auth-heading";
import ResetPasswordForm from "./_components/form";

export default function ResetPasswordPage() {
  return (
    <>
      <AuthHeading
        title="Şifreni sıfırla"
        description="Hesabınızın yeni şifresini belirleyin"
      />
      <Suspense>
        <ResetPasswordForm />
      </Suspense>
    </>
  );
}
