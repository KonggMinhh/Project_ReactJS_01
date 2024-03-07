import React from "react";
import SamSungLogo from "../SamSungLogo";
import {
    SearchNormal1,
    ShoppingBag,
    Profile,
    HambergerMenu,
} from "iconsax-react";
import Link from "next/link";
import Image from "next/image";
import koreaFlag from "../../../public/assets/icons/korea-flag.svg";
import vietnamFlag from "../../../public/assets/icons/vietnam-flag.svg";

const MobileHeader = () => {
    return (
        <div className="flex lg:hidden justify-between items-center py-4 max-lg:px-5">
            <div className="flex items-center gap-x-2">
                <ul className="flex items-center gap-1">
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
                <SamSungLogo />
            </div>
            <div className="flex items-center gap-3">
                <button type="button">
                    <SearchNormal1 className="text-white" />
                </button>
                <Link href="/" className="relative">
                    <ShoppingBag className="text-white " />
                    <span className="flex items-center justify-center absolute top-3 right-0 bg-white rounded-full w-[15px] h-[15px] text-xs ">
                        0
                    </span>
                </Link>
                <Link href="/">
                    <Profile className="text-white" />
                </Link>
                <button type="button">
                    <HambergerMenu size={32} className="text-white" />
                </button>
            </div>
        </div>
    );
};

export default MobileHeader;
