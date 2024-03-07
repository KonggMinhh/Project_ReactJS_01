import React, { memo } from "react";
import { RotatingLines } from "react-loader-spinner";
const LoadingSong = () => {
    return (
        <RotatingLines
            visible={true}
            height="40"
            width="40"
            color="#32323d"
            strokeColor="#32323d"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    );
};

export default memo(LoadingSong);
