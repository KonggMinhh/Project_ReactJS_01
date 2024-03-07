import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import SongItem from "./SongItem";
const NewRelease = () => {
    const { newRelease } = useSelector((state) => state.app);
    const [isActive, setIsActive] = useState(0);
    const [isNewRelease, setIsNewRelease] = useState([]);

    useEffect(() => {
        if (isActive === 0) {
            setIsNewRelease(newRelease?.items?.all);
        } else if (isActive === 1) {
            setIsNewRelease(newRelease?.items?.vPop);
        } else {
            setIsNewRelease(newRelease?.items?.others);
        }
    }, [isActive, newRelease]);
    return (
        <section className="pt-12">
            <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-[#32323d]">
                    {newRelease?.title}
                </h3>
                <div className="flex items-center text-xs text-[#696969] font-medium uppercase">
                    <button className="hover:text-[#b72479] uppercase">
                        Tất cả
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-x-[15px]">
                <button
                    type="button"
                    onClick={() => setIsActive(0)}
                    className={`inline-flex items-center justify-center text-xs border border-[#0000001a] rounded-full py-1 px-6 cursor-pointer select-none text-[#32323d] uppercase ${
                        isActive === 0 &&
                        "bg-[#b72479] text-white hover:brightness-90"
                    }`}
                >
                    Tất Cả
                </button>
                <button
                    type="button"
                    onClick={() => setIsActive(1)}
                    className={`inline-flex items-center justify-center text-xs border border-[#0000001a] rounded-full py-1 px-6 cursor-pointer select-none text-[#32323d] uppercase ${
                        isActive === 1 &&
                        "bg-[#b72479] text-white hover:brightness-90"
                    }`}
                >
                    Viet Nam
                </button>
                <button
                    type="button"
                    onClick={() => setIsActive(2)}
                    className={`inline-flex items-center justify-center text-xs border border-[#0000001a] rounded-full py-1 px-6 cursor-pointer select-none text-[#32323d] uppercase ${
                        isActive === 2 &&
                        "bg-[#b72479] text-white hover:brightness-90"
                    }`}
                >
                    Quốc Tế
                </button>
                {/* <Button text="text" /> */}
            </div>
            <div className="flex flex-wrap mt-4 -mx-[14px]">
                {isNewRelease?.slice(0, 12).map((item) => (
                    <div className="basis-1/2 xl:basis-1/3 px-[14px]">
                        <SongItem
                            key={item?.encodeId}
                            thumbnail={item?.thumbnail}
                            title={item?.title}
                            artists={item?.artists}
                            releaseDate={item.releaseDate}
                            sid={item?.encodeId}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewRelease;
