import React, { useRef, useState } from "react";
import { ArrowUp2, ArrowDown2 } from "iconsax-react";
import Link from "next/link";
interface AccordionFooterProps {
    data: {
        title: string;
        href: string;
    }[];
    label: string;
}
const AccordionFooter: React.FC<AccordionFooterProps> = ({ data, label }) => {
    const [isOpened, setOpened] = useState<boolean>(false);
    const [height, setHeight] = useState<string>("0px");
    const contentElement = useRef<HTMLUListElement>(null);

    const handleOpening = () => {
        setOpened(!isOpened);
        setHeight(!isOpened ? " auto" : "0px");
    };
    return (
        <section onClick={handleOpening}>
            <h3 className="flex items-center justify-between text-[10px] font-bold text-white pt-3 pb-5 border-t border-b border-[#424245]">
                {label}
                {isOpened ? <ArrowUp2 size="16" /> : <ArrowDown2 size="16" />}
            </h3>
            <ul
                className="flex flex-col text-white overflow-hidden transition-all duration-200"
                ref={contentElement}
                style={{ height: height }}
            >
                {data.map((link, index) => (
                    <li key={index}>
                        <Link
                            className="flex px-4 py-[10px] hover:underline text-xs hover:text-[#86868b] transition-colors whitespace-nowrap"
                            href={link.href}
                        >
                            {link.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AccordionFooter;
