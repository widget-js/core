"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserWindowApi = void 0;
const Channel_1 = require("./Channel");
const ElectronUtils_1 = require("../utils/ElectronUtils");
class BrowserWindowApi {
    static async setIgnoreMouseEvent(ignore) {
        await ElectronUtils_1.ElectronUtils.getAPI().invokeIpc(Channel_1.Channel.SET_IGNORE_MOUSE_EVENT, ignore);
    }
    static async setWindowVisibility(show) {
        await ElectronUtils_1.ElectronUtils.getAPI().invokeIpc(Channel_1.Channel.BROWSER_WINDOW, show);
    }
}
exports.BrowserWindowApi = BrowserWindowApi;
