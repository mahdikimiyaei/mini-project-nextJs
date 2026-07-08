"use client"

import { addProductSchema, TAddProductSchema } from "@/schemas/addProductSchema";
import { addProduct } from "@/services/addProduct.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import type { FieldErrors } from "react-hook-form";
import { querykeys } from "@/constants/querykeys";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/routes";

function ProductForm() {
    const route = useRouter();
    const queryClient = useQueryClient()
    const { register, handleSubmit } = useForm({ resolver: zodResolver(addProductSchema) })
    const { mutate, isPending } = useMutation({
        mutationFn: addProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: querykeys.products
            })
            toast.success("با موفقیت ثبت شد")
            route.push(routes.home);
        },
        onError: () => {
            toast.error("خطا")
        }
    })

    const onSubmit = (data: TAddProductSchema) => {
        mutate(data);
    }

    const onErrorSchema = (errors: FieldErrors<TAddProductSchema>) => {
        const firstError = Object.values(errors)[0];
        if (firstError?.message) {
            toast.error(firstError?.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit(onSubmit, onErrorSchema)} className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg space-y-6">
                <h2 className="text-2xl font-bold text-center">
                    افزودن محصول
                </h2>

                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-medium">
                        نام محصول
                    </label>

                    <input
                        {...register("name")}
                        id="name"
                        type="text"
                        placeholder="نام محصول را وارد کنید..."
                        className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="price" className="font-medium">
                        قیمت محصول
                    </label>

                    <input
                        {...register("price", { valueAsNumber: true })}
                        id="price"
                        type="number"
                        pattern="[0-9]*"
                        placeholder="قیمت محصول را وارد کنید..."
                        className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    {isPending ? "loading..." : "ثبت محصول"}
                </button>
            </form>
        </div>
    );
}

export default ProductForm;