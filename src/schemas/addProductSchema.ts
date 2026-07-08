import z from "zod";

export const addProductSchema = z.object({
    name: z.string().trim().min(1, "وارد کردن نام محصول الزامی است").min(5, "نام محصول نمیتواند کمتر از 5 کاراکتر باشد"),
    price: z.number({ error: "وارد کردن قیمت محصول الزامی است" }).positive("قیمت محصول نمیتواند یک عدد منفی باشد").min(50000, "قیمت محصول حداقل باید 50000 تومان باشد")
})

export type TAddProductSchema = z.infer<typeof addProductSchema>;