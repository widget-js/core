"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetApi = void 0;
const Widget_1 = require("../model/Widget");
const ElectronUtils_1 = require("../utils/ElectronUtils");
class WidgetApi {
    static async registerWidgets(widgets) {
        await ElectronUtils_1.ElectronUtils.getAPI().invokeIpc("registerWidgets", JSON.stringify(widgets));
    }
    static async registerWidgetPackage(widgetPackage) {
        await ElectronUtils_1.ElectronUtils.getAPI().invokeIpc("registerWidgetPackage", JSON.stringify(widgetPackage));
    }
    static async getWidgets() {
        const data = await ElectronUtils_1.ElectronUtils.getAPI().invokeIpc("getWidgets");
        const widgets = [];
        if (data) {
            const arr = JSON.parse(data);
            for (const i in arr) {
                widgets.push(Widget_1.Widget.parseObject(arr[i]));
            }
        }
        return widgets;
    }
}
exports.WidgetApi = WidgetApi;
