"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/myButton";
import { useState } from "react";
import { resetPassword } from "@/actions/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ResetPasswordForm = () => {
  const [sent, setSent] = useState(0);
  const router = useRouter();
  const formSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Please enter a valid email" })
      .email("Please enter a valid email"),
  });

  type ResetFormValues = z.infer<typeof formSchema>;
  const form = useForm<ResetFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ResetFormValues) => {
    const resp = await resetPassword(data.email);
    setSent(resp);
    form.reset();
    router.push("/account/recover#sent", { scroll: false });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        method="post"
        autoComplete="off"
        className="w-full justify-center items-center"
      >
        <div className="w-2/5 mx-auto flex flex-col">
          {sent == 2 && (
            <div>
              <p className="py-1 mb-2 text-sm text-center text-red-500 bg-red-200 rounded-[5px]">
                No account found with that email.
              </p>
            </div>
          )}
          {sent == 3 && (
            <div>
              <p className="py-1 mb-2 text-sm text-center text-red-500 bg-red-200 rounded-[5px]">
                Unexpected error... Please try again later.
              </p>
            </div>
          )}
          {sent == 1 ? (
            <div className="border px-2 pt-2 pb-5 rounded-sm">
              <h2 className="text-center text-xl py-2">
                Password Reset Email Sent
              </h2>
              <p className="text-sm text-center">
                An email has been sent to your email address. Please click on
                the link in the message to reset your password.
                <br />
                <br />
                If you do receive the email to reset your password within the
                next few minutes, please check your spam folder.
              </p>
              <div className="text-center mt-5">
                <span className="text-sm mr-1">Back to</span>
                <Link href="/account/login" className="text-sm text-blue-500">
                  login
                </Link>
              </div>
            </div>
          ) : (
            <>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        required
                        type="text"
                        autoComplete="off"
                        autoCapitalize="none"
                        {...field}
                        value={field.value}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="text-center">
                <Button className="mr-2 text-black small:w-full small:text-center w-full my-5 small:px-0 border bg-[#e2ecf2] hover:shadow-home-button hover:-translate-y-[3px] hover:brightness-95 uppercase">
                  Submit
                </Button>
              </div>
              <div className="text-center">
                <Link href="/account/login" className="text-blue-500">
                  Cancel
                </Link>
              </div>
            </>
          )}
        </div>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
