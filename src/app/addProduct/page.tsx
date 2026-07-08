import ProductForm from "@/components/ProductForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "addProduct",
};

function AddProduct() {
  return (
    <>
        <ProductForm />
    </>
  )
}

export default AddProduct;
