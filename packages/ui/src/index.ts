import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export * from "./button";
export * from "./checkbox";
export * from "./input";
export * from "./separator";
export * from "./typography";
export * from "./toast";

export {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "./form";

const cn = (...inputs: Parameters<typeof cx>) => twMerge(cx(inputs));

export { cn };
