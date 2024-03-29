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
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/myButton";
import { Profile } from "@/types";
import { updateUser } from "@/actions/auth";

interface UpdateProfileFormProps {
  initialData: Profile | null;
}
const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const canadaRegex = new RegExp(
  /^[abceghjklmnprstvxy][0-9][abceghjklmnprstvwxyz]\s?[0-9][abceghjklmnprstvwxyz][0-9]$/i
);

const UpdateProfileForm: React.FC<UpdateProfileFormProps> = ({
  initialData,
}) => {
  const formSchema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    phone: z
      .string()
      .min(10)
      .regex(phoneRegex, "Please enter a valid phone number.")
      .optional(),
    postalCode: z
      .string()
      .min(6, { message: "Please enter a valid postal code." })
      .max(6, { message: "Please enter a valid postal code without spaces." })
      .regex(canadaRegex, "Please enter a valid postal code.")
      .optional(),
    address1: z.string().min(6).optional(),
    address2: z.string().optional(),
    city: z.string().optional(),
    province: z.string().min(2).max(2).optional(),
    country: z.string().min(2).max(2),
  });

  type UpdateProfileFormValues = z.infer<typeof formSchema>;
  const form = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      firstName: "",
      lastName: "",
      phone: "",
      postalCode: "",
      address1: "",
      address2: "",
      city: "",
      province: "",
      country: "CA",
    },
  });

  const onUpdate = async (data: UpdateProfileFormValues) => {
    const updateData = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      postalCode: data.postalCode?.toUpperCase(),
      address1: data.address1,
      address2: data.address2,
      city: data.city,
      province: data.province,
      country: "CA",
    };
    await updateUser(updateData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onUpdate)}
        method="post"
        autoComplete="off"
        className="w-1/2 mx-auto justify-center items-center small:w-full"
      >
        <div className="flex w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-1/2 mr-2">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    autoCapitalize="off"
                    autoComplete="off"
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
                    {...field}
                    type="text"
                    autoCapitalize="off"
                    autoComplete="off"
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="mt-1">
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  maxLength={10}
                  placeholder="Please enter your phone number without spaces"
                  autoCapitalize="off"
                  autoComplete="off"
                  value={field.value}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address1"
          render={({ field }) => (
            <FormItem className="mt-1">
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  autoCapitalize="off"
                  autoComplete="off"
                  value={field.value}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address2"
          render={({ field }) => (
            <FormItem className="mt-1">
              <FormLabel>Address Details</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  autoCapitalize="off"
                  autoComplete="off"
                  value={field.value}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex w-full">
          <FormField
            control={form.control}
            name="postalCode"
            render={({ field }) => (
              <FormItem className="mt-1 w-1/2 mr-2">
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    maxLength={6}
                    autoCapitalize="off"
                    placeholder="Please enter a postal code without spaces"
                    autoComplete="off"
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="mt-1 w-1/2 ml-2">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    autoCapitalize="off"
                    autoComplete="off"
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full">
          <FormField
            control={form.control}
            name="province"
            render={({ field }) => (
              <FormItem className="mt-1 w-1/2 mr-2">
                <FormLabel>Province/Territory</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    maxLength={2}
                    type="text"
                    autoCapitalize="off"
                    autoComplete="off"
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="mt-1 w-1/2 ml-2">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    disabled
                    autoCapitalize="off"
                    autoComplete="off"
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button className="text-black small:w-full small:text-center w-full my-5 small:px-0 border bg-[#e2ecf2] hover:shadow-home-button hover:-translate-y-[3px] hover:brightness-95 uppercase">
          Save Changes
        </Button>
      </form>
    </Form>
  );
};

export default UpdateProfileForm;
