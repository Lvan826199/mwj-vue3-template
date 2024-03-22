import {defineStore} from "pinia";
import piniaPersistConfig from "@/stores/helper/persist";

export const useUserStore = defineStore({
    id: "mwj-user",
    state: () => ({
        token: "",
        userInfo: {userid: "", nickname: ""}
    }),
    getters: {},
    actions: {
        // Set Token
        setToken(token) {
            this.token = token;
            this.userInfo = ""
        },
        // Set setUserInfo
        setUserInfo(userInfo) {
            this.userInfo = userInfo;
        },


    },
    // 持久化数据存储
    persist: piniaPersistConfig("mwj-user")
});
