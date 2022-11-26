/**
 * 组件配置数据，用于存储组件自定义页面所设置的数据
 */
export class WidgetData {
    constructor(name, id) {
        this.id = id;
        this.name = name;
    }
    parseJSON(json) {
        Object.assign(this, json);
    }
}
