import * as request from "@/app/utils/request";

export const category = async (q, type) => {
    try {
        const res = await request.get("news-category", {
            params: {
                q,
                type,
            },
        });
        return res.Data;
    } catch (error) {
        console.log(error);
    }
};
