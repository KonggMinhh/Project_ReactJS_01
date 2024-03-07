"use client";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import React, { useEffect, useState } from "react";
import { Calendar } from "iconsax-react";

import * as newService from "@/app/api/new/newService";
import NewItem from "../../home-new/NewItem";
const ProductViewsPage = () => {
    const [apiCategory, setApiCategory] = useState<any>([]);
    useEffect(() => {
        const fetchApi = async () => {
            const result = await newService.category();
            setApiCategory(result);
        };
        fetchApi();
    }, []);
    return (
        <div className="flex-1 max-lg:px-5">
            <Breadcrumb />
            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
                {apiCategory.NewsGroup?.[2]?.NewsItems?.map((item: any) => (
                    <NewItem
                        key={item.Id}
                        href="/"
                        src={item.PictureModel.FullSizeImageUrl}
                        title={item.Title}
                        titleImg={item.PictureModel.Title}
                        alt={item.PictureModel.AlternateText}
                        icon={Calendar}
                        day={item.CreatedOn}
                        custom="flex-col box-shadow-card hover:box-shadow-hover rounded-lg transition ease-in"
                        customImg="rounded-b-none"
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductViewsPage;
