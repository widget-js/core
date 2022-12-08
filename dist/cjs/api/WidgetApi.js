"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetApi = void 0;
const Widget_1 = require("../model/Widget");
const ElectronUtils_1 = require("../utils/ElectronUtils");
const Channel_1 = require("./Channel");
class WidgetApi {
    static async registerWidgets(widgets) {
        await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.WIDGET, this.REGISTER_WIDGETS, JSON.stringify(widgets));
    }
    static async registerWidgetPackage(widgetPackage) {
        await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.WIDGET, this.REGISTER_WIDGET_PACKAGE, JSON.stringify(widgetPackage));
    }
    static async getWidgets() {
        const data = await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.WIDGET, this.GET_WIDGETS);
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
WidgetApi.REGISTER_WIDGETS = "register-widgets";
WidgetApi.REGISTER_WIDGET_PACKAGE = "register-widget-package";
WidgetApi.GET_WIDGETS = "get-widgets";
