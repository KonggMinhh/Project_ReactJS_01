import React, { useEffect, useRef, useState } from "react";
import { Cpu } from "iconsax-react";
import Image from "next/image";

import close from "../../../public/assets/icons/close.svg";
import HeadingSection from "../HeadingSection";
const StatisticsProduct = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const trigger = useRef<HTMLButtonElement | null>(null);
    const modal = useRef<HTMLDivElement | null>(null);

    // Close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!modal.current) return;
            if (
                !modalOpen ||
                modal.current.contains(target as Node) ||
                (trigger.current && trigger.current.contains(target as Node))
            )
                return;
            setModalOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    }, [modalOpen]);

    // Close if the Esc key is pressed
    useEffect(() => {
        const keyHandler = ({ key }: KeyboardEvent) => {
            if (!modalOpen || key !== "Escape") return;
            setModalOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    }, [modalOpen]);
    return (
        <>
            <section className="sticky top-20 h-min flex-1 max-lg:static max-lg:-order-1">
                <HeadingSection title="Thông số kỹ thuật" icon={Cpu} />
                <table className="w-full my-2">
                    <tbody>
                        <tr className="odd:bg-[#F5F5F5] even:bg-white ">
                            <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                Kích thước màn hình
                            </td>
                            <td className="text-sm">6.7 inches</td>
                        </tr>
                        <tr className="odd:bg-[#F5F5F5] even:bg-white ">
                            <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                Công nghệ màn hình
                            </td>
                            <td className="text-sm">AMOLED</td>
                        </tr>
                        <tr className="odd:bg-[#F5F5F5] even:bg-white ">
                            <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                Tần số quét
                            </td>
                            <td className="text-sm">144 Hz</td>
                        </tr>
                        <tr className="odd:bg-[#F5F5F5] even:bg-white ">
                            <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                Tính năng
                            </td>
                            <td className="text-sm">
                                Camera chính: 12 MP <br />
                                Camera góc siêu rộng: 12 MP
                            </td>
                        </tr>
                        <tr className="odd:bg-[#F5F5F5] even:bg-white ">
                            <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                Chip xử lý (CPU)
                            </td>
                            <td className="text-sm">Snapdragon 8 Gen 2</td>
                        </tr>
                        <tr className="odd:bg-[#F5F5F5] even:bg-white ">
                            <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                RAM
                            </td>
                            <td className="text-sm">8GB</td>
                        </tr>
                        <tr className="odd:bg-[#F5F5F5] even:bg-white ">
                            <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                Thông tin thêm
                            </td>
                            <td className="text-sm">Sạc nhanh 25W</td>
                        </tr>
                        <tr className="odd:bg-[#F5F5F5] even:bg-white ">
                            <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                Dung lượng pin
                            </td>
                            <td className="text-sm">3.700 mAh</td>
                        </tr>
                        <tr className="odd:bg-[#F5F5F5] even:bg-white ">
                            <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                Độ phân giải
                            </td>
                            <td className="text-sm">10 MP</td>
                        </tr>
                    </tbody>
                </table>
                <button
                    ref={trigger}
                    onClick={() => setModalOpen(true)}
                    className="border border-black rounded hover:underline flex items-center justify-center w-full py-[7px] text-black text-sm font-bold"
                    type="button"
                >
                    Xem cấu hình chi tiết
                </button>
            </section>
            <div
                className={`fixed inset-0 flex h-full w-full items-center justify-center bg-black/50 z-50 overflow-y-auto ${
                    modalOpen ? "block" : "hidden"
                }`}
            >
                <div
                    ref={modal}
                    onFocus={() => setModalOpen(true)}
                    onBlur={() => setModalOpen(false)}
                    className="mx-auto w-full max-w-[1022px] overflow-y-auto overflow-x-hidden rounded-lg bg-white p-4 "
                >
                    <div className="sticky -top-9 flex justify-between items-center border-b-[0.5px] border-black pb-2">
                        <h3 className="text-2xl font-bold text-black">
                            Thông số kỹ thuật Galaxy Z flip 128GB
                        </h3>
                        <Image
                            onClick={() => setModalOpen(false)}
                            className="opacity-50 hover:opacity-100 transition-opacity ease-linear cursor-pointer duration-150"
                            src={close}
                            alt="close"
                            width={24}
                            height={24}
                        />
                    </div>
                    <table className="w-full mt-3 flex-auto">
                        <tbody>
                            <tr className="bg-[#F5F5F5] ">
                                <td className="text-sm pl-[10px] py-[10px] font-bold">
                                    Màn hình
                                </td>
                                <td></td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Công nghệ màn hình
                                </td>
                                <td className="text-sm">
                                    Chính: Dynamic AMOLED 2X, Phụ: Super AMOLED
                                </td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Độ phân giải
                                </td>
                                <td className="text-sm">
                                    Chính: FHD+ (2640 x 1080 Pixels) x Phụ: (260
                                    x 512 Pixels)
                                </td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Màn hình rộng
                                </td>
                                <td className="text-sm">
                                    Chính 6.7&quot; Phụ 1.9&quot; - Tần số quét
                                    120 Hz
                                </td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Độ sáng tối đa
                                </td>
                                <td className="text-sm">1200 nits</td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    RAM
                                </td>
                                <td className="text-sm">8GB</td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Thông tin thêm
                                </td>
                                <td className="text-sm">Sạc nhanh 25W</td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Dung lượng pin
                                </td>
                                <td className="text-sm">3.700 mAh</td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Độ phân giải
                                </td>
                                <td className="text-sm">10 MP</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="bg-[#F5F5F5] ">
                                <td className="text-sm pl-[10px] py-[10px] font-bold">
                                    Màn hình
                                </td>
                                <td></td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Công nghệ màn hình
                                </td>
                                <td className="text-sm">
                                    Chính: Dynamic AMOLED 2X, Phụ: Super AMOLED
                                </td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Độ phân giải
                                </td>
                                <td className="text-sm">
                                    Chính: FHD+ (2640 x 1080 Pixels) x Phụ: (260
                                    x 512 Pixels)
                                </td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Màn hình rộng
                                </td>
                                <td className="text-sm">
                                    Chính 6.7&quot; Phụ 1.9&quot; - Tần số quét
                                    120 Hz
                                </td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Độ sáng tối đa
                                </td>
                                <td className="text-sm">1200 nits</td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    RAM
                                </td>
                                <td className="text-sm">8GB</td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Thông tin thêm
                                </td>
                                <td className="text-sm">Sạc nhanh 25W</td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Dung lượng pin
                                </td>
                                <td className="text-sm">3.700 mAh</td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Độ phân giải
                                </td>
                                <td className="text-sm">10 MP</td>
                            </tr>
                        </tbody>
                        {/* <tbody>
                            <tr className="bg-[#F5F5F5] ">
                                <td className="text-sm pl-[10px] py-[10px] font-bold">
                                    Màn hình
                                </td>
                                <td></td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Công nghệ màn hình
                                </td>
                                <td className="text-sm">
                                    Chính: Dynamic AMOLED 2X, Phụ: Super AMOLED
                                </td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Độ phân giải
                                </td>
                                <td className="text-sm">
                                    Chính: FHD+ (2640 x 1080 Pixels) x Phụ: (260
                                    x 512 Pixels)
                                </td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Màn hình rộng
                                </td>
                                <td className="text-sm">
                                    Chính 6.7&quot; Phụ 1.9&quot; - Tần số quét
                                    120 Hz
                                </td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Độ sáng tối đa
                                </td>
                                <td className="text-sm">1200 nits</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr className="bg-[#F5F5F5] ">
                                <td className="text-sm pl-[10px] py-[10px] font-bold">
                                    Màn hình
                                </td>
                                <td></td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Công nghệ màn hình
                                </td>
                                <td className="text-sm">
                                    Chính: Dynamic AMOLED 2X, Phụ: Super AMOLED
                                </td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Độ phân giải
                                </td>
                                <td className="text-sm">
                                    Chính: FHD+ (2640 x 1080 Pixels) x Phụ: (260
                                    x 512 Pixels)
                                </td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Màn hình rộng
                                </td>
                                <td className="text-sm">
                                    Chính 6.7&quot; Phụ 1.9&quot; - Tần số quét
                                    120 Hz
                                </td>
                            </tr>
                            <tr className="border-b-[0.5px] border-grey-dark">
                                <td className="w-1/2 text-sm pl-[10px] py-[10px]">
                                    Độ sáng tối đa
                                </td>
                                <td className="text-sm">1200 nits</td>
                            </tr>
                        </tbody> */}
                    </table>
                </div>
            </div>
        </>
    );
};

export default StatisticsProduct;
