"use client"
import { routes } from "@/constants/routes";
import { IShowProducts } from "@/types/IProducts.type";
import { useRouter } from "next/navigation";

function ShowProducts({ product, }: IShowProducts) {
    const route = useRouter();

    return (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-400 cursor-pointer">
            <div className="flex flex-col gap-4">
                <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                        {product.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                        نام محصول
                    </p>
                </div>

                <div className="h-px bg-gray-200" />

                <div>
                    <span className="text-sm text-gray-500">
                        قیمت
                    </span>

                    <p className="mt-1 text-2xl font-bold text-indigo-600">
                        {product.price} تومان
                    </p>
                    <div className="pt-3 text-red-500">
                        <button onClick={() => route.push(`${routes.details}/${product.id}`)} className=" p-2 text-lg font-bold rounded-2xl shadow cursor-pointer hover:opacity-[0.6] transition-opacity">جزعیات</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowProducts;