import { Widget } from "../model/Widget";
import { BroadcastEvent } from "../model/BroadcastEvent";
export declare class ElectronApi {
    static openAddWidgetWindow(): void;
    static registerWidgets(widgets: Widget[]): Promise<void>;
    static setConfig(key: string, value: string | number | boolean): Promise<void>;
    static sendBroadcastEvent(event: BroadcastEvent): Promise<void>;
    static registerBroadcast(callback: (event: BroadcastEvent) => void): Promise<void>;
    static unregisterBroadcast(): Promise<void>;
    static addIpcListener(key: String, f: Function): Promise<void>;
    static removeIpcListener(key: String): Promise<void>;
    static getConfig(key: string, defaultValue: string | number | boolean): Promise<any>;
    static hasElectronApi(): boolean;
}
