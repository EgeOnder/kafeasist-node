"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Typography,
} from "@kafeasist/ui";

import { authClient } from "~/lib/auth-client";

export default function ForgotPasswordForm() {
  const [loading, setLoading] = React.useState(false);

  const formSchema = z.object({
    email: z.string().email({
      message: "Geçerli bir e-posta adresi girin.",
    }),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    const { email } = values;
    const { error } = await authClient.forgetPassword({
      email,
      redirectTo: "/sifremi-sifirla",
    });

    setLoading(false);

    if (error) {
      toast.error("Bir hata oluştu. Lütfen tekrar deneyin.");
      return;
    }

    toast.success("Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.");
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

        <Button type="submit" className="w-full" loading={loading}>
          Şifre sıfırlama bağlantısı gönder
        </Button>

        <Typography variant="small" className="text-muted-foreground">
          Butona basarak kafeasist hesabınıza ait e-posta adresine şifre
          sıfırlama bağlantısı gönderirsiniz.
        </Typography>
      </form>
    </Form>
  );
}
