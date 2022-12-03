export declare class AppApi {
    static readonly SET_CONFIG = "SET_CONFIG";
    static readonly GET_CONFIG = "GET_CONFIG";
    static setConfig(key: string, value: string | number | boolean): Promise<void>;
    static getConfig(key: string, defaultValue: string | number | boolean): Promise<any>;
}
