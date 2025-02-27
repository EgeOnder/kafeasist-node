import { SquareArrowOutUpRightIcon } from "lucide-react";

import { Button } from "@kafeasist/ui";

import Logo from "~/components/logo";

export default function AuthNavbar() {
  return (
    <nav className="left-0 right-0 top-0 z-10 md:fixed">
      <header className="flex items-center justify-between px-8 py-5">
        <Logo />
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="text-muted-foreground"
            suffixIcon={SquareArrowOutUpRightIcon}
          >
            Destek
          </Button>
          <Button variant="outline" className="rounded-lg">
            Kayıt ol
          </Button>
        </div>
      </header>
    </nav>
  );
}
