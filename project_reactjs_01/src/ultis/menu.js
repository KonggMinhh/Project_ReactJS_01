import icons from "./icons";
const { BiDisc, HiOutlinePresentationChartBar, MdOutlineLibraryMusic } = icons;
export const sidebarMenu = [
    {
        path: "",
        text: "Khám Phá",
        end: true,
        icons: <BiDisc size={24} />,
    },
    {
        path: "zing-chart",
        text: "#zingchart",
        icons: <HiOutlinePresentationChartBar size={24} />,
    },
    {
        path: "mymusic",
        text: "Thư Viện",
        icons: <MdOutlineLibraryMusic size={24} />,
    },
];
