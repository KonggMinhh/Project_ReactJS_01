"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";

import edit from "../../../../../public/assets/img/edit-pass.png";
import HeadingSection from "@/components/HeadingSection";
import Button from "@/components/Button";

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .required("Vui lòng nhập email của bạn !")
        .matches(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            "Email không hợp lệ !"
        ),
});
const EditPass = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const formSubmitHandler = (data: any) => {
        console.log(data);
        router.push("/confirm");
    };
    return (
        <section className="-mb-14">
            <div className="container mx-auto">
                <div className="flex  gap-x-5">
                    <figure>
                        <Image src={edit} width={793} height={634} alt="edit" />
                    </figure>
                    <div className="mt-10">
                        <HeadingSection title="Lấy lại mật khẩu" />
                        <p className="text-sm font-bold mt-3 text-[#86868B] font-samsung-one">
                            Vui lòng nhập Email bạn đã đăng ký với SamCenter để
                            lấy lại mật khẩu.
                        </p>
                        <form className="mt-4" autoComplete="off" method="POST">
                            <div className="flex flex-col">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    required
                                    id="email"
                                    type="email"
                                    placeholder="nguyenvana@gmail.com"
                                    {...register("email")}
                                    className={`${
                                        errors.email
                                            ? "px-[10px] h-12 placeholder:text-sm text-sm border border-red outline-none rounded"
                                            : "px-[10px] h-12 placeholder:text-sm  text-sm bg-white focus:outline-blue border border-grey-dark rounded"
                                    }`}
                                />

                                {errors.email ? (
                                    <p className="mt-1 border-red text-red text-sm">
                                        {errors.email.message}
                                    </p>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </form>
                        <Button
                            label="Lấy lại mật khẩu"
                            onClick={handleSubmit(formSubmitHandler)}
                            custom="mt-4"
                        />
                        <div className="flex items-center mt-3 gap-x-2">
                            <span className="text-sm font-bold">
                                Bạn chưa có tài khoản?
                            </span>
                            <Link
                                href="/register"
                                className="hover:underline text-sm font-bold text-[#0066CC]"
                                onClick={() => router.push("/register")}
                            >
                                Tạo tài khoản ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EditPass;
