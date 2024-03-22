import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";

import userList from "@/api/assets/json/userList.json"

/**
 * @name 用户管理模块
 */


// 获取用户列表
export const getUserList = (params) => {
    // return http.get(PORT1 + `/user/list`, params);
    return userList;
};


// 新增用户
export const postUser = (params) => {
    // return http.post(`/api/user/user/`, params);
    return {"code":200, "msg":"success"}
};


