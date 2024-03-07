"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    ArrangeHorizontalSquare,
    Star1,
    Gift,
    TickCircle,
    Building,
    ShoppingBag,
    ArrowUp2,
    ArrowDown2,
} from "iconsax-react";
import AnimateHeight from "react-animate-height";
import { useRouter } from "next/navigation";

import truck from "../../../../public/assets/icons/truck.svg";
import sheild from "../../../../public/assets/icons/sheild.svg";
import returnBox from "../../../../public/assets/icons/return-box.svg";
import openedBox from "../../../../public/assets/icons/opened-box.svg";
import TopCategories from "@/components/Categories/TopCategories";
import { SetColor } from "@/components/Products/SetColor";
import Button from "@/components/Button";
import { ProductImage } from "@/components/Products/ProductImage";
import InfoProduct from "@/components/Products/InfoProduct";
import StatisticsProduct from "@/components/Products/StatisticsProduct";
import { useCart } from "@/hook/useCart";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

interface ProductDetailProps {
    product: any;
}
export type CartProductType = {
    id: string;
    name: string;
    description: string;
    category: string;
    brand: string;
    selectedImg: SelectedImgType;
    quantity: number;
    price: number;
};
export type SelectedImgType = {
    color: string;
    colorCode: string;
    image: string;
};

