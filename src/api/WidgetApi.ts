import {Widget} from "../model/Widget";
import {ElectronUtils} from "../utils/ElectronUtils";
import {WidgetPackage} from "../model/WidgetPackage";

export class WidgetApi {
    static async registerWidgets(widgets: Widget[]) {
        await ElectronUtils.getAPI().invokeIpc("registerWidgets", JSON.stringify(widgets));
    }

    static async registerWidgetPackage(widgetPackage:WidgetPackage) {
        await ElectronUtils.getAPI().invokeIpc("registerWidgetPackage", JSON.stringify(widgetPackage));
    }

    static async getWidgets(): Promise<Widget[]> {
        const data = await ElectronUtils.getAPI().invokeIpc("getWidgets");
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
