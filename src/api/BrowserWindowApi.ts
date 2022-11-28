import {Channel} from "./Channel";
import {ElectronUtils} from "../utils/ElectronUtils";

export class BrowserWindowApi {
    static async setIgnoreMouseEvent(ignore: boolean) {
        await ElectronUtils.getAPI().invokeIpc(Channel.SET_IGNORE_MOUSE_EVENT, ignore);
    }

    static async setWindowVisibility(show: boolean) {
        await ElectronUtils.getAPI().invokeIpc(Channel.BROWSER_WINDOW, show);
    }
}
