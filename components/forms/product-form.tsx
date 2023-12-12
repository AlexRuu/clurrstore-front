import * as z from "zod";
import { useForm } from "react-hook-form";

import { Design, Product, Style } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import Button from "../ui/button";
import useCart from "@/hooks/use-cart";
import getDesign from "@/actions/get-design";
import getStyle from "@/actions/get-style";

interface initialData {
  id: Product["id"];
  title: Product["title"];
  price: Product["price"];
  image: Product["image"][0];
  designId: Product["designId"];
  styleId: Product["styleId"];
}

interface ProductFormProps extends initialData {
  design: Design[];
  style: Style[];
}

const ProductForm: React.FC<ProductFormProps> = ({
  id,
  title,
  price,
  image,
  designId,
  styleId,
  design,
  style,
}) => {
  const cart = useCart();

  const formSchema = z
    .object({
      designId: z.string().min(1).optional(),
      styleId: z.string().min(1).optional(),
    })
    .superRefine(({ designId, styleId }, ctx) => {
      if (design.length > 0 && designId === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Design is required",
          path: ["designId"],
        });
      }
      if (style.length > 0 && styleId === undefined) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Style is required",
          path: ["styleId"],
        });
      }
    });

  type ProductFormValues = z.infer<typeof formSchema>;

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { designId, styleId }
      ? { designId, styleId }
      : {
          designId: "",
          styleId: "",
        },
  });

  const onSubmit = async (data: ProductFormValues) => {
    let designName;
    let styleName;
    if (data.designId) {
      designName = await getDesign(data.designId);
    }
    if (data.styleId) {
      styleName = await getStyle(data.styleId);
    }

    cart.addItem(
      id,
      title,
      image.url,
      price,
      data.designId,
      designName?.title,
      data.styleId,
      styleName?.title
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
        {design.length > 1 && (
          <FormField
            control={form.control}
            name="designId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Design: </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a Design" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {design.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {style.length > 1 && (
          <FormField
            control={form.control}
            name="styleId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style: </FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a Style" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {style.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <Button type="submit" className="bg-black mt-6">
          Add to Cart
        </Button>
      </form>
    </Form>
  );
};

export default ProductForm;
