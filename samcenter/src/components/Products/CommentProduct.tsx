"use client";
import React, { FormEvent, useState } from "react";
import { LikeShapes, DocumentUpload } from "iconsax-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import HeadingSection from "../HeadingSection";
import starActive from "../../../public/assets/icons/star-active.svg";
import starBorder from "../../../public/assets/icons/star-border.svg";
import Avatar from "./Avatar";
interface CommentProductProps {
    product: any;
}

const CommentProduct: React.FC<CommentProductProps> = ({ product }) => {
    const [captcha, setCaptCha] = useState<string | null>();
    const validationComment = Yup.object().shape({
        title: Yup.string().required("Vui lòng nhập tên của bạn !"),
        content: Yup.string().required("Vui lòng nhập nội dung !"),
    });
    const formOptions = { resolver: yupResolver(validationComment) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    return (
        <section className="mt-6">
            <HeadingSection icon={LikeShapes} title="Đánh giá sản phẩm" />
            <div className="mt-4 flex border-b pb-4  border-grey-dark max-lg:flex-col">
                <div className="flex flex-col items-center border-r pr-[47px] border-grey-dark max-lg:flex-row max-lg:border-r-0 max-lg:border-b max-lg:gap-x-[10px] max-lg:pb-4 max-lg:justify-start max-lg:pr-0 max-lg:items-start">
                    <figure>
                        <Image
                            src={product.images[0].image}
                            alt={product.brand}
                            width={138}
                            height={138}
                            className="object-cover"
                        />
                    </figure>
                    <div className="max-lg:flex max-lg:flex-col max-lg:items-start">
                        <span className="text-base font-bold mt-3">
                            {product.name}
                        </span>
                        <div className="flex justify-center items-center gap-x-2 mt-2">
                            <span className="text-lg font-bold">
                                19.650.000 đ
                            </span>
                            <span className="flex items-center justify-center text-xs text-white w-[43px] h-4 bg-orange  rounded-lg">
                                25%
                            </span>
                        </div>
                        <span className="flex justify-center mt-2 text-base line-through ">
                            20.550.000 đ
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-y-[11px] flex-1 px-4 border-r border-grey-dark max-lg:border-r-0 max-lg:px-0 max-lg:mt-4">
                    <div className="flex items-center justify-between gap-x-2">
                        <div className="flex items-center gap-1">
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                        </div>
                        <div className="bg-[#F5F5F5] h-3 flex-1">
                            <div className="bg-[#FEB700] rounded h-3 w-1/4 transition-[width] ease-in"></div>
                        </div>
                        <span className="text-sm text-black">0%</span>
                    </div>
                    <div className="flex items-center justify-between gap-x-2">
                        <div className="flex items-center gap-1">
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                        </div>
                        <div className="bg-[#F5F5F5] h-3 flex-1">
                            <div className="bg-[#FEB700] rounded h-3 w-1/4 transition-[width] ease-in"></div>
                        </div>
                        <span className="text-sm text-black">0%</span>
                    </div>
                    <div className="flex items-center justify-between gap-x-2">
                        <div className="flex items-center gap-1">
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                        </div>
                        <div className="bg-[#F5F5F5] h-3 flex-1">
                            <div className="bg-[#FEB700] rounded h-3 w-1/4 transition-[width] ease-in"></div>
                        </div>
                        <span className="text-sm text-black">0%</span>
                    </div>
                    <div className="flex items-center justify-between gap-x-2">
                        <div className="flex items-center gap-1">
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                        </div>
                        <div className="bg-[#F5F5F5] h-3 flex-1">
                            <div className="bg-[#FEB700] rounded h-3 w-1/4 transition-[width] ease-in"></div>
                        </div>
                        <span className="text-sm text-black">0%</span>
                    </div>
                    <div className="flex items-center justify-between gap-x-2">
                        <div className="flex items-center gap-1">
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                        </div>
                        <div className="bg-[#F5F5F5] h-3 flex-1">
                            <div className="bg-[#FEB700] rounded h-3 w-1/4 transition-[width] ease-in"></div>
                        </div>
                        <span className="text-sm text-black">0%</span>
                    </div>
                    <span className="text-sm font-bold mt-4">
                        Viết đánh giá của bạn:
                    </span>
                    <div className="flex items-center gap-3">
                        <span>Chất lượng:</span>
                        <div className="flex items-center gap-x-1">
                            <Image
                                src={starActive}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />

                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                            <Image
                                src={starBorder}
                                alt="star"
                                width={14}
                                height={14}
                            />
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit((data) => {
                            console.log(JSON.stringify(data));
                        })}
                        noValidate
                        autoComplete="off"
                    >
                        <div>
                            <input
                                type="text"
                                required
                                {...register("title")}
                                placeholder="Tên của bạn"
                                className={`${
                                    errors.title
                                        ? "px-3   placeholder:text-sm py-[10px]  text-sm w-full text-[#dc3545] border border-[#dc3545] rounded"
                                        : "px-3   placeholder:text-sm py-[10px]  text-sm w-full text-grey-dark border border-grey-dark rounded"
                                }`}
                            />
                            <p className="mt-1 text-sm text-[#dc3545]">
                                {errors.title?.message}
                            </p>
                        </div>
                        <div className="mt-[10px]">
                            <textarea
                                placeholder="Đánh giá của bạn về sản phẩm"
                                required
                                {...register("content")}
                                className={`${
                                    errors.content
                                        ? "px-3   placeholder:text-sm py-[10px]  text-sm w-full text-[#dc3545] border border-[#dc3545] rounded"
                                        : "px-3   placeholder:text-sm py-[10px]  text-sm w-full text-grey-dark border border-grey-dark rounded"
                                }`}
                            />
                            <p className="mt-1 text-sm text-[#dc3545]">
                                {errors.content?.message}
                            </p>
                        </div>
                        <div className="flex items-center gap-1 mt-[10px] hover:cursor-pointer">
                            <DocumentUpload />
                            <span className="text-xs font-bold">
                                Upload image
                            </span>
                        </div>
                        <ReCAPTCHA
                            className="mt-5"
                            sitekey={
                                process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!
                            }
                            onChange={setCaptCha}
                        />
                        <button
                            type="submit"
                            className="flex items-center justify-center rounded bg-black w-[126px] h-8  text-sm text-white mt-[10px] hover:underline"
                        >
                            Đánh giá
                        </button>
                    </form>
                </div>
            </div>
            <div className="mt-4 pb-4 border-b border-grey-dark ">
                <div className="flex items-center gap-2 ">
                    <Avatar />
                    <div className="flex items-center">
                        <span className="text-sm font-bold">
                            Nguyễn Tất Đạt
                            <b className="text-sm font-bold text-grey-dark">
                                - 20/09/2022
                            </b>
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <Image src={starActive} alt="star" width={14} height={14} />
                    <Image src={starActive} alt="star" width={14} height={14} />
                    <Image src={starActive} alt="star" width={14} height={14} />
                    <Image src={starActive} alt="star" width={14} height={14} />
                    <Image src={starBorder} alt="star" width={14} height={14} />
                </div>
                <p className="text-sm mt-2 leading-6">
                    Điện thoại tốt, dùng rất ổn định nhưng cầm khá là nặng tay
                    nhân viên phục vụ nhiệt tình, điềm nở. Shop đẹp đẽ sạch sẽ
                    dịch vụ cực tốt.
                </p>
                <div className="flex items-center gap-[10px] mt-2">
                    <figure className="bg-yellow-100 w-[76px] h-[76px] flex items-center justify-center rounded ">
                        img
                    </figure>
                    <figure className="bg-blue-400 w-[76px] h-[76px] flex items-center justify-center rounded ">
                        img
                    </figure>
                </div>
            </div>
            <div className="mt-4 pb-4 border-b border-grey-dark ">
                <div className="flex items-center gap-2 ">
                    <Avatar />
                    <div className="flex items-center">
                        <span className="text-sm font-bold">
                            Nguyễn Tất Đạt
                            <b className="text-sm font-bold text-grey-dark">
                                - 20/09/2022
                            </b>
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <Image src={starActive} alt="star" width={14} height={14} />
                    <Image src={starActive} alt="star" width={14} height={14} />
                    <Image src={starActive} alt="star" width={14} height={14} />
                    <Image src={starActive} alt="star" width={14} height={14} />
                    <Image src={starBorder} alt="star" width={14} height={14} />
                </div>
                <p className="text-sm mt-2 leading-6">
                    Điện thoại tốt, dùng rất ổn định nhưng cầm khá là nặng tay
                    nhân viên phục vụ nhiệt tình, điềm nở. Shop đẹp đẽ sạch sẽ
                    dịch vụ cực tốt.
                </p>
                <div className="flex items-center gap-[10px] mt-2">
                    <figure className="bg-yellow-100 w-[76px] h-[76px] flex items-center justify-center rounded ">
                        img
                    </figure>
                    <figure className="bg-blue-400 w-[76px] h-[76px] flex items-center justify-center rounded ">
                        img
                    </figure>
                </div>
            </div>
            <div className="mt-4 pb-4 border-b border-grey-dark ">
                <div className="flex items-center gap-2 ">
                    <Avatar />
                    <div className="flex items-center">
                        <span className="text-sm font-bold">
                            Nguyễn Tất Đạt
                            <b className="text-sm font-bold text-grey-dark">
                                - 20/09/2022
                            </b>
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <Image src={starActive} alt="star" width={14} height={14} />
                    <Image src={starActive} alt="star" width={14} height={14} />
                    <Image src={starActive} alt="star" width={14} height={14} />
                    <Image src={starActive} alt="star" width={14} height={14} />
                    <Image src={starBorder} alt="star" width={14} height={14} />
                </div>
                <p className="text-sm mt-2 leading-6">
                    Điện thoại tốt, dùng rất ổn định nhưng cầm khá là nặng tay
                    nhân viên phục vụ nhiệt tình, điềm nở. Shop đẹp đẽ sạch sẽ
                    dịch vụ cực tốt.
                </p>
                <div className="flex items-center gap-[10px] mt-2">
                    <figure className="bg-yellow-100 w-[76px] h-[76px] flex items-center justify-center rounded ">
                        img
                    </figure>
                    <figure className="bg-blue-400 w-[76px] h-[76px] flex items-center justify-center rounded ">
                        img
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default CommentProduct;
