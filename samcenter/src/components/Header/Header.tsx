import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
    return (
        <header className="sticky top-0 bg-black-dark w-full h-16 z-[999]">
            <div className="container mx-auto">
                <DesktopHeader />
                <MobileHeader />
            </div>
        </header>
    );
};

export default Header;
