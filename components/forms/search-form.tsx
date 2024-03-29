import * as z from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/libs/utlils";
import useNavSearch from "@/hooks/use-nav-search";
import { useEffect } from "react";

interface SearchFormProps {
  className?: string;
  page?: boolean;
  formClass?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({
  className,
  page,
  formClass,
}) => {
  const router = useRouter();
  const navSearch = useNavSearch();

  const formSchema = z.object({
    searchQuery: z.string().optional(),
  });

  type SearchFormValues = z.infer<typeof formSchema>;
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { searchQuery: "" },
  });

  const onSubmit = (data: SearchFormValues) => {
    if (!data.searchQuery) {
      navSearch.onClose();
      router.push("/search");
    } else {
      const searchKeywords = data.searchQuery.replace(/ /g, "-");
      navSearch.onClose();
      router.push(`/search/?q=${searchKeywords}`);
    }
  };

  useEffect(() => {
    if (navSearch.isOpen) {
      form.setFocus("searchQuery");
    }
  }, [navSearch.isOpen]);

  return (
    <Form {...form}>
      <form
        method="get"
        role="search"
        autoComplete="off"
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex", formClass)}
      >
        <div
          className={cn(
            "w-full flex items-center justify-between rounded-md",
            className
          )}
        >
          <FormField
            control={form.control}
            name="searchQuery"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    type="text"
                    autoComplete="off"
                    autoCapitalize="none"
                    className={cn(
                      "focus:ring-0 focus-within:ring-0 border-none text-lg py-6 placeholder:text-black",
                      className
                    )}
                    placeholder="Search the store"
                    {...field}
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {!page && (
            <button type="submit">
              <Search className="mr-4 hover:text-gray-600" />
            </button>
          )}
        </div>
        {page && (
          <>
            <button
              type="submit"
              className="bg-logo py-2 px-5 ml-4 rounded-full bg-opacity-70 hover:bg-opacity-50"
            >
              Search
            </button>
            <span className="sr-only">Search</span>
          </>
        )}
      </form>
    </Form>
  );
};

export default SearchForm;
