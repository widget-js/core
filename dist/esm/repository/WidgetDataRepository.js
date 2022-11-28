import localforage from "localforage";
import { BroadcastEvent } from "../model/BroadcastEvent";
import { ElectronApi } from "../api/ElectronApi";
export class WidgetDataRepository {
    /**
     * 保存组件数据
     * @param data
     */
    static async save(data) {
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
    static getStore(name) {
        if (this.stores.has(name)) {
            return this.stores.get(name);
        }
        const store = localforage.createInstance({ name: name });
        this.stores.set(name, store);
        return store;
    }
    /**
     * 通过组件名保存组件信息，通常用于存储可以在同类组件中共用的数据
     * @param data
     */
    static async saveByName(data) {
        const store = this.getStore(data.name);
        const json = JSON.stringify(data);
        const result = await store.setItem(data.name, json);
        const broadcastEvent = new BroadcastEvent(BroadcastEvent.TYPE_WIDGET_UPDATED, "", { name: data.name, json });
        await ElectronApi.sendBroadcastEvent(broadcastEvent);
        return result;
    }
    static async findByName(name, type) {
        let store = this.getStore(name);
        let result = await store.getItem(name);
        if (result) {
            const widgetData = new type(name);
            widgetData.parseJSON(JSON.parse(result));
            return widgetData;
        }
        return undefined;
    }
    static async find(name, id, type) {
        let store = this.getStore(name);
        let result = await store.getItem(this.getKey(name, id));
        if (result) {
            const widgetData = new type(name, id);
            widgetData.parseJSON(JSON.parse(result));
            return widgetData;
        }
        return undefined;
    }
    static getKey(name, id) {
        return `${name}@${id}`;
    }
}
WidgetDataRepository.stores = new Map();
