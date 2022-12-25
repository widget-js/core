import {BroadcastEvent} from "../model/event/BroadcastEvent";
import {ElectronUtils} from "../utils/ElectronUtils";
import {Channel} from "./Channel";
import {ElectronApi} from "./ElectronApi";

export class BroadcastApi {
    static async sendBroadcastEvent(event: BroadcastEvent) {
        await ElectronUtils.getAPI()?.invoke(Channel.BROADCAST, JSON.stringify(event));
    }

    static async registerBroadcast(callback: (event: BroadcastEvent) => void) {
        await ElectronApi.addIpcListener(Channel.BROADCAST, (json: string) => {
            callback(JSON.parse(json))
        });
    }

    static async unregisterBroadcast() {
        await ElectronApi.removeIpcListener(Channel.BROADCAST)
    }

}
