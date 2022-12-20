export class WidgetPackage {
    constructor() {
        /**
         * Hash路由模式，默认为true
         */
        this.hash = true;
    }
    static parseJSON(json) {
        const object = JSON.parse(json);
        return this.parseObject(object);
    }
    static parseObject(obj) {
        let widgetPackage = new WidgetPackage();
        Object.assign(widgetPackage, obj);
        return widgetPackage;
    }
    /**
     * 获取组件完整路径
     * 如果url是http链接，直接返回链接
     * 如果是本地组件：file://链接，则返回 url+entry,e.g. file://C:\users\neo\desktop\index.html#
     */
    getFullUrl() {
        if (this.url.startsWith("http")) {
            return this.url;
        }
        return this.url + (this.entry.startsWith("/") ? this.entry : `/${this.entry}`);
    }
}
