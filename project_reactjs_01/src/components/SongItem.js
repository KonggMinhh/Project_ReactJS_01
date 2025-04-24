import React, { memo } from "react";
import icons from "../ultis/icons";
import moment from "moment";
import "moment/locale/vi";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";
const { IoPlay } = icons;

const SongItem = ({ thumbnail, title, artists, releaseDate, sid }) => {
    const dispatch = useDispatch();
    return (
        <article className="group rounded hover:bg-[#0000000d] p-[10px] flex gap-x-[10px]">
            <div className="relative h-max">
                <img
                    className="w-[60px] h-[60px] max-w-[60px] object-contain rounded"
                    src={thumbnail}
                    alt={title}
                />
                <div className="absolute flex justify-center items-center inset-0 bg-[#00000080] invisible group-hover:visible hover:cursor-pointer rounded">
                    <button
                        className="text-white hover:filter hover:brightness-90"
                        onClick={() => {
                            dispatch(actions.setCurSongId(sid));
                            dispatch(actions.play(true));
                        }}
                    >
                        <IoPlay size={18} />
                    </button>
                </div>
            </div>
            <div>
                <span className="text-sm text-[#32323d] font-medium leading-[10px]">
                    {title.length > 30 ? `${title.slice(0, 30)}...` : title}
                </span>
                <h3 className="text-xs text-[#696969] mt-1 leading-[10px]">
                    {artists?.map((artist, index) => (
                        <React.Fragment key={index}>
                            <a
                                className="hover:underline hover:text-[#b72479]"
                                href={artist?.link}
                            >
                                {artist.alias}
                            </a>
                            {index < artists.length - 1 && ", "}
                        </React.Fragment>
                    ))}
                </h3>
                <span className="inline-block text-xs text-[#696969] mt-1 leading-[10px]">
                    {moment(releaseDate * 1000).fromNow()}
                </span>
            </div>
        </article>
    );
};

export default memo(SongItem);
