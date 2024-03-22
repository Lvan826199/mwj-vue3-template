import http from "@/api";
import loginInfoList from "@/assets/json/loginInfoList.json";

/**
 * @name 获取用户登录信息
 */
export const getLoginInfoListApi = (params) => {
  return loginInfoList
};

