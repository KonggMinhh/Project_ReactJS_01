import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import forgot from "../../../../../public/assets/img/forgot.png";
import Button from "@/components/Button";
const ConfirmPass = () => {
    const router = useRouter();
    return (
        <section className="container mx-auto">
            <div className="bg-grey rounded-lg mt-6  p-6 w-[590px] h-[268px] mx-auto">
                <figure className="flex justify-center">
                    <Image src={forgot} alt="forgot" width={80} height={80} />
                </figure>
                <p className="text-base font-bold mt-5 text-center">
                    Chúng tôi đã gửi 1 email lấy lại mật khẩu về email của bạn
                </p>
                <p className="text-base text-center mt-3">
                    Vui lòng check email để lấy lại mật khẩu của bạn
                </p>

                <Button
                    label="Đăng nhập ngay"
                    onClick={() => router.push("/login")}
                    custom="w-[267px] mx-auto mt-4"
                />
            </div>
        </section>
    );
};

export default ConfirmPass;
