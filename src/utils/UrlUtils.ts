import {WidgetPackage} from "../model/WidgetPackage";
import {WidgetParams} from "../model/WidgetParams";

export class UrlUtils {
    static getWidgetUrl(widgetUrl: string, widgetPackage: WidgetPackage, widgetParams: WidgetParams) {
        let url = "";
        if (widgetUrl.startsWith("http")) {
            url = widgetUrl;
        } else {
            url = widgetPackage.getFullUrl() + widgetUrl;
        }
        if (url.includes("?")) {
            return url + "&" + widgetParams.toUrlParams().toString();
        } else {
            return url + "?" + widgetParams.toUrlParams().toString();
        }
    }
}
