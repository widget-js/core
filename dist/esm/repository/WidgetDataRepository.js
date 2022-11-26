var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import localforage from "localforage";
import { BroadcastEvent } from "../model/BroadcastEvent";
import { ElectronApi } from "../api/ElectronApi";
export class WidgetDataRepository {
    /**
     * 保存组件数据
     * @param data
     */
    static save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let store = this.getStore(data.name);
            const result = yield store.setItem(this.getKey(data.name, data.id), JSON.stringify(data));
            const broadcastEvent = new BroadcastEvent(BroadcastEvent.TYPE_WIDGET_UPDATED, "", data);
            yield ElectronApi.sendBroadcastEvent(broadcastEvent);
            return result;
        });
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
     * @param name
     * @param json
     */
    static saveByName(name, json) {
        return __awaiter(this, void 0, void 0, function* () {
            let store = this.getStore(name);
            const result = yield store.setItem(name, json);
            const broadcastEvent = new BroadcastEvent(BroadcastEvent.TYPE_WIDGET_UPDATED, "", { name, json });
            yield ElectronApi.sendBroadcastEvent(broadcastEvent);
            return result;
        });
    }
    static findWithName(name, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let store = this.getStore(name);
            let result = yield store.getItem(name);
            if (result) {
                const widgetData = new type(name);
                widgetData.parseJSON(JSON.parse(result));
                return widgetData;
            }
            return undefined;
        });
    }
    static find(name, id, type) {
        return __awaiter(this, void 0, void 0, function* () {
            let store = this.getStore(name);
            let result = yield store.getItem(this.getKey(name, id));
            if (result) {
                const widgetData = new type(name, id);
                widgetData.parseJSON(JSON.parse(result));
                return widgetData;
            }
            return undefined;
        });
    }
    static getKey(name, id) {
        return `${name}@${id}`;
    }
}
WidgetDataRepository.stores = new Map();
