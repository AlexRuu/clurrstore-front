import * as z from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const SearchForm = () => {
  const formSchema = z.object({
    searchQuery: z.string().optional(),
  });

  type ProductFormValues = z.infer<typeof formSchema>;
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { searchQuery: "" },
  });

  return (
    <Form {...form}>
      <form>
        <div className="w-full flex items-center bg-gray-300 justify-between rounded-md">
          <FormField
            control={form.control}
            name="searchQuery"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="text"
                    autoComplete="off"
                    autoCorrect="off"
                    className="focus:ring-0 focus-within:ring-0 border-none text-lg py-6 bg-gray-300 placeholder:text-black"
                    placeholder="Search the store"
                    {...field}
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <button>
            <Search className="mr-4 hover:text-gray-600" />
          </button>
        </div>
      </form>
    </Form>
  );
};

export default SearchForm;
