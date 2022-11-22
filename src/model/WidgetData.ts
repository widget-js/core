/**
 * 组件配置数据，用于存储组件自定义页面所设置的数据
 */
export default class WidgetData {
    //组件id
    id: string;
    //组件名
    name: string;
    //显示在组件下方的标题
    title?: string;
    //背景颜色
    backgroundColor?: string;
    // 文字颜色
    color?: string;
    //字体大小
    fontSize?: number;
    //圆角半径
    borderRadius?: number;
    //日期
    date?:string;

    /**
     * 其他数据，以JSON格式放在这里
     */
    extraJSON?: any;

    constructor(name: string, id: string) {
        this.id = id;
        this.name = name;
    }

    // static fromObject(obj: any): WidgetData | undefined {
    //     if (obj["id"] && obj["name"]) {
    //         const widgetData = new WidgetData(obj["name"], obj["id"]);
    //         return Object.assign(widgetData, obj);
    //     }
    //     return undefined;
    //
    // }
}
