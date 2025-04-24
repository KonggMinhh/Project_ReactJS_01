import HeadingSection from "@/components/HeadingSection";
import React, { useState } from "react";

export const CartPayment = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <section className="bg-grey rounded p-4 mt-3 max-lg:-mx-5 max-lg:rounded-none">
            <HeadingSection title="Thông tin thanh toán" />
            <form method="POST" className="mt-3">
                <div className="flex flex-col gap-y-2">
                    <label
                        className="text-sm font-bold text-[#1D1D1F]"
                        htmlFor="name"
                    >
                        Thông tin cá nhân
                    </label>
                    <input
                        className="px-4 py-[10px] h-12 placeholder:text-base text-base bg-white focus:outline-blue border border-grey-dark rounded max-lg:rounded-lg"
                        // className={`${
                        //     errors.firstName
                        //         ? "px-4 py-[10px] h-12 placeholder:text-base text-base border border-red outline-none rounded"
                        //         : "px-4 py-[10px] h-12 placeholder:text-base text-base bg-white focus:outline-blue border border-grey-dark rounded"
                        // }`}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Tên"
                    />
                </div>
                <div className="flex gap-x-3 mt-3 max-lg:flex-col max-lg:gap-y-2 max-lg:mt-2 max-lg:gap-x-2">
                    <input
                        className="flex-1 px-4 py-[10px] h-12 placeholder:text-base text-base bg-white focus:outline-blue border border-grey-dark rounded max-lg:rounded-lg max-lg:flex-auto"
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Số điện thoại"
                    />
                    <input
                        className="flex-1 px-4 py-[10px] h-12 placeholder:text-base text-base bg-white focus:outline-blue border border-grey-dark rounded max-lg:rounded-lg max-lg:flex-auto"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                    />
                </div>
                <div className="flex flex-col mt-3">
                    <span className="text-sm font-bold">
                        Hình thức nhận hàng
                    </span>
                    <div className="flex gap-x-10 mt-2">
                        <div className="flex items-center gap-x-2">
                            <input
                                type="radio"
                                name="ship"
                                id="ship-shop"
                                className="max-lg:w-6 max-lg:h-6"
                            />
                            <label
                                htmlFor="ship-shop"
                                className="text-sm font-bold max-xl:text-xs"
                            >
                                Nhận tại cửa hàng
                            </label>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <input
                                type="radio"
                                name="ship"
                                id="ship-delivery"
                                className="max-lg:w-6 max-lg:h-6"
                            />
                            <label
                                htmlFor="ship-delivery"
                                className="text-sm font-bold max-xl:text-xs" 
                            >
                                Giao tận nơi
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-x-3 mt-4 max-lg:mt-2 max-lg:flex-col max-lg:gap-y-2">
                        <select
                            name=""
                            id=""
                            className="flex-1 border bg-white border-grey-dark rounded h-12 p-3 appearance-none bg-arrow-down-payment tex-base text-grey-dark focus:outline-blue max-lg:rounded-lg"
                        >
                            <option value="">Tỉnh, Thành phố</option>
                        </select>
                        <select
                            name=""
                            id=""
                            className="flex-1 border bg-white border-grey-dark rounded h-12 p-3 appearance-none bg-arrow-down-payment tex-base text-grey-dark focus:outline-blue max-lg:rounded-lg"
                        >
                            <option value="">Quận, huyện</option>
                        </select>
                    </div>
                    <select
                        name=""
                        id=""
                        className="flex-1 border bg-white border-grey-dark rounded h-12 p-3 appearance-none bg-arrow-down-payment-full tex-base text-grey-dark focus:outline-blue mt-4 max-lg:rounded-lg max-lg:mt-2"
                    >
                        <option value="">Mời bạn chọn địa chỉ cửa hàng</option>
                    </select>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Ghi chú"
                        className="flex-1 border bg-white border-grey-dark rounded h-12 p-3 appearance-none tex-base text-grey-dark focus:outline-blue mt-4 max-lg:rounded-lg max-lg:mt-2"
                    ></input>

                    <label className="flex items-center text-sm font-bold gap-x-2 mt-3 ">
                        <input
                            className="h-4 w-4 "
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                        />
                        Xuất hoá đơn công ty
                    </label>
                    {isChecked && (
                        <div className="mt-3">
                            <input
                                className="w-full px-4 py-[10px] h-12 placeholder:text-base text-base bg-white focus:outline-blue border border-grey-dark rounded max-lg:rounded-lg"
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Tên công ty"
                            />
                            <input
                                className="w-full px-4 py-[10px] h-12 placeholder:text-base text-base bg-white focus:outline-blue border border-grey-dark rounded mt-3 max-lg:rounded-lg max-lg:mt-2"
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Địa chỉ"
                            />
                            <input
                                className="w-full px-4 py-[10px] h-12 placeholder:text-base text-base bg-white focus:outline-blue border border-grey-dark rounded mt-3 max-lg:rounded-lg max-lg:mt-2"
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Mã số thuế"
                            />
                        </div>
                    )}
                </div>
            </form>
        </section>
    );
};
