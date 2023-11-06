import axios from "./axios";

export default {
    getTitles(data) {
        return axios().post("/", data);
    },
    getTrendingAnime(data) {
        return axios().post("/", data);
    },
    getTrandingManga(data) {
        return axios().post("/", data)
    },
};