import React, { useState } from "react";
import Link from "next/link";
import AnimateHeight from "react-animate-height";
import Image from "next/image";
import { MonitorMobbile, ArrowDown2, ArrowUp2 } from "iconsax-react";
import HeadingSection from "../HeadingSection";
import CommentProduct from "./CommentProduct";
interface InfoProps {
    product: any;
}
const InfoProduct: React.FC<InfoProps> = ({ product }) => {
    const [height, setHeight] = useState<number | "auto">(500);

    return (
        <section className="w-3/5 max-lg:w-full max-lg:mt-5">
            <HeadingSection title="Thông tin sản phẩm" icon={MonitorMobbile} />
            <section className="mt-4">
                <AnimateHeight id="view-more" duration={500} height={height}>
                    <h3 className="text-4xl font-bold text-[#1d1d1f] leading-[54px]">
                        Galaxy Z Flip5: Siêu phẩm gập mới với nhiều nâng cấp ấn
                        tượng
                    </h3>
                    <p className="text-sm mt-8 font-normal">
                        Tiếp nối sự thành công của các thế hệ điện thoại gập đi
                        trước, Samsung đã ra mắt <b>Galaxy Z Flip5 </b>
                        với những cải tiến vượt bậc về kiểu dáng và hiệu năng.
                        Máy sở hữu một <b>màn hình ngoài lớn hơn</b>, ngoại hình
                        gọn gàng hơn và con
                        <b> chip mạnh mẽ hơn</b>. Không đơn thuần chỉ là một
                        chiếc smartphone, đây còn là món phụ kiện thời trang cao
                        cấp sành điệu giúp bạn thể hiện cá tính của mình.
                    </p>
                    <div className="w-[708px] h-[473px] text-center mt-4 bg-slate-500 max-lg:w-full">
                        Img
                    </div>
                    <h3 className="text-[32px] font-bold text-[#1d1d1f] leading-[54px] mt-4">
                        So sánh thông số Galaxy Z Flip 5 & Z Flip4
                    </h3>
                    <table className="w-full border-collapse border border-[#808080] mt-2">
                        <thead>
                            <tr>
                                <th className="border border-[#808080] w-1/6"></th>
                                <th className="border border-[#808080] text-sm text-center text-[#808080] font-bold">
                                    Galaxy Z Flip5
                                </th>
                                <th className="border border-[#808080] text-sm text-center text-[#808080] font-bold">
                                    Galaxy Z Flip4
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-[#808080] text-sm text-center text-[#808080] font-bold">
                                    Thiết kế
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    Công nghệ bản lề Flex gập không kẽ hở
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    Gập lại vẫn còn kẽ hở
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-[#808080] text-sm text-center text-[#808080] font-bold">
                                    Màu sắc
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    Xanh mint, Xám Indie, Tím Fancy, Kem Latte
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    Xanh Lovebird, Xám Graphite, Tím Bora, Hồng
                                    Champagne
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-[#808080] text-sm text-center text-[#808080] font-bold">
                                    Màn hình chính
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    6.7 inch, Dynamic AMOLED 2X, 120Hz
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    6.7 inch, Dynamic AMOLED 2X, 120Hz
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-[#808080] text-sm text-center text-[#808080] font-bold">
                                    Màn hình ngoài
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    3.4 inch, Super AMOLED
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    1.9 inch, Super AMOLED
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-[#808080] text-sm text-center text-[#808080] font-bold">
                                    Hiệu năng
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    Chip Snapdragon 8 Gen 2 For Galaxy
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    Chip Snapdragon 8+ Gen 1
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-[#808080] text-sm text-center text-[#808080] font-bold">
                                    RAM
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    8GB
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    8GB
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-[#808080] text-sm text-center text-[#808080] font-bold">
                                    ROM
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    256GB/512GB
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080] ">
                                    128GB/256GB/512GB
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-[#808080] text-sm text-center text-[#808080] font-bold">
                                    Camera
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    Camera sau: Rộng 12MP & Siêu rộng 12MP
                                    Camera trước: 10MP
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    Camera sau: Rộng 12MP & Siêu rộng 12MP
                                    Camera trước: 10MP
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-[#808080] text-sm text-center text-[#808080] font-bold">
                                    Pin, sạc
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    3700mAh, 25W
                                </td>
                                <td className="border border-[#808080] text-sm font-normal text-[#808080]">
                                    3700mAh, 25W
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-sm mt-[10px] font-normal">
                        Nhìn vào bảng so sánh này có thể thấy Galaxy Z Flip5 có
                        thiết kế hoàn thiện hơn so với thiết bị tiền nhiệm. Đó
                        là nhờ vào <b>công nghệ bản lề Flex </b>
                        giúp máy
                        <b> gập phẳng hoàn toàn</b>, nếp nhăn màn hình cũng được
                        cải thiện. Bên cạnh đó, Samsung còn nâng cấp cho Z Flip5
                        một cấu hình mạnh mẽ hơn. Do đó, nếu bạn đang sử dụng
                        Galaxy Z Flip4 thì có thể nâng cấp lên Galaxy Z Flip5 để
                        nâng tầm trải nghiệm nhé!
                    </p>
                    <div className="w-[708px] h-[473px] text-center mt-4 bg-slate-500 max-lg:w-full">
                        Img
                    </div>
                    <p className="text-sm mt-[10px] font-normal">
                        Nhìn vào bảng so sánh này có thể thấy Galaxy Z Flip5 có
                        thiết kế hoàn thiện hơn so với thiết bị tiền nhiệm. Đó
                        là nhờ vào <b>công nghệ bản lề Flex </b>
                        giúp máy
                        <b> gập phẳng hoàn toàn</b>, nếp nhăn màn hình cũng được
                        cải thiện. Bên cạnh đó, Samsung còn nâng cấp cho Z Flip5
                        một cấu hình mạnh mẽ hơn. Do đó, nếu bạn đang sử dụng
                        Galaxy Z Flip4 thì có thể nâng cấp lên Galaxy Z Flip5 để
                        nâng tầm trải nghiệm nhé!
                    </p>
                    <div className="w-[708px] h-[473px] text-center mt-4 bg-slate-500 max-lg:w-full">
                        Img
                    </div>
                    <p className="text-sm mt-[10px] font-normal">
                        Nhìn vào bảng so sánh này có thể thấy Galaxy Z Flip5 có
                        thiết kế hoàn thiện hơn so với thiết bị tiền nhiệm. Đó
                        là nhờ vào <b>công nghệ bản lề Flex </b>
                        giúp máy
                        <b> gập phẳng hoàn toàn</b>, nếp nhăn màn hình cũng được
                        cải thiện. Bên cạnh đó, Samsung còn nâng cấp cho Z Flip5
                        một cấu hình mạnh mẽ hơn. Do đó, nếu bạn đang sử dụng
                        Galaxy Z Flip4 thì có thể nâng cấp lên Galaxy Z Flip5 để
                        nâng tầm trải nghiệm nhé!
                    </p>
                    <div className="w-[708px] h-[473px] text-center mt-4 bg-slate-500 max-lg:w-full">
                        Img
                    </div>
                    <p className="text-sm mt-[10px] font-normal">
                        Nhìn vào bảng so sánh này có thể thấy Galaxy Z Flip5 có
                        thiết kế hoàn thiện hơn so với thiết bị tiền nhiệm. Đó
                        là nhờ vào <b>công nghệ bản lề Flex </b>
                        giúp máy
                        <b> gập phẳng hoàn toàn</b>, nếp nhăn màn hình cũng được
                        cải thiện. Bên cạnh đó, Samsung còn nâng cấp cho Z Flip5
                        một cấu hình mạnh mẽ hơn. Do đó, nếu bạn đang sử dụng
                        Galaxy Z Flip4 thì có thể nâng cấp lên Galaxy Z Flip5 để
                        nâng tầm trải nghiệm nhé!
                    </p>
                    <div className="w-[708px] h-[473px] text-center mt-4 bg-slate-500 max-lg:w-full">
                        Img
                    </div>
                </AnimateHeight>
                <div className="flex justify-center mt-2">
                    <button
                        className="flex items-center gap-x-1 text-sm font-bold"
                        aria-expanded={height !== 0}
                        aria-controls="view-more"
                        onClick={() =>
                            setHeight(height === "auto" ? 500 : "auto")
                        }
                    >
                        {height === "auto" ? (
                            <>
                                Thu gọn
                                <ArrowUp2 size={16} color="#000" />
                            </>
                        ) : (
                            <>
                                Tìm hiểu thêm
                                <ArrowDown2 size={16} color="#000" />
                            </>
                        )}
                    </button>
                </div>
            </section>
            <CommentProduct product={product} />
        </section>
    );
};

export default InfoProduct;
