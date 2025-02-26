import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, CircleXIcon } from "lucide-react";

import { Button, Typography } from "@kafeasist/ui";

import AuthHeading from "./(auth)/_components/auth-heading";

const notFoundMessages = [
  {
    title: "Ups! Kaybolmuş gibisiniz.",
    description: "Ya da bu sayfa kaybolmuş olabilir.",
  },
  {
    title: "Sayfa tatilde!",
    description:
      "Aradığınız sayfa şu an müsait değil. Belki de plajda güneşleniyor. 🏖️",
  },
  {
    title: "Sayfa kaçtı!",
    description:
      "Sanırım bu sayfa bizden saklanıyor. İsterseniz başka bir yere bakalım. 👀",
  },
  {
    title: "404: Burada bir şey yok!",
    description: "Ama belki başka bir yerde bir sürpriz vardır. 🎁",
  },
  {
    title: "404: Burada bir şey yok…",
    description:
      "Ama belki biraz kazarsanız gizli bir hazine bulabilirsiniz! 💰",
  },
  {
    title: "Ups! Burası boş!",
    description:
      "Sanırım yanlış bir dönemeç aldık. Geri dönüp yeniden deneyelim.",
  },
  {
    title: "404: Kayıp sayfa bulundu… Şaka şaka!",
    description: "Aslında hâlâ kayıp. Ama sizi eğlendirmek istedik. 😁",
  },
  {
    title: "Kayıp sayfa arama ekibi yolda!",
    description: "Ama o zamana kadar başka bir sayfaya göz atın.",
  },
];

export default async function NotFound() {
  const { title, description } =
    notFoundMessages[Math.floor(Math.random() * notFoundMessages.length)]!;

  return (
    <main className="m-auto flex h-screen w-4/5 items-center justify-center">
      <div className="flex flex-1 flex-col items-center justify-center space-y-4">
        <AuthHeading title={title} />
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex items-center space-x-2">
            <CircleXIcon className="h-5 w-5" />
            <Typography as="span">{description}</Typography>
          </div>
          <Image
            src="/penguin/happy-2.png"
            alt="Penguen"
            height={144}
            width={163}
          />
          <Link href="/panel">
            <Button className="w-full px-12" suffixIcon={ArrowRightIcon}>
              Panele dön
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
