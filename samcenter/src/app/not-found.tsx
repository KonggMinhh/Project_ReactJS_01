import React from "react";
import Image from "next/image";
import Link from "next/link";
import notFound from "../../public/assets/img/405.png";
const NotFoundPage = () => {
    return (
        <div>
            <figure className="relative">
                <Image
                    src={notFound}
                    alt="Not Found"
                    width={1920}
                    height={1080}
                    className="w-full h-full -mb-14 max-sm:-mb-6"
                />
                <Link
                    href="/"
                    className="absolute bottom-[252px] left-1/2 -translate-x-1/2 flex justify-center items-center py-3 px-[76px] border-2 rounded border-white text-2xl font-bold text-white"
                >
                    Trang chủ
                </Link>
            </figure>
        </div>
    );
};

export default NotFoundPage;
