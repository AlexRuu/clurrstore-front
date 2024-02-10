import * as z from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import postNewsletterEmail from "@/actions/post-newsletter-email";

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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="signupEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="text-black"
                    autoCapitalize="none"
                    autoComplete="none"
                    {...field}
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <button type="submit">Submit</button>
        </form>
      </Form>
    </>
  );
};

export default NewsletterForm;
