/**
 * 组件配置数据，用于存储组件自定义页面所设置的数据
 */
export declare class WidgetData {
    id?: string;
    name: string;
    title?: string;
    backgroundColor?: string;
    color?: string;
    fontSize?: number;
    fontFamily?: string;
    borderRadius?: number;
    date?: string;
    files?: string[];
    url?: string;
    /**
     * 其他数据，以JSON格式放在这里
     */
    extraJSON?: any;
    constructor(name: string, id?: string);
}
