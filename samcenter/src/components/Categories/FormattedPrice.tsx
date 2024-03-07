import React from "react";
interface Amount {
    amount: number;
}
const FormattedPrice = ({ amount }: Amount) => {
    const formattedAmount = new Number(amount).toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND", // Mã tiền tệ Việt Nam
        maximumFractionDigits: 3,
    });
    return <>{formattedAmount}</>;
};

export default FormattedPrice;
