var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Keys } from "./Keys";
export class ElectronApi {
    static openAddWidgetWindow() {
        if (this.hasElectronApi()) {
            // @ts-ignore
            window.electronAPI.invokeIpc("openAddWidgetWindow");
        }
    }
    static registerWidgets(widgets) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasElectronApi()) {
                const data = JSON.parse(JSON.stringify(widgets.map(item => JSON.stringify(item))));
                // @ts-ignore
                yield window.electronAPI.invokeIpc("registerWidgets", data);
            }
        });
    }
    static setConfig(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasElectronApi()) {
                // @ts-ignore
                yield window.electronAPI.invokeIpc("setConfig", { key, value });
            }
        });
    }
    static sendBroadcastEvent(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasElectronApi()) {
                // @ts-ignore
                yield window.electronAPI.invokeIpc(Keys.BROADCAST_EVENT, JSON.stringify(event));
            }
        });
    }
    static registerBroadcast(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.addIpcListener(Keys.BROADCAST_EVENT, (json) => {
                callback(JSON.parse(json));
            });
        });
    }
    static unregisterBroadcast() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.removeIpcListener(Keys.BROADCAST_EVENT);
        });
    }
    static addIpcListener(key, f) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasElectronApi()) {
                // @ts-ignore
                yield window.electronAPI.addIpcListener(key, f);
            }
        });
    }
    static removeIpcListener(key) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasElectronApi()) {
                // @ts-ignore
                yield window.electronAPI.removeIpcListener(key);
            }
        });
    }
    static getConfig(key, defaultValue) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasElectronApi()) {
                // @ts-ignore
                const value = yield window.electronAPI.invokeIpc("getConfig", key);
                if (value === null || value === undefined) {
                    return defaultValue;
                }
                if (typeof defaultValue == "boolean") {
                    return value === "true";
                }
                return value;
            }
        });
    }
    static hasElectronApi() {
        return Reflect.has(window, "electronAPI");
    }
}
