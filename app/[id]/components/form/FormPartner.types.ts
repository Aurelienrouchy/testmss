import { UseFormReturn } from "react-hook-form";

export type FormPartnerValues = {
  comment: string;
  type: "phone" | "sms" | "email";
  date: Date;
  sure: boolean;
  europe: boolean;
  asia: boolean;
  where: string[];
  hour: Date;
};

export type FormPartner = UseFormReturn<FormPartnerValues, any, undefined>;
