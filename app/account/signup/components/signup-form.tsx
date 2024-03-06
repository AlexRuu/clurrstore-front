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
import Link from "next/link";
import { signup } from "@/actions/auth";

const SignUpForm = () => {
  const formSchema = z
    .object({
      firstName: z.string().min(1),
      lastName: z.string().min(1),
      email: z.string().min(1).email("Please enter a valid email"),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
    })
    .superRefine(({ confirmPassword, password }, ctx) => {
      if (confirmPassword !== password) {
        ctx.addIssue({
          code: "custom",
          message: "The passwords did not match",
        });
      }
    });

  type SignUpFormValues = z.infer<typeof formSchema>;
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSignup = async (data: SignUpFormValues) => {
    await signup(data.firstName, data.lastName, data.email, data.password);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSignup)}
        method="post"
        autoComplete="off"
        className="w-full justify-center items-center"
      >
        <div className="w-2/5 mx-auto flex flex-col">
          <div className="flex w-full">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-1/2 mr-2">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
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
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-1/2 ml-2">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
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
          </div>
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      autoComplete="off"
                      autoCapitalize="none"
                      {...field}
                      value={field.value}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="off"
                      autoCapitalize="none"
                      {...field}
                      value={field.value}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="off"
                      autoCapitalize="none"
                      {...field}
                      value={field.value}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="text-center">
            <Button className="mr-2 text-black small:w-full small:text-center w-full my-5 small:px-0 border bg-[#e2ecf2] hover:shadow-home-button hover:-translate-y-[3px] hover:brightness-95 uppercase">
              Sign Up
            </Button>
          </div>
          <div className="flex text-center mx-auto pt-4">
            <p className="mr-1">Already a member?</p>
            <Link href="/account/login" className="text-blue-500">
              Sign In Here
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
