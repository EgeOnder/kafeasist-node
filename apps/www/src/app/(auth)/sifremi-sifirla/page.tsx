import React, { Suspense } from "react";

import AuthHeading from "../_components/auth-heading";
import ResetPasswordForm from "./_components/form";

export default async function ResetPasswordPage() {
  return (
    <main className="m-auto flex h-screen w-4/5 items-center justify-center">
      <div className="flex flex-1 flex-col items-center justify-center space-y-4">
        <AuthHeading
          title="Şifreni sıfırla"
          description="Hesabınızın yeni şifresini belirleyin"
        />
        <Suspense>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </main>
  );
}
