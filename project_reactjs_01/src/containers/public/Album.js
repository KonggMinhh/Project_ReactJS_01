import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import moment from "moment";
import * as apis from "../../apis";
import { Lists, AudioLoading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import icons from "../../ultis/icons";

const { IoPlayCircleOutline } = icons;
const Album = () => {
    const location = useLocation();
    const { pid } = useParams();
    const { isPlaying } = useSelector((state) => state.music);
    // Save Data Api
    const [playlistData, setPlaylistData] = useState({});

    console.log(location.state?.playAlbum);
    const dispatch = useDispatch();
    // Call API
    useEffect(() => {
        const fetchDentalPlaylist = async () => {
            dispatch(actions.loading(true));
            const response = await apis.apiGetDetailPlaylist(pid);
            dispatch(actions.loading(false));
            if (response?.data?.err === 0) {
                setPlaylistData(response.data?.data);
                dispatch(
                    actions.setPlaylist(response?.data?.data?.song?.items)
                );
            }
        };
        fetchDentalPlaylist();
    }, [pid]);

    // Play Album when click play button
    useEffect(() => {
        if (location.state?.playAlbum) {
            const randomSong =
                Math.round(Math.random() * playlistData?.song?.items?.length) -
                1;
            dispatch(
                actions.setCurSongId(
                    playlistData?.song?.items[randomSong]?.encodeId
                )
            );
            console.log(
                playlistData?.song?.items[randomSong]?.encodeId,
                "endcodId"
            );
            dispatch(actions.play(true));
        }
    }, [pid, playlistData]);

    return (
        <section className="flex mt-[70px] pt-[40px] gap-x-[30px]">
            <div className="sticky top-[110px] h-max flex flex-col w-[300px]">
                {/* Thumb */}
                <figure
                    className={`group shadow-playlist-thumb relative pt-[100%] overflow-hidden cursor-pointer ${
                        isPlaying
                            ? "rounded-full"
                            : "rounded-lg animate-rotate-album-pause"
                    }`}
                >
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                        <img
                            className={`absolute inset-0 w-full object-contain   ${
                                isPlaying
                                    ? "rounded-full animate-rotate-album "
                                    : "rounded-lg animate-rotate-album-pause"
                            }`}
                            src={playlistData?.thumbnailM}
                            alt=""
                        />
                    </div>
                    <div
                        className={`absolute inset-0  ${
                            isPlaying
                                ? "group-hover:bg-inherit"
                                : "group-hover:bg-[#00000080]"
                        }`}
                    >
                        <button
                            className={`absolute inset-0 invisible flex justify-center items-center w-full h-full text-white -rotate-180 ${
                                isPlaying
                                    ? " !visible rotate-0"
                                    : "group-hover:visible"
                            }`}
                            // onClick={() => {
                            //     dispatch(
                            //         actions.setCurSongId(
                            //             playlistData?.song?.items[0]?.encodeId
                            //         )
                            //     );
                            //     dispatch(actions.play(true));
                            //     dispatch(actions.playAlbum(true));
                            // }}
                        >
                            {isPlaying ? (
                                <div className="flex justify-center items-center w-[45px] h-[45px] rounded-full border border-white">
                                    <AudioLoading />
                                </div>
                            ) : (
                                <div className="hover:opacity-80">
                                    <IoPlayCircleOutline size={60} />
                                </div>
                            )}
                        </button>
                    </div>
                </figure>
                {/* Content */}
                <section className="mt-3 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-bold ">
                        {playlistData?.title}
                    </h3>
                    <span className="text-[#696969] text-xs font-normal leading-6">
                        Cập nhật: {""}
                        {moment
                            .unix(playlistData?.contentLastUpdate)
                            .format("DD/MM/YYYY")}
                    </span>
                    <div className="text-[#696969] text-xs font-normal leading-6 text-center">
                        {playlistData?.artists?.map((artist, index) => (
                            <React.Fragment>
                                <a
                                    key={index}
                                    className="hover:underline hover:text-[#b72479]"
                                    href={artist?.link}
                                >
                                    {artist?.name}
                                </a>
                                {index < playlistData.artists.length - 1 &&
                                    ", "}
                            </React.Fragment>
                        ))}
                    </div>
                    <span className="text-[#696969] text-xs font-normal leading-6">
                        {`${Math.round(playlistData?.like / 1000)}`}K lượt nghe
                    </span>
                </section>
            </div>
            <section className="flex-1">
                <div className="flex items-center gap-x-2 text-sm">
                    <span className="text-[#696969]">Lời tựa</span>
                    <p className="text-[#32323d] flex-1">
                        {playlistData?.sortDescription}
                    </p>
                </div>
                <Lists totalDuration={playlistData?.song?.totalDuration} />
            </section>
        </section>
    );
};

export default Album;
