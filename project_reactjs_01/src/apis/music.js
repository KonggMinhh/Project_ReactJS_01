import axios from "../asiox";

// export function api
export const apiGetSong = (sid) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                url: "/song",
                method: "GET",
                params: { id: sid },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });

export const apiGetDetailSong = (sid) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                // infosong
                url: "/infosong",
                method: "GET",
                params: { id: sid },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
export const apiGetDetailPlaylist = (pid) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await axios({
                // playlist
                url: "/DetailPlaylist",
                method: "GET",
                params: { id: pid },
            });
            resolve(response);
        } catch (error) {
            reject(error);
        }
    });
