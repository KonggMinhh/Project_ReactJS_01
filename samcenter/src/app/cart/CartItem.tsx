"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash } from "iconsax-react";
import { CartProductType } from "../product/[productId]/ProductDetails";

import Button from "@/components/Button";
import FormattedPrice from "@/components/Categories/FormattedPrice";
import { useCart } from "@/hook/useCart";
import SetQuantity from "@/components/Products/SetQuantity";
interface CartItemProps {
    item: CartProductType;
}
const CartItem: React.FC<CartItemProps> = ({ item }) => {
    const {
        handleRemoveCartProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
    } = useCart();
    return (
        <>
            <figure className="flex">
                <Link href={`/product/${item.id}`}>
                    <figure className="w-20 h-20 object-cover max-lg:w-[90px] max-lg:h-[90px]">
                        <Image
                            src={item.selectedImg.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-contain"
                        />
                    </figure>
                </Link>
            </figure>
            <div className="flex items-center max-lg:flex-col max-lg:items-start">
                <div className="flex flex-col gap-y-1">
                    <Link
                        href={`/product/${item.id}`}
                        className="text-base font-bold hover:text-blue transition-colors ease-in-out whitespace-nowrap max-lg:text-xs"
                    >
                        {item.name}
                    </Link>

                    <Link
                        className="text-xs font-bold text-blue hover:underline max-lg:text-[10px]"
                        href={`/product/${item.id}`}
                    >
                        Chỉnh sửa
                    </Link>
                </div>
                <div className="ml-[138px] flex gap-x-2 items-center max-lg:ml-0 max-lg:mt-2">
                    <SetQuantity
                        cartProduct={item}
                        cartCounter={true}
                        handleQtyDecrease={() => {
                            handleCartQtyDecrease(item);
                        }}
                        handleQtyIncrease={() => handleCartQtyIncrease(item)}
                    />
                    <Button
                        icon={Trash}
                        custom="bg-white border-none p-0 !text-red max-lg:py-0"
                        onClick={() => handleRemoveCartProductFromCart(item)}
                    />
                </div>
                <div className="ml-[76px] max-lg:ml-0 max-lg:flex max-lg:flex-col max-lg:mt-2 max-lg:items-start">
                    <div className="flex gap-x-2 items-center max-lg:gap-x-3">
                        <span className="text-base font-bold max-lg:text-xs">
                            <FormattedPrice amount={item?.price} />
                        </span>
                        <span className="w-[43px] h-4 text-white text-xs text-center bg-orange rounded-lg max-lg:w-7 max-lg:text-[8px]">
                            25%
                        </span>
                    </div>
                    <span className="text-base line-through max-lg:mt-1 max-lg:text-[10px] ">
                        <FormattedPrice amount={item?.price} />
                    </span>
                </div>
            </div>
        </>
    );
};

export default CartItem;
