import { endpoints } from "@/constants/endpoints"
import { api } from "@/lib/axios"
import { TAddProductSchema } from "@/schemas/addProductSchema";

export const addProduct = async (data: TAddProductSchema) => {
    try {
        const res = await api.post(endpoints.products, data);
        if (res.data) {
            return res.data;
        }
    } catch (error) {
        throw new Error("errorGetProduct")
    }
}