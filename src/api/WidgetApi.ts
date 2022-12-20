import {Widget} from "../model/Widget";
import {ElectronUtils} from "../utils/ElectronUtils";
import {WidgetPackage} from "../model/WidgetPackage";
import {Channel} from "./Channel";
import {WidgetParams} from "../model/WidgetParams";
import {UrlUtils} from "../utils/UrlUtils";

export class WidgetApi {
    static readonly REGISTER_WIDGETS = "register-widgets"
    static readonly REGISTER_WIDGET_PACKAGE = "register-widget-package"
    static readonly GET_WIDGETS = "get-widgets"
    static readonly GET_WIDGET = "get-widget"
    static readonly GET_WIDGET_PACKAGE = "get-widget-package"
    static readonly GET_WIDGET_PACKAGES = "get-widget-packages"
    static readonly REMOVE_HOSTED_WIDGET = "remove-hosted-widget"

    static async registerWidgets(widgets: Widget[]) {
        await ElectronUtils.getAPI().invoke(Channel.WIDGET, this.REGISTER_WIDGETS, JSON.stringify(widgets));
    }

    static async registerWidgetPackage(widgetPackage: WidgetPackage) {
        await ElectronUtils.getAPI().invoke(Channel.WIDGET, this.REGISTER_WIDGET_PACKAGE, JSON.stringify(widgetPackage));
    }

    static async getWidgets(): Promise<Widget[]> {
        const data = await ElectronUtils.getAPI().invoke(Channel.WIDGET, this.GET_WIDGETS);
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
        return await ElectronUtils.getAPI().invoke(Channel.WIDGET, this.GET_WIDGET_PACKAGES);
    }

    /**
     *
     * @param name package name
     */
    static async getWidget(name: string): Promise<Widget> {
        return Widget.parseObject(await ElectronUtils.getAPI().invoke(Channel.WIDGET, this.GET_WIDGET, name));
    }

    /**
     *
     * @param name package name
     */
    static async getWidgetPackage(name: string): Promise<WidgetPackage> {
        return WidgetPackage.parseObject(await ElectronUtils.getAPI().invoke(Channel.WIDGET, this.GET_WIDGET_PACKAGE, name));
    }

    /**
     * 移除组件
     * @param id
     */
    static async removeHostedWidget(id: string) {
        return ElectronUtils.getAPI().invoke(Channel.WIDGET, this.REMOVE_HOSTED_WIDGET, id)
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


}
