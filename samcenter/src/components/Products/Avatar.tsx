import React from "react";
import Image from "next/image";
import { User } from "iconsax-react";

interface AvatarProps {
    src?: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
    if (src) {
        return (
            <figure className="flex items-center justify-center ">
                <Image
                    src={src}
                    alt="Avatar"
                    className="w-7 h-7 rounded-full object-cover"
                />
            </figure>
        );
    }

    return <User />;
};

export default Avatar;
