import { Widget } from "../model/Widget";
import { ElectronUtils } from "../utils/ElectronUtils";
export class WidgetApi {
    static async registerWidgets(widgets) {
        await ElectronUtils.getAPI().invokeIpc("registerWidgets", JSON.stringify(widgets));
    }
    static async registerWidgetPackage(widgetPackage) {
        await ElectronUtils.getAPI().invokeIpc("registerWidgetPackage", JSON.stringify(widgetPackage));
    }
    static async getWidgets() {
        const data = await ElectronUtils.getAPI().invokeIpc("getWidgets");
        const widgets = [];
        if (data) {
            const arr = JSON.parse(data);
            for (const i in arr) {
                widgets.push(Widget.parseObject(arr[i]));
            }
        }
        return widgets;
    }
}
