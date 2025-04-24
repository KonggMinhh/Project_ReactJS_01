"use client";
import React from "react";

interface ButtonProps {
    label?: string;
    disabled?: boolean;
    border?: boolean;
    custom?: string;
    small?: boolean;
    icon?: React.FC;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps> = ({
    label,
    disabled,
    border,
    small,
    custom,
    icon: Icon,
    onClick,
}) => {
    return (
        <button
            onClick={onClick}
            type="button"
            disabled={disabled}
            className={`disabled: bg-black disabled:cursor-not-allowed rounded hover:underline flex items-center justify-center w-full gap-x-[10px] max-lg:text-sm ${
                border ? "bg-white" : "bg-black"
            }
            ${
                border
                    ? "text-black text-base font-bold"
                    : "text-white text-base font-bold"
            }
            ${small ? "py-2 border border-black" : "py-3 border border-black"}
            ${custom ? custom : ""}
            `}
        >
            {Icon && <Icon />}
            {label}
        </button>
    );
};

export default Button;
