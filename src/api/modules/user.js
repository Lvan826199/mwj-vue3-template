import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";

import userList from "@/assets/json/userList.json"
import tableUserList from "@/assets/json/tableUserList.json"

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


// 表格的模拟用户列表
export const getTableUserList = (params) => {
    return tableUserList;
};

