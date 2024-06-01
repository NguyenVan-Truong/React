
import React from "react";
import ProductImage from "./ProductImage";

const ProductItem = ({ product }) => {
    return (
        
                <ProductImage img={product.img} />
        
    );
};

export default ProductItem;

