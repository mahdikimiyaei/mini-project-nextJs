import { endpoints } from "@/constants/endpoints";
import { api } from "@/lib/axios";
import { IDetailsId } from "@/types/IDetails.type";
import { IdataRes, } from "@/types/IProducts.type";

async function Details({ params }: IDetailsId) {
    const { id } = await params;
    const { data } = await api.get(`${endpoints.products}/${id}`) as IdataRes;

    return (
        <div>
            {data && (
                <div className="bg-gray-50 mt-50 flex flex-col justify-center w-80 m-auto p-20 font-bold text-xl font-sans rounded-2xl  gap-2 items-center shadow">
                    <p>{data.name}</p>
                    <p>{data.price}</p>
                </div>
            )}
        </div>
    )
}

export default Details;
