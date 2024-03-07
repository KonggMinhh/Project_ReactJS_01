import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import icons from "../ultis/icons";
const { GoHeart, GoHeartFill, IoIosMore, IoPlayCircleOutline } = icons;
const Section = ({ data }) => {
    const navigate = useNavigate();
    return (
        <section className="pt-12 flex flex-col">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-[#32323d]">
                    {data?.title}
                </h3>
                <div className="flex items-center text-xs text-[#696969] font-medium uppercase">
                    <button className="hover:text-[#b72479] uppercase">
                        Tất cả
                    </button>
                </div>
            </div>
            <div className="flex mx-[-14px]">
                {(data &&
                    data.items &&
                    data.items.length > 0 &&
                    data?.sectionId === "h100") ||
                data?.sectionId === "hAlbum"
                        ? data?.items
                            ?.slice()
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 5)
                            .map((item) => (
                                <div
                                    key={item?.encodeId}
                                    className="px-[14px] flex-1"
                                >
                                    <div
                                        // href={
                                        //     item?.link?.split(".")[0]
                                        //         ? `/${item.link.split(".")[0]}`
                                        //         : "#"
                                        // }
                                        // onClick={(e) => {
                                        //     e.preventDefault();
                                        //     const pathToNavigate =
                                        //         item?.link?.split(".")[0];
                                        //     if (pathToNavigate) {
                                        //         navigate(pathToNavigate, {
                                        //             state: {playAlbum: false},
                                        //         });
                                        //     }
                                        // }}
                                        onClick={() => {
                                            navigate(item?.link?.split(".")[0], {
                                                state: {playAlbum: false},
                                            });
                                        }}
                                    >
                                        <div className="group relative pt-[100%] w-full rounded-[5px] overflow-hidden">
                                            <img
                                                className="absolute inset-0 max-w-full h-full object-contain rounded-[5px] transition-transform duration-700 group-hover:scale-110"
                                                src={item?.thumbnailM}
                                                alt={item.title}
                                            />
                                            <div className="absolute inset-0 invisible group-hover:bg-[#00000080] group-hover:visible rounded-[5px]">
                                                <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-auto right-auto flex items-center justify-evenly z-50">
                                                    <button className="flex justify-center items-center w-[30px] h-[30px] rounded-full hover:bg-[#ffffff4d] hover:brightness-90">
                                                        <GoHeart className="text-white" size={20}/>
                                                    </button>

                                                    <button 
                                                    className="hover:brightness-90"
                                                    onClick={(e) => {
                                                        e.stopPropagation();  
                                                        navigate(item?.link?.split(".")[0], {
                                                            state: {playAlbum: true},
                                                        });
                                                    }}
                                                    >
                                                        <IoPlayCircleOutline className="text-white" size={60}/>
                                                    </button>

                                                    <button className="flex justify-center items-center w-[30px] h-[30px] rounded-full hover:bg-[#ffffff4d] hover:brightness-90">
                                                        <IoIosMore className="text-white" size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a href={item?.link}>
                                        <h4
                                            className="mt-3 mb-1 text-sm font-medium hover:text-[#b72479]"
                                            title={item?.title}
                                        >{`${item?.title.slice(0, 20)}...`}</h4>
                                    </a>
                                    <h3 className="text-sm text-[#696969]">
                                        {item?.artists?.map((artist, index) => (
                                            <React.Fragment key={index}>
                                                <a
                                                    className="hover:underline hover:text-[#b72479]"
                                                    href={artist?.link}
                                                >
                                                    {artist?.name}
                                                </a>
                                                {index <
                                                    item.artists.length - 1 &&
                                                    ", "}
                                            </React.Fragment>
                                        ))}
                                    </h3>
                                </div>
                            ))
                    : data?.items
                            ?.slice()
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 5)
                            .map((item) => (
                                <div
                                    key={item?.encodeId}
                                    className="px-[14px] flex-1"
                                >
                                    <div
                                        // href={
                                        //     item?.link?.split(".")[0]
                                        //         ? `/${item.link.split(".")[0]}`
                                        //         : "#"
                                        // }
                                        // onClick={(e) => {
                                        //     e.preventDefault();
                                        //     const pathToNavigate =
                                        //         item?.link?.split(".")[0];
                                        //     if (pathToNavigate) {
                                        //         navigate(pathToNavigate);
                                        //     }
                                        // }}
                                        onClick={() => {
                                            navigate(item?.link?.split(".")[0], {
                                                state: {playAlbum: false},
                                            });
                                        }}
                                    >
                                        <div className="group relative pt-[100%] w-full rounded-[5px] overflow-hidden">
                                            <img
                                                className="absolute inset-0 max-w-full h-full object-contain rounded-[5px] transition-transform duration-700 group-hover:scale-110"
                                                src={item?.thumbnailM}
                                                alt={item.title}
                                            />
                                            <div className="absolute inset-0 invisible group-hover:bg-[#00000080] group-hover:visible rounded-[5px]">
                                                <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-auto right-auto flex items-center justify-evenly z-50">
                                                    <button className="flex justify-center items-center w-[30px] h-[30px] rounded-full hover:bg-[#ffffff4d] hover:brightness-90">
                                                        <GoHeart className="text-white" size={20}/>
                                                    </button>

                                                    <button 
                                                    className="hover:brightness-90"
                                                    onClick={(e) => {
                                                        e.stopPropagation();  
                                                        navigate(item?.link?.split(".")[0], {
                                                            state: {playAlbum: true},
                                                        });
                                                    }}
                                                    >
                                                        <IoPlayCircleOutline className="text-white" size={60}/>
                                                    </button>

                                                    <button className="flex justify-center items-center w-[30px] h-[30px] rounded-full hover:bg-[#ffffff4d] hover:brightness-90">
                                                        <IoIosMore className="text-white" size={20} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span
                                        title={item?.sortDescription}
                                        className="inline-flex mt-3 text-[14px] text-[#696969]"
                                    >
                                        {`${item?.sortDescription.slice(
                                            0,
                                            50
                                        )}...`}
                                    </span>
                                </div>
                            ))}
            </div>
        </section>
    );
};

export default memo(Section);
