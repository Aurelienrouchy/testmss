import { z } from "zod";

type FormType = "phone" | "sms" | "email";
export const formSchema = z.object({
  type: z.enum(["phone", "sms", "email"]),
  sure: z.boolean(),
  date: z.date(),
  europe: z.boolean(),
  asia: z.boolean(),
  where: z.array(z.string()).refine((value) => value.some((item) => item)),
  hour: z.date(),
  comment: z.string(),
});

export const whereValues = ["Europe", "Asia"];

export const defaultValues = {
  type: "phone" as FormType,
  sure: true,
  date: new Date(),
  hour: new Date(),
  where: whereValues,
  comment: "",
};
