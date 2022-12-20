"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetApi = void 0;
const Widget_1 = require("../model/Widget");
const ElectronUtils_1 = require("../utils/ElectronUtils");
const WidgetPackage_1 = require("../model/WidgetPackage");
const Channel_1 = require("./Channel");
const UrlUtils_1 = require("../utils/UrlUtils");
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
    static async getWidgetPackages() {
        return await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.WIDGET, this.GET_WIDGET_PACKAGES);
    }
    /**
     *
     * @param name package name
     */
    static async getWidget(name) {
        return Widget_1.Widget.parseObject(await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.WIDGET, this.GET_WIDGET, name));
    }
    /**
     *
     * @param name package name
     */
    static async getWidgetPackage(name) {
        return WidgetPackage_1.WidgetPackage.parseObject(await ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.WIDGET, this.GET_WIDGET_PACKAGE, name));
    }
    /**
     * 移除组件
     * @param id
     */
    static async removeHostedWidget(id) {
        return ElectronUtils_1.ElectronUtils.getAPI().invoke(Channel_1.Channel.WIDGET, this.REMOVE_HOSTED_WIDGET, id);
    }
    /**
     * 获取组件配置地址
     * @param widgetName
     */
    static async getWidgetConfigUrl(widgetName, widgetParams) {
        const widget = await this.getWidget(widgetName);
        if (!widget || widget.configUrl == null)
            return null;
        const widgetPackage = await this.getWidgetPackage(widget.packageName);
        if (!widgetPackage)
            return null;
        return UrlUtils_1.UrlUtils.getWidgetUrl(widget.configUrl, widgetPackage, widgetParams);
    }
}
exports.WidgetApi = WidgetApi;
WidgetApi.REGISTER_WIDGETS = "register-widgets";
WidgetApi.REGISTER_WIDGET_PACKAGE = "register-widget-package";
WidgetApi.GET_WIDGETS = "get-widgets";
WidgetApi.GET_WIDGET = "get-widget";
WidgetApi.GET_WIDGET_PACKAGE = "get-widget-package";
WidgetApi.GET_WIDGET_PACKAGES = "get-widget-packages";
WidgetApi.REMOVE_HOSTED_WIDGET = "remove-hosted-widget";
