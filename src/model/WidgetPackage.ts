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
    description!: {};
    /**
     * 组件入口文件，通常为 index.html
     */
    entry!: string;

    widgets!: Widget[];

}
