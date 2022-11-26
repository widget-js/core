import { WidgetData } from "../model/WidgetData";
export declare class WidgetDataRepository {
    private static stores;
    /**
     * 保存组件数据
     * @param data
     */
    static save(data: WidgetData): Promise<string>;
    /**
     * 获取组件 LocalForage 存储实例
     * @param name
     */
    static getStore(name: string): LocalForage;
    /**
     * 通过组件名保存组件信息，通常用于存储可以在同类组件中共用的数据
     * @param name
     * @param json
     */
    static saveByName(name: string, json: string): Promise<string>;
    static findWithName<T extends WidgetData>(name: string, type: {
        new (name: string, id?: string): T;
    }): Promise<T | undefined>;
    static find<T extends WidgetData>(name: string, id: string, type: {
        new (name: string, id?: string): T;
    }): Promise<T | undefined>;
    private static getKey;
}
