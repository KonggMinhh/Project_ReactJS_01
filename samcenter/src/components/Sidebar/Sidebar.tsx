"use client";
import React from "react";
import { navItemNews } from "@/helpers";
import SidebarItem from "./SidebarItem";

export const Sidebar = () => {
    const routes = navItemNews;
    return (
        <aside className="sticky top-16 flex px-2 py-3 rounded bg-grey h-max max-lg:hidden">
            <ul>
                {routes?.map((route) => (
                    <SidebarItem
                        key={route.href}
                        icon={route.icon && <route.icon />}
                        title={route.title}
                        href={route.href}
                    />
                ))}
            </ul>
        </aside>
    );
};
