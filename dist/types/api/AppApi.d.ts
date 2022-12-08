export declare class AppApi {
    static readonly SET_CONFIG = "SET_CONFIG";
    static readonly GET_CONFIG = "GET_CONFIG";
    static readonly OPEN_ADD_WIDGET_WINDOW = "open-add-widget-window";
    static readonly OPEN_SETTING_WINDOW = "open-setting-window";
    static setConfig(key: string, value: string | number | boolean): Promise<void>;
    static getConfig(key: string, defaultValue: string | number | boolean): Promise<any>;
    static openAddWidgetWindow(): void;
    static openSettingWindow(): void;
}
