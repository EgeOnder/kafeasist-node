import React from "react";

import AuthHeading from "../_components/auth-heading";
import { RegisterForm } from "./_components/forms";

export default function RegisterPage() {
  return (
    <>
      <AuthHeading
        title="Ücretsiz hesap oluştur"
        description="E-posta adresinizi ve parolanızı belirleyerek hemen ücretsiz kaydolun."
      />
      <RegisterForm />
    </>
  );
}
