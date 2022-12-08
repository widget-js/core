import { ElectronUtils } from "../utils/ElectronUtils";
export class ElectronApi {
    static async addIpcListener(key, f) {
        await ElectronUtils.getAPI().addIpcListener(key, f);
    }
    static async removeIpcListener(key) {
        await ElectronUtils.getAPI().removeIpcListener(key);
    }
}
