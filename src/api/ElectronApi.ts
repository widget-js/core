import {BroadcastEvent} from "../model/BroadcastEvent";
import {ElectronUtils} from "../utils/ElectronUtils";
import {Channel} from "./Channel";

export class ElectronApi {
    static openAddWidgetWindow() {
        ElectronUtils.getAPI().invokeIpc("openAddWidgetWindow");
    }

    static async sendBroadcastEvent(event: BroadcastEvent) {
        await ElectronUtils.getAPI().invokeIpc(Channel.BROADCAST, JSON.stringify(event));
    }

    static async registerBroadcast(callback: (event: BroadcastEvent) => void) {
        await this.addIpcListener(Channel.BROADCAST, (json: string) => {
            callback(JSON.parse(json))
        });
    }

    static async unregisterBroadcast() {
        await this.removeIpcListener(Channel.BROADCAST)
    }

    static async addIpcListener(key: String, f: Function) {
        await ElectronUtils.getAPI().addIpcListener(key, f);
    }

    static async removeIpcListener(key: String) {
        await ElectronUtils.getAPI().removeIpcListener(key);
    }


    static async upgradeNewVersion(key: string, defaultValue: string | number | boolean) {
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
