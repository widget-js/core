import {Widget} from "./Widget";

export class WidgetPackage {
    /**
     * 组件名称,名称与包名类似，e.g. com.example.countdown
     */
    name!: string;
    /**
     * 组件包版本
     */
    version!: string;
    /**
     * 组件作者署名
     */
    author!: string;
    /**
     * 组件首页
     */
    homepage!: string;
    /**
     * 组件包介绍
     */
    /**
     * 组件描述
     */
    description!: { [key: string]: string };
    /**
     * 组件入口文件，通常为 index.html
     */
    entry!: string;
    /**
     * 测试时的url，如：http://127.0.0.1:8080/#/
     */
    debugUrl?: string
    /**
     * 解压后的文件夹路径
     */
    folder?: string

    widgets!: Widget[];

}
