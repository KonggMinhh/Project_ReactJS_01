import React, { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import {
    Player,
    SidebarLeft,
    SidebarRight,
    Header,
    Loading,
} from "../../components";
import { Scrollbars } from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
const Public = () => {
    const [isShowRightSidebar, setIsShowRightSidebar] = useState(false);
    const { isLoading } = useSelector((state) => state.app);
    return (
        <Fragment>
            <section className="flex w-full flex-auto overflow-hidden">
                <SidebarLeft />
                <div className="relative w-full h-[calc(100vh_-_90px)">
                    <Scrollbars
                        autoHide
                        style={{
                            width: "100%",
                            height: "calc(100vh - 90px)",
                        }}
                    >
                        <section className="main flex-1 bg-[#f9dbdbcc] px-[59px] h-[calc(100vh_-_90px)]">
                            <Header />
                            <Outlet />
                        </section>
                    </Scrollbars>
                    {isLoading && (
                        <div className="flex items-center justify-center absolute inset-0 bg-player-bg z-10 ">
                            <Loading />
                        </div>
                    )}
                </div>

                {isShowRightSidebar && (
                    <SidebarRight isShowRightSidebar={isShowRightSidebar} />
                )}
            </section>

            <section className="fixed bottom-0 left-0 z-10 right-0 flex h-[90px]">
                <Player
                    setIsShowRightSidebar={setIsShowRightSidebar}
                    isShowRightSidebar={isShowRightSidebar}
                />
            </section>
        </Fragment>
    );
};

export default Public;
