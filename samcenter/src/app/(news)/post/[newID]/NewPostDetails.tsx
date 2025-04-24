"use client";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { Sidebar } from "@/components/Sidebar/Sidebar";
interface NewPostDetailProps {
    post: any;
}
import * as newService from "@/app/api/new/newService";
const NewPostDetail = () => {
    const [html, setHtml] = useState<string>("");
    const [apiCategory, setApiCategory] = useState<any>([]);
    // useEffect(() => {
    //     setHtml("<div>Html stored as a string</div>");
    // }, [html]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await newService.category();
            setApiCategory(result);
            // console.log(
            //     "🚀 ~ file: NewPostDetails.tsx:14 ~ fetchApi ~ result:",
            //     result.LatestNews[0].Full
            // );
        };
        fetchApi();
    }, []);
    return (
        <section className="mt-6 max-lg:mt-0">
            <div className="container mx-auto ">
                <div className="flex gap-4">
                    <Sidebar />
                    <div className="flex-1">
                        {parse(String(apiCategory.LatestNews?.[0]?.Full))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewPostDetail;
