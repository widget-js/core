"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastApi = void 0;
const ElectronUtils_1 = require("../utils/ElectronUtils");
const Channel_1 = require("./Channel");
const ElectronApi_1 = require("./ElectronApi");
class BroadcastApi {
    static async sendBroadcastEvent(event) {
        await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.BROADCAST, JSON.stringify(event));
    }
    static async registerBroadcast(callback) {
        await ElectronApi_1.ElectronApi.addIpcListener(Channel_1.Channel.BROADCAST, (json) => {
            callback(JSON.parse(json));
        });
    }
    static async unregisterBroadcast() {
        await ElectronApi_1.ElectronApi.removeIpcListener(Channel_1.Channel.BROADCAST);
    }
}
exports.BroadcastApi = BroadcastApi;
