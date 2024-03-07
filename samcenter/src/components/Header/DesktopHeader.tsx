"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SearchNormal1, ShoppingBag, Profile } from "iconsax-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AnimateHeight from "react-animate-height";
import { ArrowUp2, ArrowDown2 } from "iconsax-react";

import SamSungLogo from "../SamSungLogo";
import { navItems } from "@/helpers";
import koreaFlag from "../../../public/assets/icons/korea-flag.svg";
import vietnamFlag from "../../../public/assets/icons/vietnam-flag.svg";
import englandFlag from "../../../public/assets/icons/england-flag.svg";
import Button from "../Button";

const DesktopHeader = () => {
    const router = useRouter();
    const [hover, setHover] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [height, setHeight] = useState<number | "auto">(0);

    return (
        <>
            <div className="relative flex max-lg:hidden items-center justify-between lg:px-[10px] ">
                <SamSungLogo />
                <nav>
                    <ul className="flex items-center justify-center">
                        {navItems?.map((navItem) => (
                            <li className="group" key={navItem.name}>
                                <Link
                                    className="hover:bg-[#626265] transition ease-linear flex px-3 py-[22px;] text-white text-sm font-bold font-samsung-one"
                                    href={navItem.href}
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                >
                                    {navItem.name}
                                </Link>
                                <div className="absolute w-full left-0 right-0 px-8 py-7 hidden group-hover:block bg-white box-shadow-menu">
                                    <div className="grid grid-menu gap-6">
                                        {navItem.children?.map((subLink) => (
                                            <div
                                                key={subLink.name}
                                                className="flex items-center gap-4"
                                            >
                                                <figure>
                                                    <Image
                                                        src={subLink.img}
                                                        alt={subLink.name}
                                                        width={104}
                                                        height={104}
                                                        className="w-[104px] h-[104px] object-cover"
                                                    />
                                                </figure>
                                                <div>
                                                    <h3 className="text-base font-bold">
                                                        <Link
                                                            href={subLink.href}
                                                            className="flex flex-col gap-3 text-sm font-bold hover:underline"
                                                            onMouseEnter={() =>
                                                                setHover(true)
                                                            }
                                                            onMouseLeave={() =>
                                                                setHover(false)
                                                            }
                                                        >
                                                            {subLink.name}
                                                            <span className="text-xs font-normal">
                                                                {subLink.desc}
                                                            </span>
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex items-center">
                    <div className="flex items-center gap-4">
                        <Button
                            icon={SearchNormal1}
                            onClick={() => setIsSearchOpen(true)}
                            custom="text-white bg-transparent outline-none border-none"
                        />

                        <div className="relative">
                            <Link href="/cart">
                                <ShoppingBag className="text-white" />
                                <span className="flex items-center justify-center absolute top-3 right-0 bg-white rounded-full w-[15px] h-[15px] text-xs ">
                                    0
                                </span>
                            </Link>
                        </div>
                        <div className="relative group">
                            <Link
                                href="/login"
                                onClick={() => router.push("/login")}
                            >
                                <Profile className="text-white " />
                            </Link>
                            <div className="before:absolute before:block before:w-10 before:h-4 hidden before:-top-2  before:right-0 absolute right-0 top-8 min-w-[243px] p-4 bg-white box-shadow-account rounded-lg group-hover:block">
                                <ul>
                                    <li>
                                        <Link
                                            href="/register"
                                            onClick={() =>
                                                router.push("/register")
                                            }
                                            className="block text-sm font-bold pb-2 font-samsung-one border-b border-grey-dark hover:text-[#0066CC]"
                                        >
                                            Tạo tài khoản ngay
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link
                                            href="/login"
                                            onClick={() =>
                                                router.push("/login")
                                            }
                                            className="block text-sm font-bold pb-2 font-samsung-one border-b border-grey-dark hover:text-[#0066CC]"
                                        >
                                            Đăng nhập
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <span
                                            className="flex items-center justify-between text-sm font-bold font-samsung-one hover:text-[#0066CC] cursor-pointer"
                                            aria-expanded={height !== 0}
                                            aria-controls="view-more"
                                            onClick={() =>
                                                setHeight(
                                                    height === "auto"
                                                        ? 0
                                                        : "auto"
                                                )
                                            }
                                        >
                                            {height === "auto" ? (
                                                <>
                                                    Ngôn ngữ
                                                    <ArrowUp2
                                                        className="ml-auto"
                                                        size={16}
                                                    />
                                                </>
                                            ) : (
                                                <>
                                                    Ngôn ngữ
                                                    <ArrowDown2
                                                        className="ml-auto"
                                                        size={16}
                                                    />
                                                </>
                                            )}
                                        </span>
                                        <AnimateHeight
                                            id="view-more"
                                            duration={500}
                                            height={height}
                                        >
                                            <ul className="mt-2 pl-[30px] flex flex-col gap-y-3">
                                                <li className="flex items-center gap-x-2 text-xs hover:text-[#0066CC]">
                                                    <Image
                                                        src={vietnamFlag}
                                                        alt="Vietnamese"
                                                        width={24}
                                                    ></Image>
                                                    <Link href="/">
                                                        Tiếng Việt
                                                    </Link>
                                                </li>
                                                <li className="flex items-center gap-x-2 text-xs hover:text-[#0066CC]">
                                                    <Image
                                                        src={englandFlag}
                                                        alt="Vietnamese"
                                                        width={24}
                                                    ></Image>
                                                    <Link href="/">
                                                        Tiếng Anh
                                                    </Link>
                                                </li>
                                                <li className="flex items-center gap-x-2 text-xs hover:text-[#0066CC]">
                                                    <Image
                                                        src={koreaFlag}
                                                        alt="Vietnamese"
                                                        width={24}
                                                    ></Image>
                                                    <Link href="/">
                                                        Tiếng Hàn
                                                    </Link>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul className="flex items-center gap-[10px] ml-4">
                        <li>
                            <Link href="/">
                                <Image
                                    src={vietnamFlag}
                                    alt="Vietnamese"
                                    width={24}
                                ></Image>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Image
                                    src={koreaFlag}
                                    alt="Korea"
                                    width={24}
                                ></Image>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className={`fixed inset-0 bg-black opacity-80 -z-10 transition-all ease-in-out ${
                    hover ? "block" : "hidden"
                }`}
            ></div>
            {isSearchOpen && (
                <>
                    <div className="fixed top-0 left-0 right-0 flex items-center justify-center bg-black-dark w-full h-16 z-[999]">
                        <input
                            type="text"
                            placeholder="Tìm kiếm"
                            className="px-4 py-2 h-10 w-1/2 placeholder:text-sm  text-sm bg-white focus:outline-blue border border-grey-dark rounded"
                        />
                    </div>
                    <div
                        onClick={() => setIsSearchOpen(false)}
                        className="fixed inset-0 bg-black opacity-80 -z-10 transition-all ease-in-out"
                    ></div>
                </>
            )}
        </>
    );
};

export default DesktopHeader;
