import {Channel} from "./Channel";
import {ElectronUtils} from "../utils/ElectronUtils";

type Position = {
    x: number,
    y: number
}

export class BrowserWindowApi {

    static readonly IGNORE_MOUSE_EVENT = "ignore-mouse-event"
    static readonly WINDOW_VISIBILITY = "window-visibility"
    static readonly ALWAYS_ON_TOP = "always-on-top"
    static readonly IS_ALWAYS_ON_TOP = "is-always-on-top"
    static readonly OPEN_URL = "open-url"
    static readonly SET_POSITION = "set-position"
    static readonly GET_POSITION = "get-position"

    static async setIgnoreMouseEvent(ignore: boolean) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.IGNORE_MOUSE_EVENT, ignore);
    }

    static async setWindowVisibility(show: boolean) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.WINDOW_VISIBILITY, show);
    }

    static async setAlwaysOnTop(alwaysOnTop: boolean) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.ALWAYS_ON_TOP, alwaysOnTop);
    }

    static async isAlwaysOnTop(): Promise<boolean> {
        return await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.IS_ALWAYS_ON_TOP);
    }

    static async openUrl(url: string) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.OPEN_URL, url);
    }

    /**
     * 设置窗口位置
     * @param x
     * @param y
     * @param animation 动画只在mac系统有效
     */
    static async setPosition(x: number, y: number, animation: boolean) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.SET_POSITION, x, y, animation);
    }

    static async getPosition(): Promise<Position> {
        return await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.GET_POSITION);
    }


}
