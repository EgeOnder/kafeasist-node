import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center gap-2">
        <Image
          src="/logo/logo.svg"
          alt="kafeasist Logo"
          width={42}
          height={25}
        />
        <h1 className="hidden font-serif text-2xl sm:block">kafeasist</h1>
      </div>
    </Link>
  );
}
