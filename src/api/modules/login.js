import { PORT1 } from "@/api/config/servicePort";
import loginUserList from "@/assets/json/loginUserList.json";
import authMenuList from "@/assets/json/authMenuList.json";
import authButtonList from "@/assets/json/authButtonList.json";
import logoutList from "@/assets/json/logoutList.json";
import http from "@/api";

/**
 * @name 登录模块
 */

// 用户登录
export const loginApi = (params) => {
  // return http.post(PORT1 + `/login`, params, { loading: false }); // 正常 post json 请求  ==>  application/json
  // return http.post(PORT1 + `/login`, params, { loading: false }); // 控制当前请求不显示 loading
  // return http.post(PORT1 + `/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
  // return http.post(PORT1 + `/login`, qs.stringify(params)); // post 请求携带表单参数  ==>  application/x-www-form-urlencoded
  // return http.get(PORT1 + `/login?${qs.stringify(params, { arrayFormat: "repeat" })}`); // get 请求可以携带数组等复杂参数
  // return http.post(PORT1 + `/user/login/`, params, { loading: false });
  // 使用后端接口就用上面的，使用前端模拟数据就用下面的
  return loginUserList;
};

// 获取菜单列表
export const getAuthMenuListApi = () => {
  // return http.get(PORT1 + `/menu/list`, {}, { loading: false });
  return authMenuList;
};

// 获取按钮权限
export const getAuthButtonListApi = () => {
  // return http.get(PORT1 + `/auth/buttons`, {}, { loading: false });
  // 如果想让按钮权限变为本地数据，注释上一行代码，并引入本地 authButtonList.json 数据
  return authButtonList;
};

// 用户退出登录
export const logoutApi = () => {
  // return http.post(PORT1 + `/logout`);
  return logoutList;
};
