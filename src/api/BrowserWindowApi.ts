import {Channel} from "./Channel";
import {ElectronUtils} from "../utils/ElectronUtils";
import {Rectangle} from "../model/interface/Rectangle";

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
    static readonly MOVE_TOP = "move-top"
    static readonly SET_POSITION = "set-position"
    static readonly GET_POSITION = "get-position"
    static readonly BLUR = "blur"
    static readonly FOCUS = "focus"
    static readonly SET_RESIZABLE = "set-resizable"
    static readonly GET_BOUNDS = "get-bounds"
    static readonly SET_BOUNDS = "set-bounds"
    static readonly EXISTS_BY_URL = "exists-by-url"
    static readonly SHOW = "show"

    static async setIgnoreMouseEvent(ignore: boolean) {
        await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.IGNORE_MOUSE_EVENT, ignore);
    }

    static async show() {
        await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.WINDOW_VISIBILITY, true);
    }

    static async hide() {
        await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.WINDOW_VISIBILITY, false);
    }

    /**
     * @deprecated
     * @param show
     */
    static async setWindowVisibility(show: boolean) {
        await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.WINDOW_VISIBILITY, show);
    }

    static async setAlwaysOnTop(alwaysOnTop: boolean) {
        await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.ALWAYS_ON_TOP, alwaysOnTop);
    }

    static async isAlwaysOnTop(): Promise<boolean> {
        return await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.IS_ALWAYS_ON_TOP);
    }

    static async openUrl(url: string) {
        await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.OPEN_URL, url);
    }


    static async moveTop() {
        await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.MOVE_TOP);
    }

    /**
     * 设置窗口位置
     * @param x
     * @param y
     * @param animation 动画只在mac系统有效
     */
    static async setPosition(x: number, y: number, animation: boolean) {
        await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.SET_POSITION, x, y, animation);
    }

    static async getPosition(): Promise<Position> {
        return await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.GET_POSITION);
    }


    static async blur() {
        return await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.BLUR);
    }

    static async focus() {
        return await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.FOCUS);
    }

    /**
     * 设置窗口是否可以拉伸
     * @param resizable
     */
    static async setResizable(resizable: boolean) {
        return await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.SET_RESIZABLE, resizable);
    }


    static async getBounds(): Promise<Rectangle> {
        return await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.GET_BOUNDS);
    }

    static async setBounds(bounds: Partial<Rectangle>, animate?: boolean): Promise<Rectangle> {
        return await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.SET_BOUNDS, bounds, animate);
    }

    /**
     * 通过url检测窗口是否存在
     * @param url
     */
    static async existsByUrl(url: string): Promise<boolean> {
        return await ElectronUtils.getAPI()?.invoke(Channel.BROWSER_WINDOW, this.EXISTS_BY_URL, url);
    }


}
