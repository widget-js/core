type WidgetOptions = {
    name: string;
    title: {
        [key: string]: string;
    };
    description: {
        [key: string]: string;
    };
    keywords: WidgetKeyword[];
    lang: string;
    width: number;
    height: number;
    maxWidth?: number;
    maxHeight?: number;
    minWidth?: number;
    minHeight?: number;
    url: string;
    configUrl?: string;
    extraUrl?: {
        [key: string]: string;
    };
};
export declare class Widget {
    readonly name: string;
    /**
     * 组件标题，显示在界面上的，
     * https://zh.m.wikipedia.org/zh-hans/ISO_639-1
     */
    readonly title: {
        [key: string]: string;
    };
    /**
     * 组件介绍
     */
    readonly description: {
        [key: string]: string;
    };
    readonly keywords: WidgetKeyword[];
    /**
     * 组件默认语言
     */
    readonly lang: string;
    readonly width: number;
    readonly height: number;
    readonly maxWidth: number;
    readonly maxHeight: number;
    readonly minWidth: number;
    readonly minHeight: number;
    readonly url: string;
    readonly configUrl?: string | null;
    /**
     * 组件其他页面的url在这注册
     */
    readonly extraUrl: {
        [key: string]: string;
    };
    constructor(options: WidgetOptions);
    /**
     * 获取组件标题
     * @param lang 语言环境，不传则获取默认语言
     */
    getTitle(lang?: string): string | undefined;
    /**
     * 获取组件标描述
     * @param lang 语言环境，不传则获取默认标题
     */
    getDescription(lang?: string): string | undefined;
    static parseJSON(json: string): Widget;
    static parseObject(obj: any): Widget;
}
export declare enum WidgetKeyword {
    RECOMMEND = "recommend",
    TOOLS = "tools",
    EFFICIENCY = "efficiency",
    PICTURE = "picture",
    LIFE = "life",
    SHORTCUT = "shortcut",
    COUNTDOWN = "countdown",
    TIMER = "timer",
    INFO = "info",
    DASHBOARD = "dashboard"
}
export {};
