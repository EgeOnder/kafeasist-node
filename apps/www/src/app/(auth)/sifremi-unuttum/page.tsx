import React from "react";

import AuthHeading from "../_components/auth-heading";
import ForgotPasswordForm from "./_components/form";

export default async function ForgotPasswordPage() {
  return (
    <main className="m-auto flex h-screen w-4/5 items-center justify-center">
      <div className="flex flex-1 flex-col items-center justify-center space-y-4">
        <AuthHeading
          title="Şifreni sıfırla"
          description="kafeasist hesabınıza ait e-posta adresini girin ve şifrenizi sıfırlayın."
        />
        <ForgotPasswordForm />
      </div>
    </main>
  );
}
