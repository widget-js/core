/**
 * 组件配置数据，用于存储组件自定义页面所设置的数据
 */
export default class WidgetData {
    id: string;
    name: string;
    title?: string;
    backgroundColor?: string;
    color?: string;
    fontSize?: number;
    borderRadius?: number;
    date?: string;
    /**
     * 其他数据，以JSON格式放在这里
     */
    extraJSON?: any;
    constructor(name: string, id: string);
}
