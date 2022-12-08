import { Widget } from "../model/Widget";
import { WidgetPackage } from "../model/WidgetPackage";
export declare class WidgetApi {
    static readonly REGISTER_WIDGETS = "register-widgets";
    static readonly REGISTER_WIDGET_PACKAGE = "register-widget-package";
    static readonly GET_WIDGETS = "get-widgets";
    static readonly GET_WIDGET_PACKAGE = "get-widget-package";
    static readonly GET_WIDGET_PACKAGES = "get-widget-packages";
    static registerWidgets(widgets: Widget[]): Promise<void>;
    static registerWidgetPackage(widgetPackage: WidgetPackage): Promise<void>;
    static getWidgets(): Promise<Widget[]>;
    static getWidgetPackages(): Promise<WidgetPackage>;
    /**
     *
     * @param name package name
     */
    static getWidgetPackage(name: string): Promise<WidgetPackage>;
}
