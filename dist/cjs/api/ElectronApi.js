"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronApi = void 0;
const Keys_1 = require("./Keys");
const ElectronUtils_1 = require("../utils/ElectronUtils");
class ElectronApi {
    static openAddWidgetWindow() {
        ElectronUtils_1.ElectronUtils.getAPI().invokeIpc("openAddWidgetWindow");
    }
    static async registerWidgets(widgets) {
        const data = JSON.parse(JSON.stringify(widgets.map(item => JSON.stringify(item))));
        await ElectronUtils_1.ElectronUtils.getAPI().invokeIpc("registerWidgets", data);
    }
    static async setConfig(key, value) {
        await ElectronUtils_1.ElectronUtils.getAPI().invokeIpc("setConfig", { key, value });
    }
    static async sendBroadcastEvent(event) {
        await ElectronUtils_1.ElectronUtils.getAPI().invokeIpc(Keys_1.Keys.BROADCAST_EVENT, JSON.stringify(event));
    }
    static async registerBroadcast(callback) {
        await this.addIpcListener(Keys_1.Keys.BROADCAST_EVENT, (json) => {
            callback(JSON.parse(json));
        });
    }
    static async unregisterBroadcast() {
        await this.removeIpcListener(Keys_1.Keys.BROADCAST_EVENT);
    }
    static async addIpcListener(key, f) {
        await ElectronUtils_1.ElectronUtils.getAPI().addIpcListener(key, f);
    }
    static async removeIpcListener(key) {
        await ElectronUtils_1.ElectronUtils.getAPI().removeIpcListener(key);
    }
    static async getConfig(key, defaultValue) {
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
