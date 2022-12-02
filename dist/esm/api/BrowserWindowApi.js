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
}
BrowserWindowApi.IGNORE_MOUSE_EVENT = "ignore-mouse-event";
BrowserWindowApi.WINDOW_VISIBILITY = "window-visibility";
BrowserWindowApi.ALWAYS_ON_TOP = "always-on-top";
