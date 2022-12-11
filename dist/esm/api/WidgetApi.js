import { Widget } from "../model/Widget";
import { ElectronUtils } from "../utils/ElectronUtils";
import { Channel } from "./Channel";
export class WidgetApi {
    static async registerWidgets(widgets) {
        await ElectronUtils.getAPI().invoke(Channel.WIDGET, this.REGISTER_WIDGETS, JSON.stringify(widgets));
    }
    static async registerWidgetPackage(widgetPackage) {
        await ElectronUtils.getAPI().invoke(Channel.WIDGET, this.REGISTER_WIDGET_PACKAGE, JSON.stringify(widgetPackage));
    }
    static async getWidgets() {
        const data = await ElectronUtils.getAPI().invoke(Channel.WIDGET, this.GET_WIDGETS);
        const widgets = [];
        if (data) {
            const arr = JSON.parse(data);
            for (const i in arr) {
                widgets.push(Widget.parseObject(arr[i]));
            }
        }
        return widgets;
    }
    static async getWidgetPackages() {
        return await ElectronUtils.getAPI().invoke(Channel.WIDGET, this.GET_WIDGET_PACKAGES);
    }
    /**
     *
     * @param name package name
     */
    static async getWidget(name) {
        return await ElectronUtils.getAPI().invoke(Channel.WIDGET, this.GET_WIDGET, name);
    }
    /**
     *
     * @param name package name
     */
    static async getWidgetPackage(name) {
        return await ElectronUtils.getAPI().invoke(Channel.WIDGET, this.GET_WIDGET_PACKAGE, name);
    }
}
WidgetApi.REGISTER_WIDGETS = "register-widgets";
WidgetApi.REGISTER_WIDGET_PACKAGE = "register-widget-package";
WidgetApi.GET_WIDGETS = "get-widgets";
WidgetApi.GET_WIDGET = "get-widget";
WidgetApi.GET_WIDGET_PACKAGE = "get-widget-package";
WidgetApi.GET_WIDGET_PACKAGES = "get-widget-packages";
