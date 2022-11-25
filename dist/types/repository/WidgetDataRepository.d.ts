import { WidgetData } from "../model/WidgetData";
export declare class WidgetDataRepository {
    static save(data: WidgetData): Promise<string>;
    static saveByName(name: string, json: string): Promise<string>;
    static find(name: string, id: string): Promise<any>;
    private static getKey;
}
