import qs from "qs";

/*
使用场景：
这个取消机制在处理复杂的异步请求场景时非常有用，比如：

避免重复请求：当用户快速连续点击发送相同请求的按钮时，只有最后一次请求会被处理，之前的请求都会被取消。
页面切换时取消请求：在单页应用中，用户可能在请求完成前切换页面。这时，可以取消掉所有未完成的请求，防止它们在组件已卸载后更新状态，导致错误。

工作流程：
添加请求：
  在发送一个新的请求之前，addPending 方法会被调用。
  它首先通过 removePending 方法取消同一个请求（如果已存在），然后创建一个新的 AbortController 实例，并将其与新请求的标识符一起存储在 pendingMap 中。
  这样，每个请求都有一个独立的取消控制器。

取消请求：
  removePending 方法通过请求的标识符来查找对应的 AbortController，如果找到，则调用其 abort 方法来取消请求。
  这个方法可以在请求完成、失败或在发送新的相同请求之前被调用。

清空所有请求：
  removeAllPending 方法遍历 pendingMap 中的所有 AbortController 实例，并调用它们的 abort 方法来取消所有正在进行的请求。
  然后清空 pendingMap。

*/

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
let pendingMap = new Map();

// 序列化参数
export const getPendingUrl = (config) =>
  [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join("&");

export class AxiosCanceler {
  /**
   * @description: 添加请求
   * @param {Object} config
   * @return void
   */
  addPending(config) {
    // 在请求开始前，对之前的请求做检查取消操作
    this.removePending(config);
    const url = getPendingUrl(config);
    const controller = new AbortController();
    config.signal = controller.signal;
    pendingMap.set(url, controller);
  }

  /**
   * @description: 移除请求
   * @param {Object} config
   */
  removePending(config) {
    const url = getPendingUrl(config);
    // 如果在 pending 中存在当前请求标识，需要取消当前请求
    const controller = pendingMap.get(url);
    controller && controller.abort();
  }

  /**
   * @description: 清空所有pending
   */
  removeAllPending() {
    pendingMap.forEach(controller => {
      controller && controller.abort();
    });
    pendingMap.clear();
  }
}
