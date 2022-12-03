"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppApi = void 0;
const ElectronUtils_1 = require("../utils/ElectronUtils");
const Channel_1 = require("./Channel");
class AppApi {
    static async setConfig(key, value) {
        await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.APP, this.SET_CONFIG, key, value);
    }
    static async getConfig(key, defaultValue) {
        const value = await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.APP, this.GET_CONFIG, key);
        if (value === null || value === undefined) {
            return defaultValue;
        }
        if (typeof defaultValue == "boolean") {
            return value === "true";
        }
        return value;
    }
}
exports.AppApi = AppApi;
AppApi.SET_CONFIG = "SET_CONFIG";
AppApi.GET_CONFIG = "GET_CONFIG";
