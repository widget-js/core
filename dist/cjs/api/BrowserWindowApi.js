"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserWindowApi = void 0;
const Channel_1 = require("./Channel");
const ElectronUtils_1 = require("../utils/ElectronUtils");
class BrowserWindowApi {
    static async setIgnoreMouseEvent(ignore) {
        await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.BROWSER_WINDOW, this.IGNORE_MOUSE_EVENT, ignore);
    }
    static async setWindowVisibility(show) {
        await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.BROWSER_WINDOW, this.WINDOW_VISIBILITY, show);
    }
    static async setAlwaysOnTop(alwaysOnTop) {
        await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.BROWSER_WINDOW, this.ALWAYS_ON_TOP, alwaysOnTop);
    }
    static async isAlwaysOnTop() {
        return await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.BROWSER_WINDOW, this.IS_ALWAYS_ON_TOP);
    }
    static async openUrl(url) {
        await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.BROWSER_WINDOW, this.OPEN_URL, url);
    }
    /**
     * 设置窗口位置
     * @param x
     * @param y
     * @param animation 动画只在mac系统有效
     */
    static async setPosition(x, y, animation) {
        await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.BROWSER_WINDOW, this.SET_POSITION, x, y, animation);
    }
    static async getPosition() {
        return await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.BROWSER_WINDOW, this.GET_POSITION);
    }
}
exports.BrowserWindowApi = BrowserWindowApi;
BrowserWindowApi.IGNORE_MOUSE_EVENT = "ignore-mouse-event";
BrowserWindowApi.WINDOW_VISIBILITY = "window-visibility";
BrowserWindowApi.ALWAYS_ON_TOP = "always-on-top";
BrowserWindowApi.IS_ALWAYS_ON_TOP = "is-always-on-top";
BrowserWindowApi.OPEN_URL = "open-url";
BrowserWindowApi.SET_POSITION = "set-position";
BrowserWindowApi.GET_POSITION = "get-position";
