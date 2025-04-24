import Image from "next/image";
import Link from "next/link";
import React from "react";
import SamSungLogoImage from "../../public/assets/icons/samsung-logo.svg";
const SamSungLogo = () => {
    return (
        <Link href="/">
            <Image
                src={SamSungLogoImage}
                alt="Samcenter"
                width={173}
                className="max-md:w-[110px]"
            ></Image>
        </Link>
    );
};

export default SamSungLogo;
