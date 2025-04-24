"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
interface SidebarItemProps {
    icon?: any;
    title?: string;
    href: string;
}
const SidebarItem = ({ icon, title, href }: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();
    const isActive = (href: string) =>
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith(`${href}/`);
    const onClick = () => {
        router.push(href);
    };
    return (
        <li key={href}>
            <button
                onClick={onClick}
                className={`flex items-center w-full gap-2 px-4 py-3 rounded-lg hover:bg-grey-dark hover:bg-opacity-[0.15] transition ease-in ${
                    isActive(href) ? "bg-grey-dark bg-opacity-[0.15]" : ""
                }`}
            >
                {icon && <>{icon}</>}
                <span className="font-base font-bold">{title}</span>
            </button>
        </li>
    );
};

export default SidebarItem;
