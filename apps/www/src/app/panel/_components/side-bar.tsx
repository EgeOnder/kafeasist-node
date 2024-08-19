"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BadgeCheck,
  BarChart3,
  CircleHelp,
  Croissant,
  Home,
  LayoutGrid,
  Link as LinkIcon,
  LogOut,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardTitle,
  cn,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Skeleton,
  Tooltip,
} from "@kafeasist/ui";

import { useCompany } from "~/hooks/use-company";
import { api } from "~/utils/api";
import { getInitials } from "~/utils/get-initials";

type Navigation =
  | "dashboard"
  | "tables"
  | "products"
  | "users"
  | "analytics"
  | "integrations"
  | "companies"
  | "billing";

const navigationItems: {
  id: Navigation;
  label: string;
  href: string;
  icon: LucideIcon;
}[] = [
  {
    id: "dashboard",
    label: "Kontrol paneli",
    href: "/panel",
    icon: Home,
  },
  {
    id: "tables",
    label: "Masalar",
    href: "/panel/masalar",
    icon: LayoutGrid,
  },
  {
    id: "products",
    label: "Ürünler",
    href: "/panel/urunler",
    icon: Croissant,
  },
  {
    id: "users",
    label: "Kullanıcılar",
    href: "/panel/kullanicilar",
    icon: Users,
  },
  {
    id: "analytics",
    label: "Analizler",
    href: "/panel/analiz",
    icon: BarChart3,
  },
  {
    id: "integrations",
    label: "Entegrasyonlar",
    href: "/panel/entegrasyonlar",
    icon: LinkIcon,
  },
];

interface SideBarProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  emailVerified?: boolean;
}

export function SideBar({
  firstName,
  lastName,
  email,
  emailVerified,
}: SideBarProps) {
  const pathname = usePathname();
  const { company } = useCompany();

  return (
    <div className="sticky left-0 z-10 min-h-screen border-r border-border bg-secondary px-4 md:min-w-64 lg:min-w-80">
      <div className="sticky left-0 top-0 flex h-screen flex-col justify-between py-4">
        <nav className="flex w-full flex-col items-center justify-start space-y-1 pt-20">
          {navigationItems.map((item) => {
            const path = item.href.split("/")[2] ?? "panel";
            let isActive = pathname.startsWith("/panel/" + path);

            if (path === "panel" && pathname === "/panel") isActive = true;

            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "flex w-full items-center space-x-2 rounded-lg px-4 py-2 text-left text-sm transition-colors duration-150 ease-in-out hover:bg-muted",
                  isActive && "bg-muted",
                )}
              >
                <item.icon size={20} />
                <span className="hidden truncate text-sm font-bold md:block">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        <div className="space-y-4">
          {company?.plan === "FREE" && <Upgrade />}

          <UserMenu
            firstName={firstName}
            lastName={lastName}
            email={email}
            emailVerified={emailVerified}
          />
        </div>
      </div>
    </div>
  );
}

function Upgrade() {
  return (
    <Card className="hidden md:block md:max-w-64 lg:max-w-80">
      <CardTitle>PRO Plan&apos;a Yükselt</CardTitle>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Daha derin yapay zeka destekli analizler, daha fazla entegrasyon, daha
          fazla kullanıcı ve özel destek.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="fit" className="w-full">
          ✨ Yükselt ✨
        </Button>
      </CardFooter>
    </Card>
  );
}

function UserMenu({ firstName, lastName, email, emailVerified }: SideBarProps) {
  const name = firstName && lastName ? `${firstName} ${lastName}` : undefined;

  const { mutateAsync, isPending } = api.auth.logout.useMutation();

  const handleLogout = async () => {
    await mutateAsync();

    window.location.href = "/";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex w-full cursor-pointer items-center space-x-2.5 rounded-lg p-2 duration-150 ease-in-out hover:bg-muted/50">
          {name ? (
            <Avatar alt={name} placeholder={getInitials(name)} />
          ) : (
            <Skeleton rounded className="h-10 w-10" />
          )}
          <div className="hidden flex-col items-start justify-center md:flex">
            {name ? (
              <span className="truncate font-bold md:max-w-32 lg:max-w-48">
                {name}
              </span>
            ) : (
              <Skeleton className="h-5 w-24" />
            )}
            <div className="flex items-center space-x-2">
              {email ? (
                <>
                  <span className="truncate text-xs text-muted-foreground md:max-w-32 lg:max-w-48">
                    {email}
                  </span>
                  {emailVerified && (
                    <Tooltip text="Doğrulanmış hesap">
                      <BadgeCheck className="h-3 w-3 opacity-50" />
                    </Tooltip>
                  )}
                </>
              ) : (
                <Skeleton className="h-3 w-48" />
              )}
            </div>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-16 md:w-40 lg:w-72">
        <Link href="/panel/profil">
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            Profil
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <CircleHelp className="mr-2 h-4 w-4" />
          Destek
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="font-bold text-destructive"
          onClick={handleLogout}
          loading={isPending}
          noselect
        >
          <LogOut className="mr-2 h-4 w-4" />
          Çıkış yap
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
