import React from "react";
import ProductDetails from "./ProductDetails";
import { product } from "@/app/utils/product";

interface IPrams {
    productId?: string;
}
const Product = ({ params }: { params: IPrams }) => {
    return <ProductDetails product={product} />;
};

export default Product;
