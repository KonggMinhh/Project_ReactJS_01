import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as apis from "../apis";
import icons from "../ultis/icons";
import * as actions from "../store/actions";
import moment from "moment";
import { toast } from "react-toastify";
import LoadingSong from "./LoadingSong";

const {
    GoHeart,
    IoIosMore,
    IoIosRepeat,
    PiShuffle,
    PiSkipForwardFill,
    PiSkipBackFill,
    IoPlayCircleOutline,
    IoPauseCircleOutline,
    PiRepeatOnce,
    BsMusicNoteList,
    SlVolume1,
    SlVolume2,
    SlVolumeOff,
} = icons;
var intervalId;
const Player = ({ setIsShowRightSidebar, isShowRightSidebar }) => {
    const { curSongId, isPlaying, songs } = useSelector((state) => state.music);
    const [songInfo, setSongInfo] = useState(null);
    const [curSeconds, setCurSeconds] = useState(0);
    const [audio, setAudio] = useState(new Audio());
    const [isShuffle, setIsShuffle] = useState(false);
    const [repeatMode, setRepeatMode] = useState(0);
    const [isLoadedSource, setIsLoadedSource] = useState(true);
    const [volume, setVolume] = useState(70);
    const thumbRef = useRef();
    const trackRef = useRef();
    const dispatch = useDispatch();
    // console.log(songInfo, "songinfo");

    // Call API
    useEffect(() => {
        const fetchDetailSong = async () => {
            setIsLoadedSource(false);
            const [res1, res2] = await Promise.all([
                apis.apiGetDetailSong(curSongId),
                apis.apiGetSong(curSongId),
            ]);
            setIsLoadedSource(true);
            if (res1.data.err === 0) {
                setSongInfo(res1.data.data);
            }
            if (res2.data.err === 0) {
                audio.pause();
                setAudio(new Audio(res2.data.data["128"]));
            } else {
                // Bai hat chi danh cho VIP
                audio.pause();
                setAudio(new Audio());
                dispatch(actions.play(false));
                toast.warn(res2.data.msg);
                setCurSeconds(0);
                thumbRef.current.style.cssText = `right: 100%`;
            }
        };
        fetchDetailSong();
    }, [curSongId]);

    // Play Song
    useEffect(() => {
        intervalId && clearInterval(intervalId);
        audio.pause();
        audio.load();
        if (isPlaying && thumbRef.current) {
            audio.play();
            intervalId = setInterval(() => {
                let percent =
                    Math.round(
                        (audio.currentTime * 10000) / songInfo?.duration
                    ) / 100;
                thumbRef.current.style.cssText = `right: ${100 - percent}%`;
                setCurSeconds(Math.round(audio.currentTime));
            }, 50);
        }
    }, [audio]);

    // Shuffle Song
    useEffect(() => {
        const handleEnded = () => {
            if (isShuffle) {
                handleShuffle();
            } else if (repeatMode) {
                repeatMode === 1 ? handleRepeatOne() : handleNextSong();
            } else {
                audio.pause();
                dispatch(actions.play(false));
            }
        };
        audio.addEventListener("ended", handleEnded);
        return () => {
            audio.removeEventListener("ended", handleEnded);
        };
    }, [audio, isShuffle, repeatMode]);

    // Volume
    useEffect(() => {
        audio.volume = volume / 100;
    }, [volume]);

    // Handle Play
    const handleTogglePlayMusic = () => {
        if (isPlaying) {
            audio.pause();
            dispatch(actions.play(false));
        } else {
            audio.play();
            dispatch(actions.play(true));
        }
    };

    // Handle Progress Bar play
    const handleClickProgressbar = (e) => {
        const trackRect = trackRef.current.getBoundingClientRect();
        const percent =
            Math.round(
                ((e.clientX - trackRect.left) * 10000) / trackRect.width
            ) / 100;
        thumbRef.current.style.cssText = `right: ${100 - percent}%`;
        audio.currentTime = (percent * songInfo?.duration) / 100;
        setCurSeconds(Math.round((percent * songInfo?.duration) / 100));
    };

    // Handle Next Song
    const handleNextSong = () => {
        if (songs) {
            let currentSongIndex;
            songs.forEach((item, index) => {
                if (item.encodeId === curSongId) {
                    currentSongIndex = index;
                }
            });
            dispatch(
                actions.setCurSongId(songs[currentSongIndex + 1]?.encodeId)
            );
            dispatch(actions.play(true));
        }
    };
    // Handle Prev Song
    const handlePrevSong = () => {
        if (songs) {
            let currentSongIndex;
            songs.forEach((item, index) => {
                if (item.encodeId === curSongId) {
                    currentSongIndex = index;
                }
            });
            dispatch(
                actions.setCurSongId(songs[currentSongIndex - 1]?.encodeId)
            );
            dispatch(actions.play(true));
        }
    };

    // Handle Repeat One
    const handleRepeatOne = () => {
        console.log("repeat one");
        audio.play();
    };
    // Handle Shuffle
    const handleShuffle = () => {
        const randomIndex = Math.round(Math.random() * songs?.length) - 1;
        console.log(randomIndex, "randomIndex");
        dispatch(actions.setCurSongId(songs[randomIndex]?.encodeId));
        dispatch(actions.play(true));
    };

    return (
        <div className="flex flex-1 px-5 justify-between items-center bg-player-bg">
            {/* Info Music */}
            <div className="w-[30%] flex items-center gap-x-[10px]">
                {/* Img  */}
                <a href="/">
                    <figure>
                        <img
                            src={songInfo?.thumbnail}
                            alt="Thumbnail"
                            className="object-cover w-16 h-16 rounded"
                        />
                    </figure>
                </a>
                {/* Content */}
                <div className="flex flex-col">
                    <a href={songInfo?.link}>
                        <span className="text-sm font-medium text-[#32323d]">
                            {songInfo?.title}
                        </span>
                    </a>
                    <h3 className="text-xs text-[#696969]">
                        {songInfo?.artists?.map((artist, index) => (
                            <React.Fragment key={index}>
                                <a
                                    className="hover:underline hover:text-[#b72479]"
                                    href={artist?.link}
                                >
                                    {artist?.name}
                                </a>
                                {index < songInfo.artists.length - 1 && ", "}
                            </React.Fragment>
                        ))}
                    </h3>
                </div>
                {/* Heart */}
                <button className="p-[10px]">
                    <GoHeart size={16} />
                </button>
                {/* More */}
                <button>
                    <IoIosMore size={16} />
                </button>
            </div>
            {/* Play Music */}
            <div className="flex flex-1 flex-col items-center">
                <div className="flex items-center">
                    <button
                        title={
                            isShuffle
                                ? "Tắt phát ngẫu nhiên"
                                : "Bật phát ngẫu nhiên"
                        }
                        className={`px-5 py-[5px] ${
                            isShuffle ? "text-[#b72479]" : "text-[#32323d]"
                        }`}
                        onClick={() => setIsShuffle((prev) => !prev)}
                    >
                        <PiShuffle size={20} />
                    </button>
                    <button
                        onClick={handlePrevSong}
                        className={`px-5 py-[5px] ${
                            !songs
                                ? "opacity-35 cursor-not-allowed"
                                : "opacity-100 cursor-pointer"
                        }`}
                    >
                        <PiSkipBackFill size={16} />
                    </button>
                    <button
                        className="px-5 py-[5px] hover:text-[#b72479] transition-colors duration-300 ease-linear"
                        onClick={handleTogglePlayMusic}
                    >
                        {!isLoadedSource ? (
                            <div className="text-[#32323d]">
                                <LoadingSong />
                            </div>
                        ) : isPlaying ? (
                            <IoPauseCircleOutline size={40} />
                        ) : (
                            <IoPlayCircleOutline size={40} />
                        )}
                    </button>
                    <button
                        onClick={handleNextSong}
                        className={`px-5 py-[5px] ${
                            !songs
                                ? "opacity-35 cursor-not-allowed"
                                : "opacity-100 cursor-pointer"
                        }`}
                    >
                        <PiSkipForwardFill size={16} />
                    </button>
                    <button
                        title={
                            repeatMode === 1
                                ? "Bật phát lại một bài hát"
                                : "Bật phát lại tất cả bài hát"
                        }
                        className={`px-5 py-[5px] ${
                            repeatMode ? "text-[#b72479]" : "text-[#32323d]"
                        }`}
                        onClick={() =>
                            setRepeatMode((prev) => (prev === 2 ? 0 : prev + 1))
                        }
                    >
                        {repeatMode === 1 ? (
                            <PiRepeatOnce size={20} />
                        ) : (
                            <IoIosRepeat size={20} />
                        )}
                    </button>
                </div>
                <div className="flex items-center gap-x-[10px] w-full">
                    <span className="text-xs font-medium text-[#32323d]">
                        {moment.utc(curSeconds * 1000).format("mm:ss")}
                    </span>
                    <div
                        className="group flex-1 relative h-1 hover:h-[6px] bg-[rgba(0,0,0,0.1)] rounded cursor-pointer"
                        onClick={handleClickProgressbar}
                        ref={trackRef}
                    >
                        <div
                            ref={thumbRef}
                            className="group-hover:after:visible group-hover:after:opacity-100 absolute after:content-[''] after:absolute after:w-3 after:h-3 after:rounded-full after:translate-x-[-6px] after:translate-y-[-3px] after:bg-[#b72479] after:invisible after:opacity-0 left-0 h-full bg-[#b72479] rounded "
                        ></div>
                    </div>
                    <span className="text-xs font-medium text-[#32323d]">
                        {moment.utc(songInfo?.duration * 1000).format("mm:ss")}
                    </span>
                </div>
            </div>
            {/* Options Music */}
            <div className="w-[30%] flex items-center justify-end">
                <div className="flex items-center gap">
                    <button
                        onClick={() =>
                            setVolume((prev) => (+prev === 0 ? 70 : 0))
                        }
                        className="p-[5px] text-[#32323d]"
                    >
                        {+volume >= 50 ? (
                            <SlVolume2 size={20} />
                        ) : +volume === 0 ? (
                            <SlVolumeOff size={20} />
                        ) : (
                            <SlVolume1 size={20} />
                        )}
                    </button>
                    <input
                        type="range"
                        name="volume"
                        id="volume"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={(e) => setVolume(e.target.value)}
                    />
                </div>
                <span className="h-[33px] w-[1px] bg-[#0000000d] inline-block mx-5"></span>
                <button
                    title="Dang sách phát"
                    className={`p-[5px]  border border-transparent rounded ${
                        isShowRightSidebar
                            ? "text-white bg-[#b72479] hover:opacity-80"
                            : "bg-[#ffffff1a]"
                    }`}
                    onClick={() => setIsShowRightSidebar((prev) => !prev)}
                >
                    <BsMusicNoteList size={16} />
                </button>
            </div>
        </div>
    );
};

export default Player;
