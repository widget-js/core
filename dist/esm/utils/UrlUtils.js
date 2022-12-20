export class UrlUtils {
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
