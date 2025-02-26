"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon, ArrowRightIcon, WandSparklesIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
  Typography,
} from "@kafeasist/ui";

import { authClient } from "~/lib/auth-client";

function EmailPasswordForm() {
  const [loading, setLoading] = React.useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email") ?? "";

  const formSchema = z.object({
    email: z.string().email({
      message: "Geçerli bir e-posta adresi girin.",
    }),
    password: z.string().nonempty("Lütfen şifrenizi girin."),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email,
      password: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);

    const { email, password } = values;

    const { error } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast.error("E-posta adresi veya şifre hatalı.");
      return;
    }

    router.push("/panel");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-4/5 space-y-3 sm:w-2/3 md:w-1/2 lg:w-1/3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-posta</FormLabel>
              <FormControl>
                <Input placeholder="ahmet@kafeasist.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Şifre</FormLabel>
              <FormControl>
                <Input placeholder="••••••••••••" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="rememberMe" defaultChecked />
            <label htmlFor="rememberMe">
              <Typography
                variant="small"
                className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Beni hatırla
              </Typography>
            </label>
          </div>
          <Link href="/sifremi-unuttum">
            <Typography variant="small" className="text-link">
              Şifremi unuttum
            </Typography>
          </Link>
        </div>
        <Button type="submit" className="w-full" loading={loading}>
          Giriş yap
        </Button>
        <div className="w-full items-center justify-between sm:flex">
          <Button
            type="button"
            variant="ghost"
            prefixIcon={ArrowLeftIcon}
            className="w-full p-0 sm:w-auto"
            onClick={() =>
              router.push("/giris?email=" + form.getValues("email"))
            }
          >
            Geri dön
          </Button>
          <Link href="/kayit">
            <Button
              type="button"
              variant="ghost"
              suffixIcon={ArrowRightIcon}
              className="w-full p-0 sm:w-auto"
            >
              Ücretsiz hesap oluştur
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
}

function MagicLinkForm() {
  const [loading, setLoading] = React.useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const email = searchParams.get("email") ?? "";

  const formSchema = z.object({
    email: z.string().email({
      message: "Geçerli bir e-posta adresi girin.",
    }),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    const { email } = values;
    const { error } = await authClient.signIn.magicLink({
      email,
      callbackURL: "/panel",
    });

    setLoading(false);

    if (error) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      return;
    }

    router.push("/giris?type=sent");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-4/5 space-y-3 sm:w-2/3 md:w-1/2 lg:w-1/3"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="ahmet@kafeasist.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="button"
          variant="outline"
          suffixIcon={ArrowRightIcon}
          className="w-full"
          onClick={() =>
            router.push("/giris?type=password&email=" + form.getValues("email"))
          }
        >
          Devam et
        </Button>

        <Separator text="Veya hızlıca oturum açın" />

        <Button
          type="submit"
          prefixIcon={WandSparklesIcon}
          className="w-full"
          loading={loading}
        >
          Şifresiz giriş yap
        </Button>
      </form>
    </Form>
  );
}

export { EmailPasswordForm, MagicLinkForm };
