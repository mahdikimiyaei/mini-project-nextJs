import ShowProducts from "@/components/ShowProducts";
import { endpoints } from "@/constants/endpoints";
import { IProducts } from "@/types/IProducts.type";

async function Home() {
  const res = await fetch(`${endpoints.baseURL}`);
  const data = await res.json() as IProducts[];

  return (
    <>
      <div className=" pt-10 pl-5 grid max-md:grid-cols-1 gap-6 max-lg:grid-cols-2 lg:grid-cols-3">
        {data && (
          data.map((product: IProducts) => (
            <ShowProducts key={product.id} product={product} />
          ))
        )}
      </div>
    </>
  )
}

export default Home;
