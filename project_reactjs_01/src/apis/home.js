import axios from "../asiox";

// export function api
export const getHome = () =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: "/home",
                method: "GET",
            });
            console.log("home", response);
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
