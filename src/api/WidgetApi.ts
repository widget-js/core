import {Widget} from "../model/Widget";
import {ElectronUtils} from "../utils/ElectronUtils";
import {WidgetPackage} from "../model/WidgetPackage";
import {Channel} from "./Channel";

export class WidgetApi {
    static readonly REGISTER_WIDGETS = "register-widgets"
    static readonly REGISTER_WIDGET_PACKAGE = "register-widget-package"
    static readonly GET_WIDGETS = "get-widgets"

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
}
