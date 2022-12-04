"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElectronUtils = void 0;
class ElectronUtils {
    static hasElectronApi() {
        return this.getAPI() != null;
    }
    /**
     * 获取ElectronAPI
     * windows api
     */
    static getAPI() {
        if (Reflect.has(window, "electronAPI")) {
            //@ts-ignore
            return window.electronAPI;
        }
        else if (Reflect.has(window.parent, "electronAPI")) {
            //@ts-ignore
            return window.parent.electronAPI;
        }
        return null;
    }
}
exports.ElectronUtils = ElectronUtils;
