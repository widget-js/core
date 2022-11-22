import {Widget} from "../model/Widget"
import {Keys} from "./Keys";
import WidgetData from "../model/WidgetData";
import {BroadcastEvent} from "../model/BroadcastEvent";

export class ElectronApi {
    static openAddWidgetWindow() {
        if (this.hasElectronApi()) {
            // @ts-ignore
            window.electronAPI.invokeIpc("openAddWidgetWindow");
        }
    }

    static async registerWidgets(widgets: Widget[]) {
        if (this.hasElectronApi()) {
            const data = JSON.parse(JSON.stringify(widgets.map(item => JSON.stringify(item))));
            // @ts-ignore
            await window.electronAPI.invokeIpc("registerWidgets", data);
        }
    }

    static async setConfig(key: string, value: string | number | boolean) {
        if (this.hasElectronApi()) {
            // @ts-ignore
            await window.electronAPI.invokeIpc("setConfig", {key, value});
        }
    }

    static async sendBroadcastEvent(event: BroadcastEvent) {
        if (this.hasElectronApi()) {
            // @ts-ignore
            await window.electronAPI.invokeIpc(Keys.BROADCAST_EVENT, JSON.stringify(event));
        }
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
        if (this.hasElectronApi()) {
            // @ts-ignore
            await window.electronAPI.addIpcListener(key, f);
        }
    }

    static async removeIpcListener(key: String) {
        if (this.hasElectronApi()) {
            // @ts-ignore
            await window.electronAPI.removeIpcListener(key);
        }
    }


    static async getConfig(key: string, defaultValue: string | number | boolean) {
        if (this.hasElectronApi()) {
            // @ts-ignore
            const value = await window.electronAPI.invokeIpc("getConfig", key);
            if (value === null || value === undefined) {
                return defaultValue;
            }
            if (typeof defaultValue == "boolean") {
                return value === "true"
            }
            return value;
        }
    }

    static hasElectronApi(): boolean {
        return Reflect.has(window, "electronAPI")
    }
}
