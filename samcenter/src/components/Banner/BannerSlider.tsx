"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Autoplay,
} from "swiper/modules";
import Image from "next/image";
import useSWR from "swr";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Fake API Banner
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BannerSlider = () => {
    const { data, error, isLoading } = useSWR(
        "https://gist.githubusercontent.com/poepanda/d23d18e6ad897e34e7a696122ce0ca5a/raw/9bcd11a2a96080dba4a9c43c9428fc4c266105c9/fake-api-banner.json",
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";

    return (
        <>
            <section className="mt-5 max-lg:mt-0 -margin-5">
                <div className="container mx-auto">
                    <div className="flex gap-x-5">
                        <Swiper
                            modules={[
                                Navigation,
                                Pagination,
                                Mousewheel,
                                Keyboard,
                                Autoplay,
                            ]}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            className="min-lg:w-[66.8%] !mx-0"
                        >
                            {data.data?.map((item: any) => (
                                <SwiperSlide key={item.id}>
                                    <Link
                                        href={item.imageDesktop}
                                        className="w-full h-full"
                                    >
                                        <Image
                                            src={item.imageDesktop}
                                            alt={item.title}
                                            width={1200}
                                            height={1200}
                                            className="w-full h-full object-contain"
                                        />
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="flex gap-y-5 flex-col flex-1 max-lg:hidden">
                            {data.data?.slice(0, 2).map((img: any) => (
                                <Link
                                    key={img.id}
                                    href={img.imageDesktop}
                                    className="w-[200px] h-[300px] "
                                >
                                    <Image
                                        src={img.imageDesktop}
                                        alt={img.title}
                                        width={400}
                                        height={400}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BannerSlider;
