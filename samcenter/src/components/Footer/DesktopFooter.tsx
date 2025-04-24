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

const DesktopFooter = () => {
    return (
        <footer className="max-lg:hidden bg-black-dark mt-14 lg:px-[10px]">
            <div className="container mx-auto">
                <section className="flex py-[59px] pb-[63px] border-b border-solid border-[#515154]">
                    <section className="w-[30%] mr-[60px]">
                        <SamSungLogo />
                        <p className="text-xs text-white leading-6 mt-4">
                            Từ tháng 01/2022, SamCenter – chính thức là đại lý
                            uỷ quyền SamSung tại Việt Nam. Trở thành đối tác với
                            SamSung giúp SamCenter giữ vững cam kết luôn đem lại
                            giá trị tốt nhất cho người dùng sản phẩm SamSung tại
                            Việt Nam.
                        </p>
                        <div className="flex items-center gap-[10px] mt-[10px]">
                            <Link
                                href="https://www.facebook.com/samcenter.hesman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center border-2 border-[#515154] w-[50px] h-[50px] rounded-full hover:bg-white hover:border-transparent transition-colors"
                            >
                                <Image
                                    src={facebook}
                                    width={10}
                                    height={18}
                                    alt="facebook"
                                />
                            </Link>
                            <Link
                                href="https://www.youtube.com/channel/UCEhyDvgWs_cK7ProomlZPJQ"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-center items-center border-2 border-[#515154] w-[50px] h-[50px] rounded-full full hover:bg-white hover:border-transparent transition-colors"
                            >
                                <Image
                                    src={youtube}
                                    width={23}
                                    height={15}
                                    alt="Youtube"
                                />
                            </Link>
                            <Link
                                target="_blank"
                                href="https://zalo.me/3808879171637096332"
                                className="flex justify-center items-center border-2 border-[#515154] w-[50px] h-[50px] rounded-full full hover:bg-white hover:border-transparent transition-colors"
                            >
                                <Image
                                    src={zalo}
                                    width={30}
                                    height={13}
                                    alt="Zalo"
                                />
                            </Link>
                        </div>
                    </section>
                    <div className="flex xl:gap-x-[37px] lg:gap-x-1">
                        <section>
                            <h3 className="text-base font-bold text-[#F2F2F2]">
                                Về SamCenter
                            </h3>
                            <ul className="flex flex-col gap-y-2 mt-4 text-white">
                                {footerLink?.slice(0, 3).map((link) => (
                                    <li key={link.title}>
                                        <Link
                                            className="hover:underline text-xs hover:text-[#86868b] transition-colors whitespace-nowrap"
                                            href={link.href}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section>
                            <h3 className="text-base font-bold text-[#F2F2F2]">
                                Hỗ trợ khách hàng
                            </h3>
                            <ul className="flex flex-col gap-y-2 mt-4 text-white">
                                {footerLink?.slice(4, 9).map((link) => (
                                    <li key={link.title}>
                                        <Link
                                            className="hover:underline text-xs hover:text-[#86868b] transition-colors whitespace-nowrap"
                                            href={link.href}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section>
                            <h3 className="text-base font-bold text-[#F2F2F2]">
                                Liên hệ
                            </h3>
                            <ul className="flex flex-col gap-y-2 mt-4 text-white">
                                {footerLink?.slice(-1).map((link) => (
                                    <>
                                        <li key={link.title}>
                                            <Link
                                                className="hover:underline text-xs hover:text-[#86868b] transition-colors whitespace-nowrap"
                                                href={link.href}
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="tel:1800 4886"
                                                className="hover:text-[#86868b] transition-colors text-xs whitespace-nowrap"
                                            >
                                                Hotline: 1800 4886 (8h00 -
                                                22h00)
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="mailto:lienhe@samcenter.vn"
                                                className="hover:underline text-xs whitespace-nowrap"
                                            >
                                                Email: lienhe@samcenter.vn
                                            </Link>
                                        </li>
                                    </>
                                ))}
                            </ul>
                        </section>
                        <section>
                            <h3 className="text-base font-bold text-[#F2F2F2]">
                                Đăng ký nhận tin
                            </h3>
                            <ul className="flex flex-col gap-y-2 mt-4 text-white">
                                <li className="text-xs leading-6">
                                    Nhập thông tin sản phẩm mới và chương trình
                                    khuyến mại của SamCenter
                                </li>
                                <form
                                    action=""
                                    method="POST"
                                    className="relative flex items-center"
                                >
                                    <input
                                        required
                                        type="email"
                                        className="w-[285px] h-[40px] border-none outline-none rounded text-sm text-grey-dark pl-[13px] pr-[110px]"
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
                            </ul>
                        </section>
                    </div>
                </section>
                <section className="flex items-center justify-between pt-5 pb-[43px]">
                    <p className="text-[13px] text-[#515154]">
                        © 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD:
                        0107465657 do Sở KH & ĐT TP. Hà Nội cấp ngày 08/06/2016.
                        <br />
                        Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa,
                        thành phố Hà Nội, Việt Nam
                        <br />
                        Đại diện pháp luật: PHẠM MẠNH HÒA | ĐT: 0247.305.9999 |
                        Email: lienhe@samcenter.vn
                    </p>
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
                </section>
            </div>
        </footer>
    );
};

export default DesktopFooter;
