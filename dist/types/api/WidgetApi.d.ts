import { Widget } from "../model/Widget";
import { WidgetPackage } from "../model/WidgetPackage";
export declare class WidgetApi {
    static registerWidgets(widgets: Widget[]): Promise<void>;
    static registerWidgetPackage(widgetPackage: WidgetPackage): Promise<void>;
    static getWidgets(): Promise<Widget[]>;
}
