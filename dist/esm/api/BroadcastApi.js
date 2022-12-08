import { ElectronUtils } from "../utils/ElectronUtils";
import { Channel } from "./Channel";
import { ElectronApi } from "./ElectronApi";
export class BroadcastApi {
    static async sendBroadcastEvent(event) {
        await ElectronUtils.getAPI().invoke(Channel.BROADCAST, JSON.stringify(event));
    }
    static async registerBroadcast(callback) {
        await ElectronApi.addIpcListener(Channel.BROADCAST, (json) => {
            callback(JSON.parse(json));
        });
    }
    static async unregisterBroadcast() {
        await ElectronApi.removeIpcListener(Channel.BROADCAST);
    }
}
