import React from "react";

import AuthHeading from "../_components/auth-heading";
import { RegisterForm } from "./_components/forms";

export interface RegisterSearchParams {
  step: string;
  email?: string;
}

interface RegisterPageProps {
  searchParams: Promise<RegisterSearchParams>;
}

export default async function RegisterPage({
  searchParams,
}: RegisterPageProps) {
  return (
    <main className="m-auto flex h-screen w-4/5 items-center justify-center">
      <div className="flex flex-1 flex-col items-center justify-center space-y-4">
        <AuthHeading
          title="Ücretsiz hesap oluştur"
          description="E-posta adresinizi ve parolanızı belirleyerek hemen ücretsiz kaydolun."
        />
        <RegisterForm />
      </div>
    </main>
  );
}
