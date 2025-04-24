import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import HeadingSection from "@/components/HeadingSection";
import tick from "../../../public/assets/icons/tick.svg";
import { CartPayment } from "./CartPayment";
import Payment01 from "../../../public/assets/img/payment-01.png";
import OnePay from "../../../public/assets/img/onepay.png";
import PayYoo from "../../../public/assets/img/payoo.png";
import { useCart } from "@/hook/useCart";
import CartItem from "./CartItem";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
const CartClient = () => {
    const { cartProducts } = useCart();

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <h1 className="text-base text-center h-screen">
                Giỏ hàng của bạn đang trống!
            </h1>
        );
    }

    return (
        <div className="mt-4 max-lg:mt-0">
            <div className="container mx-auto max-sm:px-5 lg:px-[10px] md:px-5">
                <Breadcrumb />
                <div className="flex gap-x-5 max-lg:flex-col">
                    <div className="flex flex-col gap-y-3">
                        <section className="bg-grey rounded p-4 max-lg:-mx-5 max-lg:rounded-none">
                            <HeadingSection title="Thông tin sản phẩm" />
                            <div className="px-4 py-3 bg-white rounded flex items-start mt-3 max-lg:flex max-lg:gap-x-[10px] max-lg:p-2">
                                {cartProducts &&
                                    cartProducts.map((item) => {
                                        return (
                                            <CartItem
                                                key={item.id}
                                                item={item}
                                            />
                                        );
                                    })}
                            </div>
                            <div className="flex gap-2 items-center justify-end mt-3 max-lg:gap-x-[10px]">
                                <Button
                                    small
                                    border
                                    label="Cập nhật giỏ hàng"
                                    onClick={() => {}}
                                    custom="!w-[180px] text-sm max-lg:flex-1"
                                />
                                <Button
                                    small
                                    border
                                    label="Tiếp tục mua sắm"
                                    onClick={() => {}}
                                    custom="!w-[180px] text-sm  max-lg:flex-1"
                                />
                            </div>
                        </section>
                        <CartPayment />
                        <section className="bg-grey rounded p-4 max-lg:-mx-5 max-lg:rounded-none">
                            <HeadingSection title="Hình thức thanh toán" />
                            <span className=" block text-sm font-bold mt-2">
                                Bạn vui lòng chọn 1 trong các hình thức thanh
                                toán dưới đây:
                            </span>
                            <ul className="grid grid-cols-2 gap-3 mt-2 max-lg:grid-cols-1 max-lg:gap-y-2">
                                <li className=" flex items-center bg-white p-3 rounded gap-x-3 [&:has(input:checked)]:border-blue border-2 max-lg:rounded-lg">
                                    <label
                                        htmlFor="payment-1"
                                        className=" flex items-center gap-3 text-sm text-[#333] "
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="payment-1"
                                            className="w-5 h-5 rounded "
                                        />
                                        <Image
                                            src={Payment01}
                                            alt="Bank"
                                            width={36}
                                            height={36}
                                        />
                                        Chuyển khoản ngân hàng
                                    </label>
                                </li>
                                <li className=" flex items-center bg-white p-3 rounded gap-x-3  [&:has(input:checked)]:border-blue border-2 max-lg:rounded-lg">
                                    <label
                                        htmlFor="payment-2"
                                        className=" flex items-center gap-3 text-sm  text-[#333] "
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="payment-2"
                                            className="w-5 h-5 rounded "
                                        />
                                        <Image
                                            src={OnePay}
                                            alt="Bank"
                                            width={36}
                                            height={36}
                                        />
                                        Chuyển khoản ngân hàng
                                    </label>
                                </li>
                                <li className=" flex items-center bg-white p-3 rounded gap-x-3  [&:has(input:checked)]:border-blue border-2 max-lg:rounded-lg">
                                    <label
                                        htmlFor="payment-3"
                                        className=" flex items-center gap-3 text-sm text-[#333] "
                                    >
                                        <input
                                            type="radio"
                                            name="payment"
                                            id="payment-3"
                                            className="w-5 h-5 rounded"
                                        />
                                        <Image
                                            src={PayYoo}
                                            alt="Bank"
                                            width={36}
                                            height={36}
                                        />
                                        Chuyển khoản ngân hàng
                                    </label>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <section className="sticky top-16 h-min bg-grey rounded px-4 pt-4 pb-9 max-lg:static max-lg:mt-3 max-lg:-mx-5 max-lg:rounded-none">
                        <form className="flex">
                            <div className="relative max-lg:w-full w-full">
                                <input
                                    required
                                    className="bg-transparent h-12 border-2 border-grey-dark rounded-tl rounded-bl focus:border-blue outline-none
                                    text-base text-grey-dark placeholder:text-base placeholder:text-grey-dark px-3 py-4 max-lg:rounded-tl-lg max-lg:rounded-bl-lg max-lg:w-full w-full"
                                    placeholder="Mã giảm giá"
                                    type="text"
                                    name=""
                                    id=""
                                />
                                <Image
                                    className="absolute top-3 right-0 rounded-tl"
                                    src={tick}
                                    alt="tick"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <Button
                                label="Áp dụng"
                                onClick={() => {}}
                                custom="h-12 !w-[104px] rounded-tr rounded-br rounded-tl-none rounded-bl-none max-lg:rounded-tr-lg max-lg:w-[22.5%] max-lg:rounded-br-lg max-lg:ml-auto whitespace-nowrap max-lg:px-2"
                            />
                        </form>
                        <div className="flex justify-between mt-3">
                            <span className="text-base ">Tổng phụ:</span>
                            <span className="text-base">60.550.000 đ</span>
                        </div>
                        <div className="flex justify-between mt-3">
                            <span className="text-base">Giảm giá:</span>
                            <span className="text-base">-550.000 đ</span>
                        </div>
                        <div className="flex justify-between mt-3">
                            <span className="text-base font-bold">
                                Tổng cộng :
                            </span>
                            <span className="text-base font-bold">
                                60.000.000đ
                            </span>
                        </div>
                        <div className="flex gap-x-2 items-start mt-3 max-lg:mt-2">
                            <input
                                type="checkbox"
                                name=""
                                id="agree"
                                className="w-5 h-5 rounded"
                            />
                            <label
                                htmlFor="agree"
                                className="text-sm font-bold"
                            >
                                Tôi đã đọc và
                                <Link href="/" className="text-blue">
                                    {" "}
                                    đồng ý điều khoản và điều kiện{" "}
                                </Link>
                                của SamCenter
                            </label>
                        </div>
                        <Button
                            label="Xác nhận"
                            onClick={() => {}}
                            custom="mt-4 rounded-lg max-lg:rounded-lg"
                        />
                        <span className="block text-sm text-red mt-3">
                            (*) Phí phụ thu sẽ được tính khi bạn tiến hành thanh
                            toán.
                        </span>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CartClient;
