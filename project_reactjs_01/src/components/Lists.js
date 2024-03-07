import React, { Fragment, memo } from "react";
import moment from "moment";
import icons from "../ultis/icons";
import { useSelector } from "react-redux";
import List from "./List";
const { TbArrowsSort } = icons;
const Lists = ({ totalDuration }) => {
    const { songs } = useSelector((state) => state.music);
    return (
        <Fragment>
            <div className="mt-[10px] p-[10px] flex items-center justify-between text-[#696969]">
                <span className="flex w-1/2 items-center gap-x-[10px] font-medium text-xs">
                    <button className="w-4 h-4  rounded-[4px] text-[#32323d80] border border-[#32323d80]">
                        <TbArrowsSort size={16} />
                    </button>
                    BÀI HÁT
                </span>
                <span className="font-medium text-xs mr-auto">ALBUM</span>
                <span className="font-medium text-xs">THỜI GIAN</span>
            </div>
            <div>
                {songs?.map((item) => (
                    <List key={item.encodeId} songData={item} />
                ))}
            </div>
            <div className="mt-4">
                <p className="flex items-center text-[13px] text-[#696969]">
                    <span className="mr-2">{`${songs?.length}`} bài hát</span>•
                    <span className="ml-2">
                        {moment
                            .utc(totalDuration * 1000)
                            .format("H [giờ] : m [phút]")}
                    </span>
                </p>
            </div>
        </Fragment>
    );
};

export default memo(Lists);
