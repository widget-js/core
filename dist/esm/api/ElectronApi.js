import { Keys } from "./Keys";
import { ElectronUtils } from "../utils/ElectronUtils";
export class ElectronApi {
    static openAddWidgetWindow() {
        ElectronUtils.getAPI().invokeIpc("openAddWidgetWindow");
    }
    static async registerWidgets(widgets) {
        const data = JSON.parse(JSON.stringify(widgets.map(item => JSON.stringify(item))));
        await ElectronUtils.getAPI().invokeIpc("registerWidgets", data);
    }
    static async setConfig(key, value) {
        await ElectronUtils.getAPI().invokeIpc("setConfig", { key, value });
    }
    static async sendBroadcastEvent(event) {
        await ElectronUtils.getAPI().invokeIpc(Keys.BROADCAST_EVENT, JSON.stringify(event));
    }
    static async registerBroadcast(callback) {
        await this.addIpcListener(Keys.BROADCAST_EVENT, (json) => {
            callback(JSON.parse(json));
        });
    }
    static async unregisterBroadcast() {
        await this.removeIpcListener(Keys.BROADCAST_EVENT);
    }
    static async addIpcListener(key, f) {
        await ElectronUtils.getAPI().addIpcListener(key, f);
    }
    static async removeIpcListener(key) {
        await ElectronUtils.getAPI().removeIpcListener(key);
    }
    static async getConfig(key, defaultValue) {
        const value = await ElectronUtils.getAPI().invokeIpc("getConfig", key);
        if (value === null || value === undefined) {
            return defaultValue;
        }
        if (typeof defaultValue == "boolean") {
            return value === "true";
        }
        return value;
    }
}
