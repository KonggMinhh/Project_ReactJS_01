"use client";
import React from "react";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const BannerCategory = () => {
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
        <figure className="container mx-auto">
            <Image
                src={data.data[0].imageDesktop}
                alt={data.data[0].title}
                width={1200}
                height={300}
                className="h-[300px] max-sm:h-[124px]"
            />
        </figure>
    );
};

export default BannerCategory;
