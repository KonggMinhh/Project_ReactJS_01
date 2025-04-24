import React from "react";
import Link from "next/link";

const Breadcrumb = () => {
    return (
        <nav>
            <ul className="flex items-center">
                <li className="flex items-center">
                    <Link
                        className="px-[10px] py-2 text-xs hover:text-blue transition-colors ease-linear duration-150 first:pl-0"
                        href="/"
                    >
                        Trang chủ
                    </Link>
                    <svg
                        className="text-black"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.999837 1L5.6665 6L0.999838 11"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </li>
                <li className="flex items-center">
                    <Link
                        className="px-[10px] py-2 text-xs hover:text-blue transition-colors ease-linear duration-150"
                        href="/"
                    >
                        Điện thoại
                    </Link>
                    <svg
                        className="text-black"
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.999837 1L5.6665 6L0.999838 11"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </li>
                <li className="flex items-center">
                    <Link
                        className="px-[10px] py-2 text-xs hover:text-blue transition-colors ease-linear duration-150"
                        href="/"
                    >
                        Galaxy Z
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Breadcrumb;
