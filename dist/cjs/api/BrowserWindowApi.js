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
}
exports.BrowserWindowApi = BrowserWindowApi;
BrowserWindowApi.IGNORE_MOUSE_EVENT = "ignore-mouse-event";
BrowserWindowApi.WINDOW_VISIBILITY = "window-visibility";
BrowserWindowApi.ALWAYS_ON_TOP = "always-on-top";
