import React, { memo } from "react";

const Button = (text, style) => {
    return (
        <button
            className={
                style
                    ? style
                    : "inline-flex items-center justify-center text-xs border border-[#0000001a] rounded-full py-1 px-6 cursor-pointer select-none text-[#32323d] uppercase"
            }
        >
            {text}
        </button>
    );
};

export default memo(Button);
