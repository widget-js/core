"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetData = void 0;
/**
 * 组件配置数据，用于存储组件自定义页面所设置的数据
 */
class WidgetData {
    constructor(name, id) {
        this.id = id;
        this.name = name;
    }
    parseJSON(json) {
        Object.assign(this, json);
    }
}
exports.WidgetData = WidgetData;
