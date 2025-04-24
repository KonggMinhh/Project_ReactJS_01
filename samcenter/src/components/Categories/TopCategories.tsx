"use client";
import React from "react";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Mousewheel, Keyboard, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";


import ProductsData from "./ProductsData";
import { Products } from "../../model";

// Fake API Banner
const fetcher = (url: string) => fetch(url).then((res) => res.json());
interface TopCategoriesProps {
    title: string;
    link?: string;
    custom?: string;
}

const TopCategories = ({ title, link = "", custom }: TopCategoriesProps) => {
    const { data, error, isLoading } = useSWR(
        "https://fakestoreapiserver.reactbd.com/walmart",
        fetcher
    );

    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";
    return (
        <section className="my-6 max-sm:my-3">
            <div className="container mx-auto">
                <div
                    className={`py-6 px-10 max-lg:p-5 rounded-2xl bg-grey max-lg:rounded-none ${
                        custom ? custom : ""
                    } `}
                >
                    <div className="flex justify-between items-center border-solid border-b-[1px] border-black">
                        <Link
                            className="text-2xl font-bold border-b-2 max-sm:text-lg border-black pb-2 max-sm:pb-0"
                            href={link}
                            title={title}
                        >
                            {title}
                        </Link>
                        <Link
                            href={link}
                            className="text-xs font-bold max-md:hidden"
                        >
                            Xem tất cả
                        </Link>
                    </div>
                    <div className="flex gap-3 mt-5">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            navigation={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[
                                Autoplay,
                                Mousewheel,
                                Keyboard,
                                Navigation,
                            ]}
                            mousewheel={true}
                            keyboard={true}
                            className="mySwiper"
                        >
                            {data?.map((items: Products) => (
                                <SwiperSlide key={items._id}>
                                    <ProductsData item={items} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopCategories;
