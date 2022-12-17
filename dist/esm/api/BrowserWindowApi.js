import { Channel } from "./Channel";
import { ElectronUtils } from "../utils/ElectronUtils";
export class BrowserWindowApi {
    static async setIgnoreMouseEvent(ignore) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.IGNORE_MOUSE_EVENT, ignore);
    }
    static async setWindowVisibility(show) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.WINDOW_VISIBILITY, show);
    }
    static async setAlwaysOnTop(alwaysOnTop) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.ALWAYS_ON_TOP, alwaysOnTop);
    }
    static async isAlwaysOnTop() {
        return await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.IS_ALWAYS_ON_TOP);
    }
    static async openUrl(url) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.OPEN_URL, url);
    }
    /**
     * 设置窗口位置
     * @param x
     * @param y
     * @param animation 动画只在mac系统有效
     */
    static async setPosition(x, y, animation) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.SET_POSITION, x, y, animation);
    }
    static async getPosition() {
        return await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.GET_POSITION);
    }
}
BrowserWindowApi.IGNORE_MOUSE_EVENT = "ignore-mouse-event";
BrowserWindowApi.WINDOW_VISIBILITY = "window-visibility";
BrowserWindowApi.ALWAYS_ON_TOP = "always-on-top";
BrowserWindowApi.IS_ALWAYS_ON_TOP = "is-always-on-top";
BrowserWindowApi.OPEN_URL = "open-url";
BrowserWindowApi.SET_POSITION = "set-position";
BrowserWindowApi.GET_POSITION = "get-position";
