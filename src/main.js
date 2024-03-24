import {createApp} from 'vue'
import App from './App.vue'
const app = createApp(App);

// 注册路由
import router from "@/routers";
app.use(router);

// element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
app.use(ElementPlus);

// 自定义样式
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// iconfont css
import "@/assets/iconfont/iconfont.scss";
// font css
import "@/assets/fonts/font.scss";
// custom element dark css
import "@/styles/element-dark.scss";
// custom element css
import "@/styles/element.scss";
// svg icons
import "virtual:svg-icons-register";


// 注册所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// element css
import "element-plus/dist/index.css";
// element dark css
import "element-plus/theme-chalk/dark/css-vars.css";


// 自定义指令
import directives from "@/directives/index";
app.use(directives);

// 国际化
import I18n from "@/languages/index";
app.use(I18n);

// 状态管理
import pinia from "@/stores";
app.use(pinia);


// // 持久化存储 这部分挪到stores下的index.js中了
// const pinia = createPinia();
// import { createPersistedState } from 'pinia-plugin-persistedstate';
// pinia.use(
//   createPersistedState({
//     auto: true, // 启用所有 Store 默认持久化
//   }),
// );
// // 重写 $reset 方法 => 解决组合式api中无法使用问题
// pinia.use(({ store }) => {
//   const initialState = JSON.parse(JSON.stringify(store.$state));
//   store.$reset = () => {
//     store.$patch(initialState);
//   };
// });
//
// app.use(pinia);

// 注意，要先使用所需要的内容，自后在挂载到页面上，才能正常显示
// 这一行始终保持在最后一行就行
app.mount("#app");

