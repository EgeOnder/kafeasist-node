import AuthNavbar from "./_components/auth-navbar";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <AuthNavbar />
      <main className="m-auto flex w-4/5 items-center justify-center py-24 md:h-screen md:py-0">
        <div className="flex flex-1 flex-col items-center justify-center space-y-4">
          {children}
        </div>
      </main>
    </>
  );
}
