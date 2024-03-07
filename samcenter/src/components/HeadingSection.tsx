"use client";
import React from "react";

interface HeadingProps {
    title: string;
    icon?: any;
    custom?: string;
}

const HeadingSection: React.FC<HeadingProps> = ({
    title,
    icon: Icon,
    custom,
}) => {
    return (
        <div className={`border-b border-black ${custom ? custom : ""}`}>
            <h2 className="inline-flex items-center text-xl max-sm:text-lg font-bold text-black gap-x-[10px] border-b-2 border-black pb-2">
                {Icon && <Icon size={32} />} {title}
            </h2>
        </div>
    );
};

export default HeadingSection;
