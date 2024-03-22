import { PORT1 } from "@/api/config/servicePort";
import http from "@/api";
import upaloadImageList from "@/api/assets/json/upaloadImageList.json"


/**
 * @name 文件上传模块
 */
// 图片上传
export const uploadImg = (params) => {
  // return http.post(PORT1 + `/file/upload/img`, params, { cancel: false });
  return upaloadImageList;
};

// 视频上传
export const uploadVideo = (params) => {
  // return http.post(PORT1 + `/file/upload/video`, params, { cancel: false });
  return true;
};
