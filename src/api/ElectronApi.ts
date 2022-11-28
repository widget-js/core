import {Widget} from "../model/Widget"
import {Keys} from "./Keys";
import {BroadcastEvent} from "../model/BroadcastEvent";
import {ElectronUtils} from "../utils/ElectronUtils";

export class ElectronApi {
    static openAddWidgetWindow() {
        ElectronUtils.getAPI().invokeIpc("openAddWidgetWindow");
    }

    static async registerWidgets(widgets: Widget[]) {
        const data = JSON.parse(JSON.stringify(widgets.map(item => JSON.stringify(item))));
        await ElectronUtils.getAPI().invokeIpc("registerWidgets", data);
    }

    static async setConfig(key: string, value: string | number | boolean) {
        await ElectronUtils.getAPI().invokeIpc("setConfig", {key, value});
    }

    static async sendBroadcastEvent(event: BroadcastEvent) {
        await ElectronUtils.getAPI().invokeIpc(Keys.BROADCAST_EVENT, JSON.stringify(event));
    }

    static async registerBroadcast(callback: (event: BroadcastEvent) => void) {
        await this.addIpcListener(Keys.BROADCAST_EVENT, (json: string) => {
            callback(JSON.parse(json))
        });
    }

    static async unregisterBroadcast() {
        await this.removeIpcListener(Keys.BROADCAST_EVENT)
    }

    static async addIpcListener(key: String, f: Function) {
        await ElectronUtils.getAPI().addIpcListener(key, f);
    }

    static async removeIpcListener(key: String) {
        await ElectronUtils.getAPI().removeIpcListener(key);
    }


    static async getConfig(key: string, defaultValue: string | number | boolean) {
        const value = await ElectronUtils.getAPI().invokeIpc("getConfig", key);
        if (value === null || value === undefined) {
            return defaultValue;
        }
        if (typeof defaultValue == "boolean") {
            return value === "true"
        }
        return value;
    }
}
