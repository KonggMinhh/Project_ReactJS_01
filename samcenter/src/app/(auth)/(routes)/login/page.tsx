"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

import login from "../../../../../public/assets/img/login.png";
import HeadingSection from "@/components/HeadingSection";
import { useRouter } from "next/navigation";
const validationSchema = yup.object().shape({
    email: yup
        .string()
        .required("Vui lòng nhập email của bạn !")
        .matches(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            "Email không hợp lệ !"
        ),
    password: yup
        .string()
        .required("Vui lòng nhập mật khẩu của bạn !")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự !"),
    remember: yup.boolean().oneOf([true], "Vui lòng chọn trường này !"),
});
const LoginPage = () => {
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
    };
    return (
        <section className="-mb-14">
            <div className="container mx-auto ">
                <div className="flex gap-x-5">
                    <figure>
                        <Image
                            className="w-[793px] h-[634px] object-cover"
                            src={login}
                            alt="Login"
                            width={793}
                            height={634}
                        />
                    </figure>
                    <div className="flex-1 mt-10">
                        <HeadingSection title="Đăng nhập" />
                        <form
                            onSubmit={handleSubmit(formSubmitHandler)}
                            className="mt-2"
                            autoComplete="off"
                            method="POST"
                        >
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

                            <div className="flex flex-col mt-3">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                <input
                                    required
                                    type="password"
                                    id="password"
                                    {...register("password")}
                                    className={`${
                                        errors.password
                                            ? "px-[10px] h-12 placeholder:text-sm text-sm border border-red outline-none rounded"
                                            : "px-[10px] h-12 placeholder:text-sm text-sm bg-white focus:outline-blue border border-grey-dark rounded"
                                    }`}
                                />
                                {errors.password && (
                                    <p className="mt-1 text-red text-sm">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-between items-center mt-3">
                                <div className="flex items-center">
                                    <input
                                        {...register("remember")}
                                        id="remember"
                                        name="remember"
                                        type="checkbox"
                                        value=""
                                        className="w-[18px] h-[18px] bg-[#969696] rounded border border-[#969696] focus:ring-3 focus:ring-blue-300  dark:focus:ring-blue-600"
                                    />
                                    <label
                                        htmlFor="remember"
                                        className="ml-2 text-sm font-bold text-[#86868B]"
                                    >
                                        Nhớ mật khẩu này
                                    </label>
                                </div>
                                <Link
                                    href="/forgot"
                                    className="text-sm font-bold hover:underline"
                                    onClick={() => router.push("/forgot")}
                                >
                                    Quên mật khẩu?
                                </Link>
                            </div>
                            {errors.remember ? (
                                <p className="mt-1 text-red text-sm">
                                    {errors.remember.message}
                                </p>
                            ) : (
                                <></>
                            )}
                            <button
                                type="submit"
                                className="mt-[25px] py-3 flex items-center justify-center w-full bg-black rounded-lg text-base text-white font-bold hover:underline"
                            >
                                Đăng nhập
                            </button>
                        </form>
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

export default LoginPage;
