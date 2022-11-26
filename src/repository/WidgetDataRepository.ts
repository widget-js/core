import localforage from "localforage";
import {BroadcastEvent} from "../model/BroadcastEvent";
import {ElectronApi} from "../api/ElectronApi";
import {WidgetData} from "../model/WidgetData";

export class WidgetDataRepository {
    private static stores = new Map<string, LocalForage>()

    /**
     * 保存组件数据
     * @param data
     */
    public static async save(data: WidgetData) {
        let store = this.getStore(data.name);
        const result = await store.setItem(this.getKey(data.name, data.id), JSON.stringify(data));
        const broadcastEvent = new BroadcastEvent(BroadcastEvent.TYPE_WIDGET_UPDATED, "", data);
        await ElectronApi.sendBroadcastEvent(broadcastEvent);
        return result;
    }

    /**
     * 获取组件 LocalForage 存储实例
     * @param name
     */
    public static getStore(name: string):LocalForage {
        if (this.stores.has(name)) {
            return this.stores.get(name)!
        }
        const store = localforage.createInstance({name: name});
        this.stores.set(name,store);
        return store;
    }

    /**
     * 通过组件名保存组件信息，通常用于存储可以在同类组件中共用的数据
     * @param name
     * @param json
     */
    public static async saveByName(name: string, json: string) {
        let store = this.getStore(name);
        const result = await store.setItem(name, json);
        const broadcastEvent = new BroadcastEvent(BroadcastEvent.TYPE_WIDGET_UPDATED, "", {name, json});
        await ElectronApi.sendBroadcastEvent(broadcastEvent);
        return result;
    }

    public static async findByName<T extends WidgetData>(name: string, type: { new(name: string, id?: string): T; }): Promise<T | undefined> {
        let store = this.getStore(name);
        let result = await store.getItem<string>(name);
        if (result) {
            const widgetData = new type(name);
            widgetData.parseJSON(JSON.parse(result))
            return widgetData;
        }
        return undefined;
    }

    public static async find<T extends WidgetData>(name: string, id: string, type: { new(name: string, id?: string): T; }): Promise<T | undefined> {
        let store = this.getStore(name);
        let result = await store.getItem<string>(this.getKey(name, id));
        if (result) {
            const widgetData = new type(name, id);
            widgetData.parseJSON(JSON.parse(result))
            return widgetData;
        }
        return undefined;
    }

    private static getKey(name: string, id?: string) {
        return `${name}@${id}`;
    }
}
