"use server"
import { endpoints } from "@/constants/endpoints"
import { api } from "@/lib/axios"
import { TAddProductSchema } from "@/schemas/addProductSchema";
import { revalidateTag } from "next/cache";

export const addProduct = async (data: TAddProductSchema) => {
    try {
        const res = await api.post(endpoints.products, data);
        if (res.data) {
            revalidateTag("products", "max");
            return res.data;
        }
    } catch (error) {
        throw new Error("errorGetProduct")
    }
}