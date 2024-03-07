"use client";
import React from "react";
interface TabsProps {
    title?: string;
    icon?: React.FC;
    custom?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Tabs: React.FC<TabsProps> = ({ title, onClick, icon: Icon, custom }) => {
    return (
        <button
            className={`flex items-center gap-x-[10px] text-sm max-lg:text-xs font-bold py-3 px-4 border-current border rounded-lg max-lg:rounded-lg max-lg:px-4 max-lg:py-3 whitespace-nowrap ${
                custom ? custom : ""
            }`}
            onClick={onClick}
        >
            {Icon && <Icon />}
            {title}
        </button>
    );
};

export default Tabs;
