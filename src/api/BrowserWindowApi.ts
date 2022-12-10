import {Channel} from "./Channel";
import {ElectronUtils} from "../utils/ElectronUtils";

export class BrowserWindowApi {

    static readonly IGNORE_MOUSE_EVENT = "ignore-mouse-event"
    static readonly WINDOW_VISIBILITY = "window-visibility"
    static readonly ALWAYS_ON_TOP = "always-on-top"
    static readonly OPEN_LINK = "open-link"

    static async setIgnoreMouseEvent(ignore: boolean) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.IGNORE_MOUSE_EVENT, ignore);
    }

    static async setWindowVisibility(show: boolean) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.WINDOW_VISIBILITY, show);
    }

    static async setAlwaysOnTop(alwaysOnTop: boolean) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.ALWAYS_ON_TOP, alwaysOnTop);
    }


    static async openUrl(url: string) {
        await ElectronUtils.getAPI().invoke(Channel.BROWSER_WINDOW, this.OPEN_LINK, url);
    }

}
