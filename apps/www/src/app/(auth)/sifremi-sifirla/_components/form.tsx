"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleXIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Typography,
} from "@kafeasist/ui";

import { authClient } from "~/lib/auth-client";

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  if (!token) return <NotFound />;

  const [loading, setLoading] = React.useState(false);

  const formSchema = z
    .object({
      password: z.string().min(8, {
        message: "Şifreniz en az 8 karakter olmalıdır.",
      }),
      passwordConfirmation: z.string().min(8, {
        message: "Şifreniz en az 8 karakter olmalıdır.",
      }),
    })
    .superRefine(({ password, passwordConfirmation }) => {
      if (password !== passwordConfirmation) {
        form.setError("passwordConfirmation", {
          type: "manual",
          message: "Şifreler uyuşmuyor.",
        });
      }
    });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { password: "", passwordConfirmation: "" },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    const { password, passwordConfirmation } = values;

    if (password !== passwordConfirmation) {
      form.setError("passwordConfirmation", {
        message: "Şifreler uyuşmuyor.",
      });
      setLoading(false);
      return;
    }

    const { error } = await authClient.resetPassword({
      newPassword: password,
      token: token!,
    });

    setLoading(false);

    if (error) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      return;
    }

    router.push("/sifremi-sifirla/basarili");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-4/5 space-y-3 sm:w-2/3 md:w-1/2 lg:w-1/3"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Yeni şifre</FormLabel>
              <FormControl>
                <Input placeholder="••••••••••••" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tekrar yeni şifre</FormLabel>
              <FormControl>
                <Input placeholder="••••••••••••" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" loading={loading}>
          Şifremi sıfırla
        </Button>
      </form>
    </Form>
  );
}

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="flex items-center space-x-2">
        <CircleXIcon className="h-5 w-5" />
        <Typography as="span">
          Ups! Bu bağlantıya erişim izniniz bulunmamaktadır. Lütfen yeni bir
          şifre sıfırlama bağlantısı talep edin.
        </Typography>
      </div>
      <Image src="/penguin/happy.png" alt="Penguen" height={144} width={163} />
      <Link href="/sifremi-unuttum">
        <Button className="w-full px-12">
          Yeni bir şifre sıfırlama bağlantısı talep et
        </Button>
      </Link>
    </div>
  );
}
