"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronApi = void 0;
const ElectronUtils_1 = require("../utils/ElectronUtils");
const Channel_1 = require("./Channel");
class ElectronApi {
    static openAddWidgetWindow() {
        ElectronUtils_1.ElectronUtils.getAPI().invokeIpc("openAddWidgetWindow");
    }
    static async sendBroadcastEvent(event) {
        await ElectronUtils_1.ElectronUtils.getAPI().invokeIpc(Channel_1.Channel.BROADCAST, JSON.stringify(event));
    }
    static async registerBroadcast(callback) {
        await this.addIpcListener(Channel_1.Channel.BROADCAST, (json) => {
            callback(JSON.parse(json));
        });
    }
    static async unregisterBroadcast() {
        await this.removeIpcListener(Channel_1.Channel.BROADCAST);
    }
    static async addIpcListener(key, f) {
        await ElectronUtils_1.ElectronUtils.getAPI().addIpcListener(key, f);
    }
    static async removeIpcListener(key) {
        await ElectronUtils_1.ElectronUtils.getAPI().removeIpcListener(key);
    }
    static async upgradeNewVersion(key, defaultValue) {
        const value = await ElectronUtils_1.ElectronUtils.getAPI().invokeIpc("getConfig", key);
        if (value === null || value === undefined) {
            return defaultValue;
        }
        if (typeof defaultValue == "boolean") {
            return value === "true";
        }
        return value;
    }
}
exports.ElectronApi = ElectronApi;
