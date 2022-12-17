"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetPackage = void 0;
class WidgetPackage {
    static parseJSON(json) {
        const object = JSON.parse(json);
        return this.parseObject(object);
    }
    static parseObject(obj) {
        let widgetPackage = new WidgetPackage();
        Object.assign(widgetPackage, obj);
        return widgetPackage;
    }
    getFullUrl() {
        if (this.url.startsWith("http")) {
            return this.url;
        }
        return this.url + (this.entry.startsWith("/") ? this.entry : `/${this.entry}`);
    }
}
exports.WidgetPackage = WidgetPackage;
