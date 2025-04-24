"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import send from "../../../public/assets/icons/send.svg";
import zalo from "../../../public/assets/icons/simple-icons_zalo.svg";
import facebook from "../../../public/assets/icons/facebook.svg";
import youtube from "../../../public/assets/icons/youtube.svg";

import ministry from "../../../public/assets/img/bo-cong-thuong.png";
import SamSungLogo from "../SamSungLogo";
import { footerLink } from "@/helpers";
import AccordionFooter from "../Accordion/AccordionFooter";
const MobileFooter = () => {
    return (
        <footer className="lg:hidden bg-black-dark mt-6 pt-3 pb-4">
            <div className="container max-lg:px-5 mx-auto">
                <div className="flex flex-col">
                    <section className="mb-4">
                        <h3 className="text-[10px] font-bold text-white">
                            Đăng ký nhận tin
                        </h3>
                        <p className="text-[8px] text-white leading-6 mt-1">
                            Nhập thông tin sản phẩm mới và chương trình khuyến
                            mại của SamCenter
                        </p>
                        <form
                            action=""
                            method="POST"
                            className="relative flex items-center mt-3"
                        >
                            <input
                                required
                                type="email"
                                className="w-full h-[40px] border-none outline-none rounded text-sm text-grey-dark pl-[13px] pr-32"
                                placeholder="Nhập email của bạn"
                            />
                            <button
                                type="submit"
                                className="flex gap-x-[10px] text-sm items-center justify-center absolute right-0 min-w-[100px] h-[40px] bg-blue text-white rounded"
                            >
                                <Image
                                    src={send}
                                    alt="send"
                                    width={14}
                                    height={15}
                                />
                                Đăng ký
                            </button>
                        </form>
                    </section>
                    <SamSungLogo />
                    <p className="text-xs text-white leading-6 mt-2 mb-[30px]">
                        Từ tháng 01/2022, SamCenter – chính thức là đại lý uỷ
                        quyền SamSung tại Việt Nam. Trở thành đối tác với
                        SamSung giúp SamCenter giữ vững cam kết luôn đem lại giá
                        trị tốt nhất cho người dùng sản phẩm SamSung tại Việt
                        Nam.
                    </p>
                    <AccordionFooter
                        label="Về SamCenter"
                        data={footerLink?.slice(0, 3)}
                    />
                    <AccordionFooter
                        label="Hỗ trợ khách hàng"
                        data={footerLink?.slice(3, 9)}
                    />
                    <AccordionFooter
                        label="Liên hệ"
                        data={footerLink?.slice(9, 12)}
                    />
                </div>
                <div className="flex justify-between items-center mt-6">
                    <Link
                        href="http://online.gov.vn/(X(1)S(jfktnnku5rui3vjf5pnk4sgc))/Home/WebDetails/34144?AspxAutoDetectCookieSupport=1"
                        target="_blank"
                    >
                        <Image
                            src={ministry}
                            alt="Bộ Công Thương"
                            width={129}
                            height={39}
                        />
                    </Link>
                    <div className="flex items-center gap-x-2">
                        <Link
                            href="https://www.facebook.com/samcenter.hesman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center border-2 border-[#515154] w-8 h-8 rounded-full hover:bg-white hover:border-transparent transition-colors"
                        >
                            <Image
                                src={facebook}
                                width={6}
                                height={12}
                                alt="facebook"
                            />
                        </Link>
                        <Link
                            href="https://www.youtube.com/channel/UCEhyDvgWs_cK7ProomlZPJQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center border-2 border-[#515154] w-8 h-8 rounded-full full hover:bg-white hover:border-transparent transition-colors"
                        >
                            <Image
                                src={youtube}
                                width={15}
                                height={10}
                                alt="Youtube"
                            />
                        </Link>
                        <Link
                            target="_blank"
                            href="https://zalo.me/3808879171637096332"
                            className="flex justify-center items-center border-2 border-[#515154] w-8 h-8 rounded-full full hover:bg-white hover:border-transparent transition-colors"
                        >
                            <Image
                                src={zalo}
                                width={19}
                                height={8}
                                alt="Zalo"
                            />
                        </Link>
                    </div>
                </div>
                <p className="text-xs text-white mt-4 leading-6">
                    © 2016 Công ty Cổ Phần HESMAN Việt Nam
                    <br />
                    GPDKKD: 0107465657 do Sở KH & ĐT TP. Hà Nội cấp ngày
                    08/06/2016.
                    <br />
                    Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa,
                    thành phố Hà Nội, Việt Nam
                    <br />
                    Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 |
                    Email: lienhe@samcenter.vn
                </p>
            </div>
        </footer>
    );
};

export default MobileFooter;
