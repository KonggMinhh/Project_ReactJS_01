import React, { memo, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
const ChartSection = () => {
    const { chart, rank } = useSelector((state) => state.app);
    const [data, setData] = useState(null);
    const options = {
        responsive: true,
        pointRadius: 0,
        aspectRadio: 4,
        scales: {
            y: {
                ticks: { display: false },
                grid: { borderDash: [1, 4], color: "gray" },
            },
            x: {
                ticks: { color: "#ffffff80" },
                grid: { color: "transparent" },
            },
        },
        plugins: {
            legend: { display: false },
        },
    };
    useEffect(() => {
        const labels = chart?.times
            ?.filter((item) => +item.hour % 2 === 0)
            ?.map((item) => item.hour);
        const datasets = [];
        if (chart?.items) {
            for (let i = 0; i < 3; i++) {
                datasets.push({
                    data: chart?.items[Object.keys(chart?.items)[i]]
                        .filter((item) => +item.hour % 2 === 0)
                        ?.map((item) => item.counter),
                    borderColor:
                        i === 0 ? "#4a90e2" : i === 1 ? "#50e3c2" : "#e35050",
                    tension: 0.2,
                    borderWidth: 2,
                });
            }
            setData({ labels, datasets });
        }
        console.log(labels, datasets);
    }, [chart]);
    return (
        <section className="mt-12 p-5 relative rounded-lg overflow-hidden ">
            <div className="absolute inset-0 bg-[#2b273f]"></div>
            <div className="absolute inset-0 bg-[#33104cf2] ">
                <div className="before:content-['*'] before:-left-5  before:-top-[50px] before:absolute before:w-[230px] before:h-[143.18px] before:blur-[150px] before:rounded-[115px] before:rotate-[30deg] before:bg-[#ba53f5] after:content-['*'] after:absolute after:w-[230px] after:h-[143.18px] after:blur-[150px] after:rounded-[115px] after:rotate-[30deg] after:bg-[#ba53f5] after:left-[152px] after:bottom[-30px] after:opacity-70"></div>
                <div className="after:content-['*'] after:absolute  after:h-[250px] after:left-[60%] after:right-0 after:-top-[100px] after:bg-[#ba53f5] after:blur-[230px]"></div>
            </div>
            <div className="relative flex">
                <h3 className="text-xl font-bold text-white bg-chart-gradient text-transparent bg-clip-text">
                    #zingchart
                </h3>
            </div>

            <div className="relative flex -mx-[14px]">
                <div className="basis-5/12 px-[14px]">song char</div>
                <div className="basis-7/12 px-[14px]">
                    {data && <Line data={data} options={options} />}
                </div>
            </div>
        </section>
    );
};

export default memo(ChartSection);
