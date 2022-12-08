"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronApi = void 0;
const ElectronUtils_1 = require("../utils/ElectronUtils");
class ElectronApi {
    static async addIpcListener(key, f) {
        await ElectronUtils_1.ElectronUtils.getAPI().addIpcListener(key, f);
    }
    static async removeIpcListener(key) {
        await ElectronUtils_1.ElectronUtils.getAPI().removeIpcListener(key);
    }
}
exports.ElectronApi = ElectronApi;
