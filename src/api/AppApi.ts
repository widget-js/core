import {ElectronUtils} from "../utils/ElectronUtils";
import {Channel} from "./Channel";

export class AppApi {
    static readonly SET_CONFIG = "SET_CONFIG"
    static readonly GET_CONFIG = "GET_CONFIG"
    static readonly OPEN_ADD_WIDGET_WINDOW = "open-add-widget-window"
    static readonly OPEN_SETTING_WINDOW = "open-setting-window"

    static async setConfig(key: string, value: string | number | boolean) {
        await ElectronUtils.getAPI()?.invoke(Channel.APP, this.SET_CONFIG, key, value);
    }

    static async getConfig(key: string, defaultValue: string | number | boolean) {
        const value = await ElectronUtils.getAPI()?.invoke(Channel.APP, this.GET_CONFIG, key);
        if (value === null || value === undefined) {
            return defaultValue;
        }
        if (typeof defaultValue == "boolean") {
            return value === "true"
        }
        return value;
    }

    static openAddWidgetWindow() {
        ElectronUtils.getAPI()?.invoke(Channel.APP, this.OPEN_ADD_WIDGET_WINDOW);
    }

    static openSettingWindow() {
        ElectronUtils.getAPI()?.invoke(Channel.APP, this.OPEN_SETTING_WINDOW);
    }
}
