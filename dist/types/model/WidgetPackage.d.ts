import { Widget } from "./Widget";
export declare class WidgetPackage {
    /**
     * 组件包名,一般为域名倒置，e.g. com.example
     */
    name: string;
    /**
     * 组件包版本
     */
    version: string;
    /**
     * 组件作者署名
     */
    author: string;
    /**
     * 组件首页
     */
    homepage: string;
    /**
     * 组件包介绍
     */
    /**
     * 组件描述
     */
    description: {
        [key: string]: string;
    };
    /**
     * 组件入口文件，通常为 index.html
     */
    entry: string;
    /**
     * Hash路由模式，默认为true
     */
    hash: boolean;
    /**
     * 可能是网络地址，或者本地路径（解压后的文件夹路径）,
     * 网络地址：https://www.bilibili.com
     * 本地地址：file:///C:/Users/neo/Desktop
     * 在测试时。地址通常为: http://127.0.0.1:8080
     */
    url: string;
    widgets: Widget[];
    static parseJSON(json: string): WidgetPackage;
    static parseObject(obj: any): WidgetPackage;
    /**
     * 获取组件完整路径
     * 如果url是http链接，直接返回链接
     * 如果是本地组件：file://链接，则返回 url+entry,e.g. file://C:\users\neo\desktop\index.html#
     */
    getFullUrl(): string;
}
