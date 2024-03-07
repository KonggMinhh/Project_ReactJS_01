"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { Eye, EyeSlash } from "iconsax-react";

import registerImg from "../../../../../public/assets/img/register.png";
import HeadingSection from "@/components/HeadingSection";
import { useRouter } from "next/navigation";

const validationSchema = yup.object().shape({
    firstName: yup.string().required("Vui lòng nhập tên của bạn !"),
    lastName: yup.string().required("Vui lòng nhập họ của bạn ! "),
    gender: yup.string().required("Vui lòng chọn giới tính của bạn !"),
    day: yup
        .number()
        .required("Vui lòng chọn ngày sinh của bạn !")
        .min(1, "Ngày phải nằm trong khoảng từ 1 đến 31")
        .max(31, "Ngày phải nằm trong khoảng từ 1 đến 31"),
    month: yup
        .number()
        .required("Vui lòng chọn tháng sinh của bạn !")
        .min(1, "Tháng phải nằm trong khoảng từ 1 đến 12")
        .max(12, "Tháng phải nằm trong khoảng từ 1 đến 12"),
    year: yup
        .number()
        .required("Vui lòng chọn năm sinh của bạn !")
        .min(1900, "Năm ít nhất phải là 1900")
        .max(new Date().getFullYear(), "Năm không hợp lệ !"),
    email: yup
        .string()
        .required("Vui lòng nhập email của bạn !")
        .matches(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            "Email không hợp lệ !"
        ),
    phoneNumber: yup
        .string()
        .required("Vui lòng nhập số điện thoại của bạn !")
        .matches(
            /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
            "Số điện thoại không hợp lệ !"
        ),
    username: yup
        .string()
        .required("Vui lòng nhập tên đăng nhập của bạn!")
        .matches(/^[a-zA-Z0-9_]*$/, "Tên đăng nhập không hợp lệ !"),
    password: yup
        .string()
        .required("Vui lòng nhập mật khẩu của bạn !")
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
            "Mật khẩu phải có ít nhất 8 ký tự trong đó có đặc biệt (ví dụ: #?!@$%^&*-)"
        ),
    confirmPassword: yup
        .string()
        .required("Vui lòng xác nhận lại mật khẩu !")
        .oneOf([yup.ref("password"), ""], "Mật khẩu phải trùng khớp !"),
});

