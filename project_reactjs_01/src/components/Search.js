import React from "react";
import icons from "../ultis/icons";
const { GoSearch, IoMdClose } = icons;
const Search = () => {
    return (
        <form className="flex gap-x-2 ml-5 rounded-[20px] bg-black bg-opacity-[0.05] p-[5px] h-10 min-w-[440px]">
            <button>
                <GoSearch size={24} className="text-[#757575]" />
            </button>
            <input
                placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                type="text"
                className="outline-none text-sm text-[#282828] bg-transparent w-[95%]"
            />
            <button>
                <IoMdClose size={24} className="text-[#757575]" />
            </button>
        </form>
    );
};

export default Search;
