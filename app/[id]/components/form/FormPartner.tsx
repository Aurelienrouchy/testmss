import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogClose } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { defaultValues, formSchema, whereValues } from "./FormPartner.schema";
import { FormPartnerButtons } from "./FormPartnerButtons";

export function FormPartner() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => ({}))} className="w-full flex">
        <div>
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Tabs defaultValue={field.value} className="w-full">
                    <TabsList className="grid grid-cols-3 h-fit w-full">
                      <TabsTrigger
                        onClick={() => field.onChange("phone")}
                        value="phone"
                      >
                        <div className="flex flex-col items-center p-3 gap-2.5">
                          <Phone width={16} height={16} />
                          Telephone
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        onClick={() => field.onChange("sms")}
                        value="sms"
                      >
                        <div className="flex flex-col items-center p-3 gap-2.5">
                          <MessageCircle width={16} height={16} />
                          SMS
                        </div>
                      </TabsTrigger>
                      <TabsTrigger
                        onClick={() => field.onChange("email")}
                        value="email"
                      >
                        <div className="flex flex-col items-center p-3 gap-2.5">
                          <Mail width={16} height={16} />
                          Email
                        </div>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </FormControl>
              </FormItem>
            )}
          />
          <Separator className="my-6" />
          <FormField
            control={form.control}
            name="sure"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between gap-4 ">
                <div className="flex items-center gap-1.5">
                  <Mail width={16} height={16} />{" "}
                  <p className="text-base font-medium">
                    Vous êtes sûr de vouloir prendre rendez vous ?
                  </p>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Separator className="my-6" />

          <div className="gap-6 grid">
            <FormField
              control={form.control}
              name="where"
              render={() => (
                <FormItem>
                  <div className="mb-3.5">
                    <FormLabel className="text-base">
                      Où ça se passe ?
                    </FormLabel>
                  </div>
                  <div className="flex flex-row gap-6">
                    {whereValues.map((item) => (
                      <FormField
                        key={item}
                        control={form.control}
                        name="where"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item}
                              className="space-y-0 flex flex-row gap-1 items-center justify-center"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(item)}
                                  onCheckedChange={(checked: boolean) => {
                                    return checked
                                      ? field.onChange([...field.value, item])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== item
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <p>{item}</p>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={() => (
                <FormItem>
                  <FormLabel className="text-base">
                    Ecrire un commentaire
                  </FormLabel>
                  <FormControl>
                    <Textarea />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormPartnerButtons />
          </div>
        </div>
        <Separator orientation="vertical" className="mx-6" />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