const RegisterPage = () => {
    const router = useRouter();
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });
    function onSubmit(data: any) {
        console.log(data);
    }
    const [pwd, setPwd] = useState("");
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    return (
        <section className="-mb-14">
            <div className="container mx-auto">
                <div className="flex gap-x-5">
                    <figure>
                        <Image
                            className="w-[793px] h-full object-cover"
                            src={registerImg}
                            alt="Login"
                            width={793}
                            height={634}
                        />
                    </figure>
                    <div className="flex-1 mt-10">
                        <HeadingSection title="Đăng ký" />
                        <form
                            autoComplete="off"
                            method="POST"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="flex items-center justify-between gap-x-4 mt-2">
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="firstName"
                                        className="text-sm font-bold"
                                    >
                                        Tên
                                    </label>
                                    <input
                                        placeholder="Minh"
                                        id="firstName"
                                        type="text"
                                        {...register("firstName")}
                                        className={`${
                                            errors.firstName
                                                ? "px-4 py-[10px] h-12 placeholder:text-sm text-sm border border-red outline-none rounded"
                                                : "px-4 py-[10px] h-12 placeholder:text-sm text-sm bg-white focus:outline-blue border border-grey-dark rounded"
                                        }`}
                                    />
                                    <p className="mt-1 text-sm text-red">
                                        {errors.firstName?.message}
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="lastName"
                                        className="text-sm font-bold"
                                    >
                                        Họ
                                    </label>
                                    <input
                                        placeholder="Đào"
                                        id="lastName"
                                        type="text"
                                        {...register("lastName")}
                                        className={`${
                                            errors.lastName
                                                ? "px-4 py-[10px] h-12 placeholder:text-sm text-sm border border-red outline-none rounded"
                                                : "px-4 py-[10px] h-12 placeholder:text-sm  text-sm bg-white focus:outline-blue border border-grey-dark rounded"
                                        }`}
                                    />
                                    <p className="mt-1 text-sm text-red">
                                        {errors.lastName?.message}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mt-3">
                                <span className="text-sm font-bold">
                                    Giới tính:
                                </span>
                                <label className="ml-3 flex items-center gap-x-2">
                                    <Controller
                                        name="gender"
                                        control={control}
                                        render={({ field }) => (
                                            <>
                                                <input
                                                    className="w-6 h-6"
                                                    type="radio"
                                                    {...field}
                                                    value="male"
                                                    checked={
                                                        field.value === "male"
                                                    }
                                                />
                                                <span className="text-sm font-bold">
                                                    Nam
                                                </span>
                                            </>
                                        )}
                                    />
                                </label>

                                <label className="ml-10 flex items-center gap-x-2">
                                    <Controller
                                        name="gender"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => (
                                            <>
                                                <input
                                                    className="w-6 h-6"
                                                    type="radio"
                                                    {...field}
                                                    value="female"
                                                    checked={
                                                        field.value === "female"
                                                    }
                                                />
                                                <span className="text-sm font-bold">
                                                    Nữ
                                                </span>
                                            </>
                                        )}
                                    />
                                </label>
                            </div>
                            {errors.gender && (
                                <p className="mt-1 text-sm text-red">
                                    {errors.gender.message}
                                </p>
                            )}
                            <span className="block text-sm font-bold mt-3">
                                Ngày sinh:
                            </span>
                            <div className="flex items-center gap-x-4 mt-2">
                                <div className="w-full">
                                    <Controller
                                        name="day"
                                        control={control}
                                        render={({ field }) => (
                                            <select
                                                className="w-full border border-grey-dark rounded h-12 p-3 appearance-none bg-arrow-down tex-base text-grey-dark focus:outline-blue "
                                                {...field}
                                            >
                                                <option
                                                    className="tex-base text-grey-dark "
                                                    value=""
                                                >
                                                    Ngày
                                                </option>
                                                {Array.from(
                                                    new Array(31),
                                                    (val, index) => (
                                                        <option
                                                            className="tex-base text-grey-dark "
                                                            value={index + 1}
                                                            key={index}
                                                        >
                                                            Ngày {index + 1}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        )}
                                    />
                                </div>
                                <div className="w-full">
                                    <Controller
                                        name="month"
                                        control={control}
                                        render={({ field }) => (
                                            <select
                                                className="w-full border border-grey-dark rounded h-12 p-3 appearance-none bg-arrow-down tex-base text-grey-dark focus:outline-blue"
                                                {...field}
                                            >
                                                <option
                                                    className="tex-base text-grey-dark "
                                                    value=""
                                                >
                                                    Tháng
                                                </option>
                                                {Array.from(
                                                    new Array(12),
                                                    (val, index) => (
                                                        <option
                                                            className="tex-base text-grey-dark "
                                                            value={index + 1}
                                                            key={index}
                                                        >
                                                            Tháng {index + 1}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        )}
                                    />
                                </div>
                                <div className="w-full">
                                    <Controller
                                        name="year"
                                        control={control}
                                        render={({ field }) => (
                                            <select
                                                className="w-full border border-grey-dark rounded h-12 p-3 appearance-none bg-arrow-down tex-base text-grey-dark focus:outline-blue"
                                                {...field}
                                            >
                                                <option
                                                    className="tex-base text-grey-dark "
                                                    value=""
                                                >
                                                    Năm
                                                </option>
                                                {Array.from(
                                                    new Array(122),
                                                    (val, index) => (
                                                        <option
                                                            className="tex-base text-grey-dark "
                                                            value={
                                                                new Date().getFullYear() -
                                                                index
                                                            }
                                                            key={index}
                                                        >
                                                            Năm{" "}
                                                            {new Date().getFullYear() -
                                                                index}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        )}
                                    />
                                </div>
                            </div>
                            {errors.day || errors.month || errors.year ? (
                                <p className="mt-1 text-sm text-red">
                                    {errors.month?.message ||
                                        errors.day?.message ||
                                        errors.year?.message}
                                </p>
                            ) : null}
                            <div className="flex flex-col mt-3">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="text"
                                    {...register("email")}
                                    className={`${
                                        errors.email
                                            ? "px-4 py-[10px] h-12 placeholder:text-sm text-sm border border-red outline-none rounded"
                                            : "px-4 py-[10px] h-12 placeholder:text-sm  text-sm bg-white focus:outline-blue border border-grey-dark rounded"
                                    }`}
                                />
                                <p className="mt-1 text-sm text-red">
                                    {errors.email?.message}
                                </p>
                            </div>
                            <div className="flex flex-col mt-3">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="phoneNumber"
                                >
                                    Số điện thoại
                                </label>
                                <input
                                    id="phoneNumber"
                                    type="text"
                                    {...register("phoneNumber")}
                                    className={`${
                                        errors.phoneNumber
                                            ? "px-4 py-[10px] h-12 placeholder:text-sm text-sm border border-red outline-none rounded"
                                            : "px-4 py-[10px] h-12 placeholder:text-sm  text-sm bg-white focus:outline-blue border border-grey-dark rounded"
                                    }`}
                                />
                                <p className="mt-1 text-sm text-red">
                                    {errors.phoneNumber?.message}
                                </p>
                            </div>
                            <div className="flex flex-col mt-3">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="username"
                                >
                                    Tên đăng nhập
                                </label>
                                <input
                                    id="username"
                                    type="text"
                                    {...register("username")}
                                    className={`${
                                        errors.username
                                            ? "px-4 py-[10px] h-12 placeholder:text-sm text-sm border border-red outline-none rounded"
                                            : "px-4 py-[10px] h-12 placeholder:text-sm text-sm bg-white focus:outline-blue border border-grey-dark rounded"
                                    }`}
                                />
                                <p className="mt-1 text-sm text-red">
                                    {errors.username?.message}
                                </p>
                            </div>
                            <div className="flex flex-col mt-3">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="password"
                                >
                                    Mật khẩu
                                </label>
                                <div className="relative">
                                    <input
                                        {...register("password")}
                                        id="password"
                                        type={isRevealPwd ? "text" : "password"}
                                        className={`${
                                            errors.password
                                                ? "w-full px-4 py-[10px] h-12 placeholder:text-sm text-sm border border-red outline-none rounded"
                                                : "w-full px-4 py-[10px] h-12 placeholder:text-sm text-sm bg-white focus:outline-blue border border-grey-dark rounded"
                                        }`}
                                    />
                                    <div
                                        title={
                                            isRevealPwd
                                                ? "Ẩn mật khẩu"
                                                : "Hiện thị mật khẩu"
                                        }
                                        className="absolute top-1/4 right-3 hover:cursor-pointer select-none"
                                        onClick={() =>
                                            setIsRevealPwd(
                                                (prevState) => !prevState
                                            )
                                        }
                                    >
                                        {isRevealPwd ? <EyeSlash /> : <Eye />}
                                    </div>
                                </div>
                                <p className="mt-1 text-sm text-red">
                                    {errors.password?.message}
                                </p>
                            </div>
                            <div className="flex flex-col mt-3">
                                <label
                                    className="text-sm font-bold"
                                    htmlFor="confirmPassword"
                                >
                                    Xác nhận mật khẩu
                                </label>
                                <div className="relative">
                                    <input
                                        {...register("confirmPassword")}
                                        id="confirmPassword"
                                        type={isRevealPwd ? "text" : "password"}
                                        className={`${
                                            errors.confirmPassword
                                                ? "w-full px-4 py-[10px] h-12 placeholder:text-sm text-sm border border-red outline-none rounded"
                                                : "w-full px-4 py-[10px] h-12 placeholder:text-sm text-sm bg-white focus:outline-blue border border-grey-dark rounded"
                                        }`}
                                    />
                                    <div
                                        title={
                                            isRevealPwd
                                                ? "Ẩn mật khẩu"
                                                : "Hiện thị mật khẩu"
                                        }
                                        className="absolute top-1/4 right-3 hover:cursor-pointer select-none"
                                        onClick={() =>
                                            setIsRevealPwd(
                                                (prevState) => !prevState
                                            )
                                        }
                                    >
                                        {isRevealPwd ? <EyeSlash /> : <Eye />}
                                    </div>
                                </div>
                                <p className="mt-1 text-sm text-red">
                                    {errors.confirmPassword?.message}
                                </p>
                            </div>
                            <button
                                type="submit"
                                className="mt-[25px] py-3 flex items-center justify-center w-full bg-black rounded-lg text-base text-white font-bold hover:underline"
                            >
                                Đăng ký
                            </button>
                        </form>
                        <div className="flex items-center mt-3 gap-x-2 mb-[30px]">
                            <span className="text-sm font-bold">
                                Bạn đã có tài khoản?
                            </span>
                            <Link
                                href="/login"
                                className="hover:underline text-sm font-bold text-[#0066CC]"
                                onClick={() => router.push("/login")}
                            >
                                Đăng nhập ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;
