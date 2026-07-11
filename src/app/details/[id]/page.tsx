import { endpoints } from "@/constants/endpoints";
import { IDetailsId } from "@/types/IDetails.type";
import { IProducts } from "@/types/IProducts.type";

async function Details({ params }: IDetailsId) {
    const { id } = await params;
    const res = await fetch(`${endpoints.baseURL}/${id}`)
    const data = await res.json() as IProducts;

    return (
        <div>
            {data && (
                <div className="bg-gray-50 mt-20 mb-10  flex flex-col justify-center w-[50%] m-auto p-20 font-bold text-xl font-sans rounded-2xl  gap-2 items-center shadow">
                    <p>{data.name}</p>
                    <p>{data.price}</p>
                </div>
            )}
        </div>
    )
}

export default Details;
