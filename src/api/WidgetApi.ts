import {Widget} from "../model/Widget";
import {ElectronUtils} from "../utils/ElectronUtils";
import {WidgetPackage} from "../model/WidgetPackage";
import {Channel} from "./Channel";
import {WidgetParams} from "../model/WidgetParams";
import {UrlUtils} from "../utils/UrlUtils";
import {WidgetData} from "../model/WidgetData";
import {BroadcastEvent} from "../model/event/BroadcastEvent";
import {BroadcastApi} from "./BroadcastApi";
import localforage from "localforage";

export interface SaveWidgetOption {
    sendBroadcast?: boolean
    id?: string
}

export class WidgetApi {
    static readonly REGISTER_WIDGETS = "register-widgets"
    static readonly REGISTER_WIDGET_PACKAGE = "register-widget-package"
    static readonly GET_WIDGETS = "get-widgets"
    static readonly GET_WIDGET = "get-widget"
    static readonly GET_WIDGET_PACKAGE = "get-widget-package"
    static readonly GET_WIDGET_PACKAGES = "get-widget-packages"
    static readonly REMOVE_HOSTED_WIDGET = "remove-hosted-widget"

    static async registerWidgets(widgets: Widget[]) {
        await ElectronUtils.getAPI()?.invoke(Channel.WIDGET, this.REGISTER_WIDGETS, JSON.stringify(widgets));
    }

    static async registerWidgetPackage(widgetPackage: WidgetPackage) {
        await ElectronUtils.getAPI()?.invoke(Channel.WIDGET, this.REGISTER_WIDGET_PACKAGE, JSON.stringify(widgetPackage));
    }

    static async getWidgets(): Promise<Widget[]> {
        const data = await ElectronUtils.getAPI()?.invoke(Channel.WIDGET, this.GET_WIDGETS);
        const widgets: Widget[] = [];
        if (data) {
            const arr = JSON.parse(data)
            for (const i in arr) {
                widgets.push(Widget.parseObject(arr[i]))
            }
        }
        return widgets;
    }

    static async getWidgetPackages(): Promise<WidgetPackage> {
        return await ElectronUtils.getAPI()?.invoke(Channel.WIDGET, this.GET_WIDGET_PACKAGES);
    }

    /**
     *
     * @param name package name
     */
    static async getWidget(name: string): Promise<Widget> {
        return Widget.parseObject(await ElectronUtils.getAPI()?.invoke(Channel.WIDGET, this.GET_WIDGET, name));
    }

    /**
     *
     * @param name package name
     */
    static async getWidgetPackage(name: string): Promise<WidgetPackage> {
        return WidgetPackage.parseObject(await ElectronUtils.getAPI()?.invoke(Channel.WIDGET, this.GET_WIDGET_PACKAGE, name));
    }

    /**
     * 移除组件
     * @param id
     */
    static async removeHostedWidget(id: string) {
        return ElectronUtils.getAPI()?.invoke(Channel.WIDGET, this.REMOVE_HOSTED_WIDGET, id)
    }

    /**
     * 获取组件配置地址
     * @param widgetName
     */
    static async getWidgetConfigUrl(widgetName: string, widgetParams: WidgetParams): Promise<string | null> {
        const widget = await this.getWidget(widgetName);
        if (!widget || widget.configUrl == null) return null;
        const widgetPackage = await this.getWidgetPackage(widget.packageName!);
        if (!widgetPackage) return null;
        return UrlUtils.getWidgetUrl(widget.configUrl, widgetPackage, widgetParams);
    }

    static async getWidgetUrl(widgetName: string, widgetParams: WidgetParams): Promise<string | null> {
        const widget = await this.getWidget(widgetName);
        if (!widget || widget.configUrl == null) return null;
        const widgetPackage = await this.getWidgetPackage(widget.packageName!);
        if (!widgetPackage) return null;
        return UrlUtils.getWidgetUrl(widget.url, widgetPackage, widgetParams);
    }

    static async getWidgetPackageUrl(packageName: string, hash?: boolean): Promise<string | null> {
        const widgetPackage = await this.getWidgetPackage(packageName!);
        if (!widgetPackage) return null;
        return widgetPackage.getFullUrl(hash);
    }


    /**
     * 通过组件名保存组件信息，通常用于存储可以在同类组件中共用的数据
     * @param data
     * @param options
     */
    public static async saveDataByName<T extends WidgetData>(data: T, options: SaveWidgetOption = {sendBroadcast: true}) {
        const store = this.getStore(data.name);
        const json = JSON.stringify(data);
        const result = await store.setItem(data.name, json);
        if (options.sendBroadcast) {
            const broadcastEvent = new BroadcastEvent(BroadcastEvent.TYPE_WIDGET_UPDATED, "", {
                name: data.name,
                id: options.id,
                json
            });
            await BroadcastApi.sendBroadcastEvent(broadcastEvent);
        }
        return result;
    }

    private static stores = new Map<string, LocalForage>()

    /**
     * 获取组件 LocalForage 存储实例
     * @param name
     */
    private static getStore(name: string): LocalForage {
        if (this.stores.has(name)) {
            return this.stores.get(name)!
        }
        const store = localforage.createInstance({name: name});
        this.stores.set(name, store);
        return store;
    }
}
