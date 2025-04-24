import React, { memo } from "react";
import moment from "moment";
import icons from "../ultis/icons";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

const { CiMusicNote1, IoPlay } = icons;
const List = ({ songData }) => {
    const dispatch = useDispatch();
    return (
        <div className="group hover:bg-[#0000000d] p-[10px] flex items-center justify-between border-t border-b-[#782a2a0d] last:border-b-[#782a2a0d] last:border-b rounded transition-all duration-300">
            <div className=" flex w-1/2 items-center text-[#32323d80] gap-x-[10px]">
                <CiMusicNote1 size={16} />
                <article className="flex items-center gap-x-[10px]">
                    <div className="relative">
                        <img
                            src={songData?.thumbnail}
                            alt=""
                            className="w-10 h-10 object-cover rounded-[4px]"
                        />
                        <div className="absolute flex justify-center items-center inset-0 bg-[#00000080] invisible group-hover:visible hover:cursor-pointer  rounded-[4px]">
                            <button
                                className="text-white hover:filter hover:brightness-90"
                                onClick={() => {
                                    dispatch(
                                        actions.setCurSongId(songData?.encodeId)
                                    );
                                    dispatch(actions.play(true));
                                    dispatch(actions.playAlbum(true));
                                }}
                            >
                                <IoPlay size={18} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <span className="text-sm text-[#32323d] font-medium">
                            {songData?.title}
                        </span>
                        <h3 className="text-xs text-[#32323d]">
                            {songData?.artists?.map((artist, index) => (
                                <React.Fragment key={index}>
                                    <a
                                        className="hover:underline"
                                        href={artist?.link}
                                    >
                                        {artist?.name}
                                    </a>
                                    {index < songData.artists.length - 1 &&
                                        ", "}
                                </React.Fragment>
                            ))}
                        </h3>
                    </div>
                </article>
            </div>
            <div className="flex-1 flex justify-end">
                <span className="text-[#32323d80] text-xs mr-auto hover:text-[#b72479] hover:underline cursor-pointer">
                    {songData?.album?.title}
                </span>
            </div>
            <div className="flex-1 flex justify-end">
                <span className="text-[#32323d80] text-xs">
                    {moment.utc(songData?.duration * 1000).format("mm:ss")}
                </span>
            </div>
        </div>
    );
};

export default memo(List);
