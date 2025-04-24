import React from "react";
import icons from "../ultis/icons";
import Search from "./Search";
const { PiArrowRightLight, PiArrowLeftLight } = icons;
const Header = () => {
    return (
        <header className="fixed top-0 flex items-center justify-center h-[70px]">
            <div className="flex items-center gap-x-5">
                <button>
                    <PiArrowLeftLight size={24} />
                </button>
                <button>
                    <PiArrowRightLight
                        size={24}
                        className="text-[#32323d] opacity-30"
                    />
                </button>
            </div>
            <Search />
        </header>
    );
};

export default Header;
