"use client";
import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { Add, Minus } from "iconsax-react";
import React from "react";

interface SetQtyProps {
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
}
const SetQuantity: React.FC<SetQtyProps> = ({
    cartCounter,
    cartProduct,
    handleQtyIncrease,
    handleQtyDecrease,
}) => {
    return (
        <div className="flex items-center justify-center border border-grey-dark">
            {cartCounter ? null : ""}
            <button onClick={handleQtyDecrease}>
                <Minus color="#A7A7A7" />
            </button>
            <input
                className="text-center outline-none w-[30px] text-sm font-bold  max-lg:w-9"
                value={cartProduct.quantity}
                type="text"
                readOnly
            />
            <button onClick={handleQtyIncrease}>
                <Add color="#A7A7A7" />
            </button>
        </div>
    );
};

export default SetQuantity;
