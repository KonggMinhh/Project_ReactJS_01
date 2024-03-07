"use client";
import {
    CartProductType,
    SelectedImgType,
} from "@/app/product/[productId]/ProductDetails";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
interface ProductImageProps {
    cartProduct: CartProductType;
    product: any;
    handleColorSelect: (value: SelectedImgType) => void;
}

export const ProductImage: React.FC<ProductImageProps> = ({
    cartProduct,
    product,
    handleColorSelect,
}) => {
    return (
        <>
            <Link href={cartProduct.selectedImg.image}>
                <figure>
                    <Image
                        src={cartProduct.selectedImg.image}
                        alt={cartProduct.name}
                        className="w-full h-[473px] object-contain"
                        width={710}
                        height={473}
                    />
                </figure>
            </Link>
            <div className="mt-3 ">
                <Swiper
                    slidesPerView={10}
                    spaceBetween={0}
                    navigation={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {product.images.map((image: SelectedImgType) => (
                        <SwiperSlide key={image.color}>
                            <figure
                                className={`flex items-center justify-center w-[60px] h-[60px] border border-[#9e9da84d] hover:border-[#9e9da8] rounded-lg overflow-hidden transition-all ease-in-out cursor-pointer 
                                ${
                                    cartProduct.selectedImg.color ===
                                    image.color
                                        ? "border-blue hover:border-blue"
                                        : ""
                                }`}
                                onClick={() => handleColorSelect(image)}
                            >
                                <Image
                                    src={image.image}
                                    alt={image.color}
                                    width={550}
                                    height={366}
                                    className="w-14 h-9 object-contain"
                                />
                            </figure>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};
