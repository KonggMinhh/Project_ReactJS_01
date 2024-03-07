import React from "react";

const SidebarRight = (isShowRightSidebar) => {
    return (
        <div
            className={`fixed top-0 z-10 right-0  bg-[#f9dbdb] w-[329px] h-[calc(100vh_-_90px)] shadow-box-shadow-right-sidebar sidebar-right:block ${
                isShowRightSidebar
                    ? "animate-slide-left"
                    : "animate-slide-right-sidebar"
            } `}
        >
            SidebarRight
        </div>
    );
};

export default SidebarRight;