const ProductDetails: React.FC<ProductDetailProps> = ({ product }) => {
    const router = useRouter();
    const { handleAddProductToCart, cartProducts } = useCart();
    const [isProductInCart, setIsProductInCart] = useState(false);
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: { ...product.images[0] },
        quantity: 1,
        price: product.price,
    });
    useEffect(() => {
        setIsProductInCart(false);
        if (cartProducts) {
            const existingIndex = cartProducts.findIndex(
                (item) => item.id === product.id
            );
            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }
    }, [cartProducts, product]);

    const handleColorSelect = useCallback(
        (value: SelectedImgType) => {
            setCartProduct((prev) => ({
                ...prev,
                selectedImg: value,
            }));
        },
        [setCartProduct]
    );
    const [height, setHeight] = useState<number | "auto">(60);

    // const handleQtyDecrease = useCallback(() => {
    //     if (cartProduct.quantity === 1) {
    //         return;
    //     }
    //     setCartProduct((prev) => {
    //         return { ...prev, quantity: --prev.quantity };
    //     });
    // }, [cartProduct]);
    // const handleQtyIncrease = useCallback(() => {
    //     if (cartProduct.quantity === 99) {
    //         return;
    //     }
    //     setCartProduct((prev) => {
    //         return { ...prev, quantity: ++prev.quantity };
    //     });
    // }, [cartProduct]);
    return (
        <>
            <div className="container mx-auto max-sm:px-5 lg:px-[10px] md:px-5">
                <Breadcrumb />
                <div className="flex max-lg:flex-col max-lg:items-start max-lg:gap-y-2 items-center gap-x-2 mt-2 border-b-[0.5px] border-grey-dark max-lg:border-none ">
                    <h1 className="text-2xl max-lg:text-lg font-bold">
                        {product.name}
                    </h1>
                    <div className="flex items-center gap-x-2">
                        <div className="flex items-center justify-center gap-2">
                            <Star1 size={16} color="#FEB700" />
                            <Star1 size={16} color="#FEB700" />
                            <Star1 size={16} color="#FEB700" />
                            <Star1 size={16} color="#FEB700" />
                            <Star1 size={16} color="#FEB700" />
                        </div>
                        <button className="flex items-center justify-center text-sm font-bold gap-x-1">
                            <ArrangeHorizontalSquare />
                            So sánh
                        </button>
                    </div>
                </div>
                <div className="flex  max-lg:flex-col gap-x-6 mt-5 max-lg:mt-[10px]">
                    <div className="w-3/5 max-lg:w-full">
                        <ProductImage
                            cartProduct={cartProduct}
                            product={product}
                            handleColorSelect={handleColorSelect}
                        />
                        <div className="grid grid-cols-2 grid-rows-2 max-lg:grid-cols-1 max-lg:gap-y-1 gap-2 mt-8">
                            <div className="flex items-start gap-x-[10px] p-3 bg-grey rounded">
                                <Image
                                    src={returnBox}
                                    alt="Return box"
                                    width={24}
                                    height={24}
                                />
                                <p className="text-[#111] text-sm">
                                    Lỗi là đổi máy trong 14 ngày tại các cửa
                                    hàng toàn quốc
                                </p>
                            </div>
                            <div className="flex items-start gap-x-[10px] p-3 bg-grey rounded">
                                <Image
                                    src={truck}
                                    alt="Truck"
                                    width={24}
                                    height={24}
                                />
                                <p className="text-[#111] text-sm">
                                    Ship hàng siêu tốc toàn quốc 1800.4886
                                </p>
                            </div>
                            <div className="flex items-start gap-x-[10px] p-3 bg-grey rounded">
                                <Image
                                    src={sheild}
                                    alt="Sheild"
                                    width={24}
                                    height={24}
                                />
                                <p className="text-[#111] text-sm">
                                    Bảo hành chính hãng 1 năm tại các trung tâm
                                    bảo hành hãng
                                </p>
                            </div>
                            <div className="flex items-start gap-x-[10px] p-3 bg-grey rounded">
                                <Image
                                    src={openedBox}
                                    alt="Opened Box"
                                    width={24}
                                    height={24}
                                />
                                <p className="text-[#111] text-sm">
                                    Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây
                                    lấy sim, Cáp Type C
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="max-lg:mt-3">
                        <span className="text-sm font-bold">Dung lượng :</span>
                        <span className="ml-1 text-sm">128GB</span>
                        <div className="mt-2 flex items-center gap-x-3 max-lg:gap-x-1 ">
                            <button className="flex items-center justify-center py-2 px-[10px] text-sm text-white border border-current bg-black rounded">
                                256GB
                            </button>
                            <button className="flex items-center justify-center py-2 px-[10px] text-sm text-black bg-white border border-black rounded">
                                512GB
                            </button>
                        </div>
                        <div className="flex items-center gap-x-1 mt-3 max-lg:mt-2">
                            <span className="text-sm font-bold">Màu sắc :</span>
                            <span className="text-sm">Light Green</span>
                        </div>
                        <SetColor
                            cartProduct={cartProduct}
                            images={product.images}
                            handleColorSelect={handleColorSelect}
                        />
                        <div className="flex items-center max-lg:mt-2 gap-x-5 mt-2 max-lg:gap-x-1">
                            <span className="text-2xl font-bold max-lg:text-lg">
                                19.650.000 đ
                            </span>
                            <span className="flex justify-center items-center rounded-lg bg-orange text-xs text-white w-11 h-6 max-lg:w-7 max-lg:h-4 max-lg:text-[8px]">
                                25%
                            </span>
                        </div>
                        <span className="text-xl line-through mt-2 max-lg:text-base">
                            20.550.000 đ
                        </span>
                        <div className="p-3 bg-grey rounded-lg mt-4">
                            <div className="flex items-center gap-x-1 font-bold">
                                <Gift color="#000" />
                                Ưu đãi
                            </div>
                            <AnimateHeight
                                id="view-more"
                                duration={500}
                                height={height}
                            >
                                <ul className="flex flex-col max-lg:gap-y-1">
                                    <li className="flex items-center gap-1 pl-6 max-lg:pl-4 max-lg:text-[10px]">
                                        <TickCircle
                                            size="16"
                                            className="text-white fill-green"
                                        />
                                        Tặng PMH SamCenter trị giá 8.400.000đ
                                        (SL có hạn)
                                    </li>
                                    <li className="flex items-center gap-1 pl-6 max-lg:pl-4 max-lg:text-[10px]">
                                        <TickCircle
                                            size="16"
                                            className="text-white fill-green"
                                        />
                                        Tặng PMH SamCenter trị giá 8.400.000đ
                                        (SL có hạn)
                                    </li>
                                    <li className="flex items-center gap-1 pl-6 max-lg:pl-4 max-lg:text-[10px]">
                                        <TickCircle
                                            size="16"
                                            className="text-white fill-green"
                                        />
                                        Tặng PMH SamCenter trị giá 8.400.000đ
                                        (SL có hạn)
                                    </li>
                                    <li className="flex items-center gap-1 pl-6 max-lg:pl-4 max-lg:text-[10px]">
                                        <TickCircle
                                            size="16"
                                            className="text-white fill-green"
                                        />
                                        Tặng PMH SamCenter trị giá 8.400.000đ
                                        (SL có hạn)
                                    </li>
                                    <li className="flex items-center gap-1 pl-6 max-lg:pl-4 max-lg:text-[10px]">
                                        <TickCircle
                                            size="16"
                                            className="text-white fill-green"
                                        />
                                        Tặng PMH SamCenter trị giá 8.400.000đ
                                        (SL có hạn)
                                    </li>
                                    <li className="flex items-center gap-1 pl-6 max-lg:pl-4 max-lg:text-[10px]">
                                        <TickCircle
                                            size="16"
                                            className="text-white fill-green"
                                        />
                                        Tặng PMH SamCenter trị giá 8.400.000đ
                                        (SL có hạn)
                                    </li>
                                </ul>
                            </AnimateHeight>
                            <div className="flex mt-2">
                                <button
                                    className="flex items-center gap-x-1 text-sm max-lg:text-xs font-bold text-blue"
                                    aria-expanded={height !== 0}
                                    aria-controls="view-more"
                                    onClick={() =>
                                        setHeight(
                                            height === "auto" ? 60 : "auto"
                                        )
                                    }
                                >
                                    {height === "auto" ? (
                                        <>
                                            <ArrowUp2
                                                size={24}
                                                color="#2192FF"
                                            />
                                            Thu gọn
                                        </>
                                    ) : (
                                        <>
                                            <ArrowDown2
                                                size={24}
                                                color="#2192FF"
                                            />
                                            Xem thêm ưu đãi
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-[54px] mb-5 max-lg:mt-3 max-lg:mb-2">
                            <Building />
                            <Link href="/" className="max-lg:text-xs">
                                Xem cửa hàng có sẵn sản phẩm
                            </Link>
                        </div>
                        {isProductInCart ? (
                            <>
                                <Button
                                    label="Mua ngay"
                                    icon={ShoppingBag}
                                    onClick={() => router.push("/cart")}
                                />
                            </>
                        ) : (
                            <>
                                <Button
                                    label="Mua ngay"
                                    icon={ShoppingBag}
                                    onClick={() =>
                                        handleAddProductToCart(cartProduct)
                                    }
                                />
                            </>
                        )}

                        <div className="flex gap-x-2 mt-3">
                            <Button label="Trả góp" border onClick={() => {}} />
                            <Button
                                label="Thu cũ đổi mới"
                                border
                                onClick={() => {}}
                            />
                        </div>
                    </div>
                </div>
                <TopCategories
                    title="Sản phẩm liên quan"
                    custom="max-lg:-mx-5"
                />
                <div className="flex justify-start gap-x-6 mt-6 max-lg:flex-col">
                    <InfoProduct product={product} />
                    <StatisticsProduct />
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
