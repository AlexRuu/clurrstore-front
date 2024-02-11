import * as z from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import postNewsletterEmail from "@/actions/post-newsletter-email";
import Button from "../ui/button";

const NewsletterForm = () => {
  const formSchema = z.object({
    signupEmail: z.string().min(1).email("Please enter a valid email"),
  });

  type NewsLetterValue = z.infer<typeof formSchema>;

  const form = useForm<NewsLetterValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      signupEmail: "",
    },
  });

  const onSubmit = async (data: NewsLetterValue) => {
    try {
      postNewsletterEmail(data.signupEmail);
    } catch (error) {}
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full md:px-0"
        >
          <FormField
            control={form.control}
            name="signupEmail"
            render={({ field }) => (
              <FormItem className="w-full flex justify-center items-center border-b md:pt-3 pt-5">
                <FormControl>
                  <div className="w-3/4 relative">
                    <Input
                      type="email"
                      className="pl-0 block text-white bg-transparent placeholder:text-white border-none rounded-none peer"
                      autoCapitalize="none"
                      placeholder=" "
                      autoComplete="none"
                      {...field}
                      value={field.value}
                    />
                    <FormLabel className="absolute text-sm duration-200 transform -translate-y-4 scale-75 top-3 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 pointer-events-none">
                      Email
                    </FormLabel>
                  </div>
                </FormControl>
                <Button
                  type="submit"
                  className="relative p-[0_0_10px_0] text-sm rounded-none w-1/4 flex justify-end mr-0"
                >
                  Sign Up
                </Button>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
};

export default NewsletterForm;
