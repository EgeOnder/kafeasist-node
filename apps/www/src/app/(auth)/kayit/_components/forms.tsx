"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Divide,
  WandSparklesIcon,
} from "lucide-react";
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
  Typography,
} from "@kafeasist/ui";

import { authClient } from "~/lib/auth-client";

function RegisterForm() {
  const [step, setStep] = React.useState<0 | 1>(0);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  if (step === 0)
    return (
      <StepOne
        firstName={firstName}
        lastName={lastName}
        email={email}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setStep={setStep}
      />
    );

  return (
    <StepTwo
      firstName={firstName}
      lastName={lastName}
      email={email}
      setStep={setStep}
    />
  );
}

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<0 | 1>>;
}

function StepOne({
  firstName,
  lastName,
  email,
  setFirstName,
  setLastName,
  setEmail,
  setStep,
}: FormProps) {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const formSchema = z.object({
    firstName: z.string().nonempty("Lütfen adınızı girin."),
    lastName: z.string().nonempty("Lütfen soyadınızı girin."),
    email: z.string().email("Lütfen geçerli bir e-posta adresi girin."),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName,
      lastName,
      email,
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);

    const { firstName, lastName, email } = values;

    await form.trigger();

    setLoading(false);

    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setStep(1);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-4/5 space-y-3 sm:w-2/3 md:w-1/2 lg:w-1/3"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ad</FormLabel>
              <FormControl>
                <Input placeholder="Ahmet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Soyad</FormLabel>
              <FormControl>
                <Input placeholder="Yılmaz" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <div className="flex w-full items-center justify-between">
          <Typography variant="small">Zaten hesabın var mı?</Typography>
          <Link href="/giris">
            <div className="flex items-center space-x-2 text-link">
              <Typography variant="small">Giriş yap</Typography>
              <ArrowRightIcon className="h-4 w-4" />
            </div>
          </Link>
        </div>
        <Button
          type="submit"
          className="w-full"
          loading={loading}
          suffixIcon={ArrowRightIcon}
        >
          Devam et
        </Button>
      </form>
    </Form>
  );
}

function StepTwo({
  firstName,
  lastName,
  email,
  setStep,
}: Omit<FormProps, "setFirstName" | "setLastName" | "setEmail">) {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  const formSchema = z
    .object({
      password: z.string().min(8, "Şifreniz en az 8 karakter olmalıdır."),
      passwordConfirmation: z
        .string()
        .min(8, "Şifreniz en az 8 karakter olmalıdır."),
    })
    .superRefine(({ password, passwordConfirmation }) => {
      if (password !== passwordConfirmation) {
        form.setError("passwordConfirmation", {
          message: "Şifreler uyuşmuyor.",
        });
      }
    });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
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

    const { error } = await authClient.signUp.email({
      name: `${firstName} ${lastName}`,
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Hesabınız başarıyla oluşturuldu.");
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
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tekrar şifre</FormLabel>
              <FormControl>
                <Input placeholder="••••••••••••" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-2">
          <Checkbox id="rememberMe" />
          <label htmlFor="rememberMe">
            <Typography
              variant="small"
              className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              E-posta adresimi kullanarak beni yeni güncellemelerden haberdar
              et.
            </Typography>
          </label>
        </div>
        <Button type="submit" className="w-full" loading={loading}>
          Hesap oluştur
        </Button>
        <div className="my-4">
          <Typography variant="small" className="text-muted-foreground">
            Hesap oluştur butonuna basarak kafeasist{" "}
            <Link href="/kullanici-sozlesmesi" target="_blank">
              <Typography as="span" className="text-link" variant="small">
                Kullanıcı Sözleşmesini
              </Typography>
            </Link>{" "}
            ve{" "}
            <Link href="/gizlilik-politikası" target="_blank">
              <Typography as="span" className="text-link" variant="small">
                Gizlilik Politikasını
              </Typography>
            </Link>{" "}
            kabul etmiş olursunuz.
          </Typography>
        </div>
        <Button
          type="button"
          className="p-0"
          variant="ghost"
          prefixIcon={ArrowLeftIcon}
          onClick={() => setStep(0)}
        >
          Geri dön
        </Button>
      </form>
    </Form>
  );
}

export { RegisterForm };
