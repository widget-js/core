"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlUtils = void 0;
class UrlUtils {
    static getWidgetUrl(widgetUrl, widgetPackage, widgetParams) {
        let url = "";
        if (widgetUrl.startsWith("http")) {
            url = widgetUrl;
        }
        else {
            url = widgetPackage.getFullUrl() + widgetUrl;
        }
        if (url.includes("?")) {
            return url + "&" + widgetParams.toUrlParams().toString();
        }
        else {
            return url + "?" + widgetParams.toUrlParams().toString();
        }
    }
}
exports.UrlUtils = UrlUtils;
