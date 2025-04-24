"use client";
import {
    CartProductType,
    SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import React from "react";

interface SetColorProps {
    images: SelectedImgType[];
    cartProduct: CartProductType;
    handleColorSelect: (value: SelectedImgType) => void;
}
export const SetColor: React.FC<SetColorProps> = ({
    images,
    cartProduct,
    handleColorSelect,
}) => {
    return (
        <div className="flex items-center gap-x-3 mt-2">
            {images.map((image) => {
                return (
                    <button
                        onClick={() => handleColorSelect(image)}
                        key={image.color}
                        className={`w-7 h-7 max-lg:w-5 max-lg:h-5 rounded-full flex justify-center items-center ${
                            cartProduct.selectedImg.color === image.color
                                ? "outline outline-1"
                                : "outline-none"
                        }`}
                    >
                        <span
                            style={{ background: image.colorCode }}
                            className="h-6 w-6 max-lg:w-4 max-lg:h-4 rounded-full [box-shadow:inset_1px_1px_2px_rgb(0_0_0_/_0.1)]"
                        ></span>
                    </button>
                );
            })}
        </div>
    );
};
