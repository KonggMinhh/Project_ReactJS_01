import React from "react";
import Image from "next/image";
import Link from "next/link";
import DateFormatter from "@/helper/DateFormatter";
interface NewItemProps {
    href?: string;
    src?: any;
    alt?: string;
    title?: string;
    titleImg?: string;
    day?: string;
    custom?: string;
    customImg?: string;
    icon?: React.FC;
}
const NewItem: React.FC<NewItemProps> = ({
    href = "",
    src = "",
    alt = "",
    title,
    titleImg,
    custom,
    customImg,
    icon: Icon,
    day,
}) => {
    return (
        <article>
            <Link
                href={href}
                className={`flex gap-x-3 ${custom ? custom : ""}`}
            >
                <figure>
                    <Image
                        src={src}
                        alt={alt}
                        title={titleImg}
                        width={302}
                        height={170}
                        className={`object-cover rounded-lg  max-w-none w-[302px] h-[170px] max-lg:w-[142px] max-lg:h-20 ${
                            customImg ? customImg : ""
                        }`}
                    />
                </figure>
                <section className="new-item">
                    <h3 className="text-base font-bold hover:opacity-80 line-clamp-2 max-lg:text-xs">
                        {title}
                    </h3>
                    <div className="flex items-center mt-3 gap-x-2 text-[#86868B]">
                        {Icon && <Icon />}
                        <span className="text-sm text-[#86868B]">
                            <DateFormatter dateString={day} />
                        </span>
                    </div>
                </section>
            </Link>
        </article>
    );
};

export default NewItem;
