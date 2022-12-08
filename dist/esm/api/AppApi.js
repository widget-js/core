import { ElectronUtils } from "../utils/ElectronUtils";
import { Channel } from "./Channel";
export class AppApi {
    static async setConfig(key, value) {
        await ElectronUtils.getAPI().invoke(Channel.APP, this.SET_CONFIG, key, value);
    }
    static async getConfig(key, defaultValue) {
        const value = await ElectronUtils.getAPI().invoke(Channel.APP, this.GET_CONFIG, key);
        if (value === null || value === undefined) {
            return defaultValue;
        }
        if (typeof defaultValue == "boolean") {
            return value === "true";
        }
        return value;
    }
    static openAddWidgetWindow() {
        ElectronUtils.getAPI().invoke(Channel.APP, this.OPEN_ADD_WIDGET_WINDOW);
    }
    static openSettingWindow() {
        ElectronUtils.getAPI().invoke(Channel.APP, this.OPEN_SETTING_WINDOW);
    }
}
AppApi.SET_CONFIG = "SET_CONFIG";
AppApi.GET_CONFIG = "GET_CONFIG";
AppApi.OPEN_ADD_WIDGET_WINDOW = "open-add-widget-window";
AppApi.OPEN_SETTING_WINDOW = "open-setting-window";
