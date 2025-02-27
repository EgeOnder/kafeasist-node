import React from "react";

import AuthHeading from "../_components/auth-heading";
import ForgotPasswordForm from "./_components/form";

export default async function ForgotPasswordPage() {
  return (
    <>
      <AuthHeading
        title="Şifreni sıfırla"
        description="kafeasist hesabınıza ait e-posta adresini girin ve şifrenizi sıfırlayın."
      />
      <ForgotPasswordForm />
    </>
  );
}
