"use client";
import React, { useEffect, useState, Suspense } from "react";
import {
    Gift,
    LampCharge,
    TaskSquare,
    Profile2User,
    Stickynote,
    MonitorMobbile,
    Video,
    Calendar,
} from "iconsax-react";
import Image from "next/image";

import * as newService from "@/app/api/new/newService";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import HeadingSection from "@/components/HeadingSection";
import NewItem from "./NewItem";
import Button from "@/components/Button";
import Tabs from "@/components/Tabs/Tabs";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NewDetails = () => {
    const router = useRouter();
    const [apiCategory, setApiCategory] = useState<any>([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await newService.category();
            setApiCategory(result);
        };
        fetchApi();
    }, []);
    return (
        <>
            <div className="container mx-auto max-sm:px-5 lg:px-[10px] md:px-5section">
                <Breadcrumb />
                <HeadingSection title="Tin Tức" custom="max-lg:hidden mt-2" />
                <div className="mt-5 flex gap-x-5 max-md:flex-col max-sm:flex-col max-sm:gap-y-3">
                    <Link href="/" key={apiCategory.LatestNews?.[0]?.Id}>
                        <figure className="relative">
                            <Image
                                src={
                                    apiCategory.LatestNews?.[0]?.PictureModel
                                        .FullSizeImageUrl
                                }
                                width={782}
                                height={440}
                                alt={
                                    apiCategory.LatestNews?.[0]?.PictureModel
                                        .AlternateText
                                }
                                title={
                                    apiCategory.LatestNews?.[0]?.PictureModel
                                        .Title
                                }
                                className="w-[782px] h-[440px] object-cover  rounded-2xl max-lg:w-full max-lg:h-full"
                            />
                            <div className="absolute p-5 left-0 right-0 bottom-0 box-shadow-new rounded-b-2xl">
                                <p className="text-xl text-white">
                                    {apiCategory.LatestNews?.[0]?.MetaTitle}
                                </p>
                            </div>
                        </figure>
                    </Link>
                    <div className="flex flex-col gap-y-4">
                        <Link href="/">
                            <figure className="relative">
                                <Image
                                    src={
                                        apiCategory.LatestNews?.[1]
                                            ?.PictureModel.FullSizeImageUrl
                                    }
                                    width={782}
                                    height={440}
                                    alt={
                                        apiCategory.LatestNews?.[1]
                                            ?.PictureModel.AlternateText
                                    }
                                    title={
                                        apiCategory.LatestNews?.[1]
                                            ?.PictureModel.Title
                                    }
                                    className="w-[398px] h-[212px] object-cover bg-blue rounded-lg max-lg:w-full max-lg:h-full"
                                />
                                <div className="absolute p-3 left-0 right-0 bottom-0 box-shadow-new rounded-b-lg">
                                    <p className="text-xl text-white">
                                        {apiCategory.LatestNews?.[1]?.Title}
                                    </p>
                                </div>
                            </figure>
                        </Link>

                        <Link href="/">
                            <figure className="relative">
                                <Image
                                    src={
                                        apiCategory.LatestNews?.[2]
                                            ?.PictureModel.FullSizeImageUrl
                                    }
                                    width={782}
                                    height={440}
                                    alt={
                                        apiCategory.LatestNews?.[2]
                                            ?.PictureModel.AlternateText
                                    }
                                    title={
                                        apiCategory.LatestNews?.[2]
                                            ?.PictureModel.Title
                                    }
                                    className="w-[398px] h-[212px] object-cover bg-blue rounded-lg max-lg:w-full max-lg:h-full"
                                />
                                <div className="absolute p-3 left-0 right-0 bottom-0 box-shadow-new rounded-b-lg">
                                    <p className="text-xl text-white">
                                        {apiCategory.LatestNews?.[2]?.Title}
                                    </p>
                                </div>
                            </figure>
                        </Link>
                    </div>
                </div>
                <div className="flex gap-x-4 items-center justify-center mt-6 overflow-x-auto max-lg:pl-16">
                    <Tabs
                        onClick={() => router.push("/discount")}
                        title="Khuyến mại"
                        icon={Gift}
                    />
                    <Tabs
                        onClick={() => router.push("/great-tips")}
                        title="Mẹo hay"
                        icon={LampCharge}
                    />
                    <Tabs
                        onClick={() => router.push("/product-reviews")}
                        title=" Đánh giá sản phẩm"
                        icon={TaskSquare}
                    />
                    <Tabs
                        onClick={() => router.push("/advise")}
                        title=" Tư vấn"
                        icon={Profile2User}
                    />
                    <Tabs
                        onClick={() => router.push("/other-news")}
                        title=" Tin khác"
                        icon={Stickynote}
                    />
                    <Tabs
                        onClick={() => router.push("/new-product")}
                        title="Sản phẩm mới"
                        icon={MonitorMobbile}
                    />
                    <Tabs
                        onClick={() => router.push("/new-samvideo")}
                        title="SamVideo"
                        icon={Video}
                    />
                </div>
                <section className="mt-6">
                    <HeadingSection title={apiCategory.NewsGroup?.[0]?.Name} />
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-4 mt-4 max-lg:gap-y-5">
                        {apiCategory.NewsGroup?.[0]?.NewsItems.slice(0, 4)?.map(
                            (item: any) => (
                                <NewItem
                                    key={item.Id}
                                    href="/"
                                    src={item.PictureModel.FullSizeImageUrl}
                                    title={item.Title}
                                    titleImg={item.PictureModel.Title}
                                    alt={item.PictureModel.AlternateText}
                                    icon={Calendar}
                                    day={item.CreatedOn}
                                    custom="pb-4 border-b border-[#86868B}  max-lg:border-b-0 max-lg:pb-0"
                                />
                            )
                        )}
                    </div>
                    <Button
                        border
                        label="Xem tất cả tin khuyến mãi"
                        onClick={() => router.push("/discount")}
                        custom="!w-[193px] text-sm mx-auto font-samsung-one mt-5 max-lg:rounded-lg"
                    />
                </section>
                <section className="mt-6">
                    <HeadingSection title={apiCategory.NewsGroup?.[1]?.Name} />
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-4 mt-4">
                        {apiCategory.NewsGroup?.[1]?.NewsItems.slice(0, 4)?.map(
                            (item: any) => (
                                <NewItem
                                    key={item.Id}
                                    href="/"
                                    src={item.PictureModel.FullSizeImageUrl}
                                    title={item.Title}
                                    titleImg={item.PictureModel.Title}
                                    alt={item.PictureModel.AlternateText}
                                    icon={Calendar}
                                    day={item.CreatedOn}
                                    custom="pb-4 border-b border-[#86868B}  max-lg:border-b-0 max-lg:pb-0"
                                />
                            )
                        )}
                    </div>
                    <Button
                        border
                        label="Xem tất cả mẹo hay"
                        onClick={() => router.push("/great-tips")}
                        custom="!w-[193px] text-sm mx-auto font-samsung-one mt-5"
                    />
                </section>
                <section className="mt-6">
                    <HeadingSection title={apiCategory.NewsGroup?.[2]?.Name} />
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-4 mt-4">
                        {apiCategory.NewsGroup?.[2]?.NewsItems.slice(0, 4)?.map(
                            (item: any) => (
                                <NewItem
                                    key={item.Id}
                                    href="/"
                                    src={item.PictureModel.FullSizeImageUrl}
                                    title={item.Title}
                                    titleImg={item.PictureModel.Title}
                                    alt={item.PictureModel.AlternateText}
                                    icon={Calendar}
                                    day={item.CreatedOn}
                                    custom="pb-4 border-b border-[#86868B}  max-lg:border-b-0 max-lg:pb-0"
                                />
                            )
                        )}
                    </div>
                    <Button
                        border
                        label="Xem tất cả đánh giá sản phẩm"
                        onClick={() => router.push("/product-reviews")}
                        custom="!w-[193px] text-sm mx-auto font-samsung-one mt-5"
                    />
                </section>
                <section className="mt-6">
                    <HeadingSection title={apiCategory.NewsGroup?.[3]?.Name} />
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-4 mt-4">
                        {apiCategory.NewsGroup?.[3]?.NewsItems.slice(0, 4)?.map(
                            (item: any) => (
                                <NewItem
                                    key={item.Id}
                                    href="/"
                                    src={item.PictureModel.FullSizeImageUrl}
                                    title={item.Title}
                                    titleImg={item.PictureModel.Title}
                                    alt={item.PictureModel.AlternateText}
                                    icon={Calendar}
                                    day={item.CreatedOn}
                                    custom="pb-4 border-b border-[#86868B}  max-lg:border-b-0 max-lg:pb-0"
                                />
                            )
                        )}
                    </div>
                    <Button
                        border
                        label="Xem tất cả tin khác"
                        onClick={() => router.push("/other-news")}
                        custom="!w-[193px] text-sm mx-auto font-samsung-one mt-5"
                    />
                </section>
                <section className="mt-6">
                    <HeadingSection title={apiCategory.NewsGroup?.[4]?.Name} />
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-4 mt-4">
                        {apiCategory.NewsGroup?.[4]?.NewsItems.slice(0, 4)?.map(
                            (item: any) => (
                                <NewItem
                                    key={item.Id}
                                    href="/"
                                    src={item.PictureModel.FullSizeImageUrl}
                                    title={item.Title}
                                    titleImg={item.PictureModel.Title}
                                    alt={item.PictureModel.AlternateText}
                                    icon={Calendar}
                                    day={item.CreatedOn}
                                    custom="pb-4 border-b border-[#86868B}  max-lg:border-b-0 max-lg:pb-0"
                                />
                            )
                        )}
                    </div>
                    <Button
                        border
                        label="Xem tất cả sản phẩm mới"
                        onClick={() => router.push("/new-product")}
                        custom="!w-[193px] text-sm mx-auto font-samsung-one mt-5"
                    />
                </section>
                <section className="mt-6">
                    <HeadingSection title={apiCategory.NewsGroup?.[5]?.Name} />
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-4 mt-4">
                        {apiCategory.NewsGroup?.[5]?.NewsItems.slice(0, 4)?.map(
                            (item: any) => (
                                <NewItem
                                    key={item.Id}
                                    href="/"
                                    src={item.PictureModel.FullSizeImageUrl}
                                    title={item.Title}
                                    titleImg={item.PictureModel.Title}
                                    alt={item.PictureModel.AlternateText}
                                    icon={Calendar}
                                    day={item.CreatedOn}
                                    custom="pb-4 border-b border-[#86868B}  max-lg:border-b-0 max-lg:pb-0"
                                />
                            )
                        )}
                    </div>
                    <Button
                        border
                        label="Xem tất cả SamVideo"
                        onClick={() => router.push("/new-samvideo")}
                        custom="!w-[193px] text-sm mx-auto font-samsung-one mt-5"
                    />
                </section>
                <section className="mt-6">
                    <HeadingSection title={apiCategory.NewsGroup?.[6]?.Name} />
                    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-5 gap-y-4 mt-4">
                        {apiCategory.NewsGroup?.[6]?.NewsItems.slice(0, 4)?.map(
                            (item: any) => (
                                <NewItem
                                    key={item.Id}
                                    href="/"
                                    src={item.PictureModel.FullSizeImageUrl}
                                    title={item.Title}
                                    titleImg={item.PictureModel.Title}
                                    alt={item.PictureModel.AlternateText}
                                    icon={Calendar}
                                    day={item.CreatedOn}
                                    custom="pb-4 border-b border-[#86868B}  max-lg:border-b-0 max-lg:pb-0"
                                />
                            )
                        )}
                    </div>
                    <Button
                        border
                        label="Xem tất cả SamVideo"
                        onClick={() => router.push("/new-samvideo")}
                        custom="!w-[193px] text-sm mx-auto font-samsung-one mt-5"
                    />
                </section>
            </div>

            <section className="bg-black py-5 mt-10 ">
                <div className="container mx-auto">
                    <h3 className="text-white text-base">Video</h3>
                    <section className="grid  lg:grid-cols-3 md:grid-cols-none grid-rows-3 gap-5 mt-10 my-10 py-5">
                        <iframe
                            src="https://www.youtube.com/embed/zFmFIJQE1eA"
                            className="w-full lg:h-full aspect-video row-span-3 col-span-2"
                        ></iframe>
                        <iframe
                            src="https://www.youtube.com/embed/b4j8YjjU8aQ"
                            className="w-full lg:h-full md:aspect-video"
                        ></iframe>
                        <iframe
                            src="https://www.youtube.com/embed/YlcxNsAnRII"
                            className="w-full lg:h-full  md:aspect-video"
                        ></iframe>
                        <iframe
                            src="https://www.youtube.com/embed/VO2uoKMevTA"
                            className="w-full lg:h-full  md:aspect-video"
                        ></iframe>
                    </section>
                </div>
            </section>
        </>
    );
};

export default NewDetails;
