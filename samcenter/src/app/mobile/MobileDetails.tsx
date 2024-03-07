"use client";
import useSWR from "swr";
import React, { useState } from "react";
import Image from "next/image";

import HeadingSection from "@/components/HeadingSection";
import ProductsData from "@/components/Categories/ProductsData";
import { Products } from "../../model";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Tabs from "@/components/Tabs/Tabs";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const MobileDetails = () => {
    const [openTab, setOpenTab] = React.useState(1);
    const { data, error, isLoading } = useSWR(
        "https://fakestoreapiserver.reactbd.com/walmart",
        fetcher
    );

    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";
    return (
        <div className="container mx-auto">
            <Breadcrumb />
            <figure className="bg-blue rounded-lg mb-4">
                <Image
                    src=""
                    width={1200}
                    height={400}
                    alt="Mobile"
                    className="w-full h-[400px] object-cover"
                />
            </figure>
            <div className="max-lg:px-5">
                <HeadingSection title="Điện thoại Galaxy" />
            </div>
            <ul className="flex gap-x-3 mt-4 max-lg:px-5" role="tablist">
                <li>
                    <Tabs
                        title="Tất cả"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(1);
                        }}
                        custom={
                            openTab === 1
                                ? " text-white bg-black"
                                : " text-black bg-white border-black"
                        }
                    />
                </li>
                <li>
                    <Tabs
                        title="Galaxy S"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(2);
                        }}
                        custom={
                            openTab === 2
                                ? " text-white bg-black"
                                : " text-black bg-white border-black"
                        }
                    />
                </li>
                <li>
                    <Tabs
                        title="Galaxy A"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(3);
                        }}
                        custom={
                            openTab === 3
                                ? " text-white bg-black"
                                : " text-black bg-white border-black"
                        }
                    />
                </li>
                <li>
                    <Tabs
                        title="Galaxy Z"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTab(4);
                        }}
                        custom={
                            openTab === 4
                                ? " text-white bg-black"
                                : " text-black bg-white border-black"
                        }
                    />
                </li>
            </ul>
            <div className="py-10 px-8 max-lg:py-3 max-lg:px-5 bg-grey rounded-lg mt-4">
                <div className={openTab === 1 ? "block" : "hidden"}>
                    <div className="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-5  max-lg:gap-[10px]">
                        {data?.map((items: Products) => (
                            <ProductsData key={items._id} item={items} />
                        ))}
                    </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                    <div className="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-5  max-lg:gap-[10px]">
                        {data?.slice(0, 6).map((items: Products) => (
                            <ProductsData key={items._id} item={items} />
                        ))}
                    </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"}>
                    <div className="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-5  max-lg:gap-[10px]">
                        {data?.slice(0, 1).map((items: Products) => (
                            <ProductsData key={items._id} item={items} />
                        ))}
                    </div>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"}>
                    <div className="grid grid-cols-4 max-md:grid-cols-2 max-lg:grid-cols-3 gap-5  max-lg:gap-[10px]">
                        {data?.slice(0, 2).map((items: Products) => (
                            <ProductsData key={items._id} item={items} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileDetails;
