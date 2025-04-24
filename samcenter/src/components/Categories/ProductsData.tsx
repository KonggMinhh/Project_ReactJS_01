"use client";
import { ItemProps } from "@/model";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import FormattedPrice from "./FormattedPrice";
import { useRouter } from "next/navigation";

const ProductsData = ({ item }: ItemProps) => {
    const router = useRouter();
    return (
        <>
            {item ? (
                <Link
                    href={`/product/${item._id}`}
                    className="group"
                    onClick={() => router.push(`/product/${item._id}`)}
                >
                    <article className="relative flex flex-col items-center bg-white rounded-2xl max-lg:rounded pt-6 pr-[25px] pl-6 pb-4 max-lg:p-4  hover:box-shadow-hover transition-shadow ease-linear mb-2">
                        {item.isNew && (
                            <span className="top-3 right-1 absolute z-10">
                                Sẵn hàng
                            </span>
                        )}
                        <figure className="overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={216}
                                height={216}
                                className="object-cover w-[216px] h-[216px] max-sm:w-[104px] max-sm:h-[104px] group-hover:scale-110 transition duration-500 cursor-pointer"
                            />
                        </figure>
                        <h2 className="text-base max-sm:text-[10px] font-bold mt-3 max-sm:mt-2 text-center max-sm:h-8 max-sm:leading-4 line-clamp-1">
                            <Link href="/#">
                                {item.title.length > 50
                                    ? item.title.slice(0, 30) + "..."
                                    : item.title}
                            </Link>
                        </h2>
                        <span className="block text-lg max-sm:text-xs max-sm:mt-1 font-bold mt-3">
                            <FormattedPrice amount={item.price} />
                        </span>
                        <span className="text-sm max-sm:text-xs max-sm:mt-1 line-through mt-2">
                            <FormattedPrice amount={item.oldPrice} />
                        </span>
                        <button className="bg-black rounded-full mt-3 max-sm:mt-2 py-[10px] px-8 max-sm:py-[6px] max-sm:px-4  text-white text-sm  max-sm:text-[10px] font-bold group-hover:bg-[#248ece] group-hover:underline ease-linear transition-all duration-150">
                            Mua Ngay
                        </button>
                    </article>
                </Link>
            ) : (
                <p>Item is not available</p>
            )}
        </>
        // <Link
        //     href={`/product/${item._id}`}
        //     className="group"
        //     onClick={() => router.push(`/product/${item._id}`)}
        // >
        //     <article className="relative flex flex-col items-center bg-white rounded-2xl max-lg:rounded pt-6 pr-[25px] pl-6 pb-4 max-lg:p-4  hover:box-shadow-hover transition-shadow ease-linear mb-2">
        //         {item?.isNew && (
        //             <span className="top-3 right-1 absolute z-10">
        //                 Sẵn hàng
        //             </span>
        //         )}
        //         <figure className="overflow-hidden">
        //             <Image
        //                 src={item?.image}
        //                 alt={item.title}
        //                 width={216}
        //                 height={216}
        //                 className="object-cover w-[216px] h-[216px] max-sm:w-[104px] max-sm:h-[104px] group-hover:scale-110 transition duration-500 cursor-pointer"
        //             ></Image>
        //         </figure>
        //         <h2 className="text-base max-sm:text-[10px] font-bold mt-3 max-sm:mt-2 text-center max-sm:h-8 max-sm:leading-4 line-clamp-1">
        //             <Link href="/#">
        //                 {item?.title.length > 50
        //                     ? item?.title.slice(0, 30) + "..."
        //                     : item?.title}
        //             </Link>
        //         </h2>
        //         <span className="block text-lg max-sm:text-xs max-sm:mt-1 font-bold mt-3">
        //             <FormattedPrice amount={item?.price} />
        //         </span>
        //         <span className="text-sm max-sm:text-xs max-sm:mt-1 line-through mt-2">
        //             <FormattedPrice amount={item?.oldPrice} />
        //         </span>
        //         <button className="bg-black rounded-full mt-3 max-sm:mt-2 py-[10px] px-8 max-sm:py-[6px] max-sm:px-4  text-white text-sm  max-sm:text-[10px] font-bold group-hover:bg-[#248ece] group-hover:underline ease-linear transition-all duration-150">
        //             Mua Ngay
        //         </button>
        //     </article>
        // </Link>
    );
};

export default ProductsData;
