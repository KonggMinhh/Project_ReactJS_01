import React from "react";
import { useSelector } from "react-redux";
import { Section, Slider, NewRelease, ChartSection } from "../../components";
import { Link } from "react-router-dom";

const Home = () => {
    const { chill, remix, sad, top100, weekChart, albumHot } = useSelector(
        (state) => state.app
    );
    return (
        <>
            <section className="flex-1 bg-[#f9dbdbcc]">
                <Slider />
                <NewRelease />
                <Section data={chill} />
                <Section data={remix} />
                <Section data={sad} />
                {/* Chart Zing */}
                <ChartSection/>
                {/* Week Chart */}
                <div className="flex -mx-[14px] mt-7">
                    {weekChart.map((item) => (
                        <div
                            key={item.link}
                            className="group basis-1/3 px-[14px]"
                        >
                            <Link to={item?.link.split(".")[0]}>
                                <div className="relative pt-[29%] w-full rounded-md overflow-hidden">
                                    <img
                                        className="group-hover:scale-110 transition-transform duration-700 ease-in-out absolute inset-0 w-full h-full object-contain rounded-md"
                                        src={item.cover}
                                        alt=""
                                    />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <Section data={top100} />
                {/* Album Hot*/}
                <Section data={albumHot} />
            </section>
        </>
    );
};

export default Home;
