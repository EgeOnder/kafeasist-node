import AuthNavbar from "./_components/auth-navbar";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <AuthNavbar />

      {children}
    </>
  );
}
