import localforage from "localforage";
import {BroadcastEvent} from "../model/BroadcastEvent";
import {ElectronApi} from "../api/ElectronApi";
import {WidgetData} from "../model/WidgetData";

export class WidgetDataRepository {

    static async save(data: WidgetData) {
        const result = await localforage.setItem(this.getKey(data.name, data.id), JSON.stringify(data));
        const broadcastEvent = new BroadcastEvent(BroadcastEvent.TYPE_WIDGET_UPDATED, "", data);
        await ElectronApi.sendBroadcastEvent(broadcastEvent);
        return result;
    }

    static async saveByName(name: string, json: string) {
        const result = await localforage.setItem(name, json);
        const broadcastEvent = new BroadcastEvent(BroadcastEvent.TYPE_WIDGET_UPDATED, "", {name,json});
        await ElectronApi.sendBroadcastEvent(broadcastEvent);
        return result;
    }

    static async find(name: string, id: string) {
        let result = await localforage.getItem<string>(this.getKey(name, id));
        if (result) {
            const widgetData = new WidgetData(name, id);
            return Object.assign(widgetData, JSON.parse(result));
        }
        return undefined;
    }

    private static getKey(name: string, id?: string) {
        return `${name}@${id}`;
    }
}
