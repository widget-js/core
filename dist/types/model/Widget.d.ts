type WidgetOptions = {
    name: string;
    title: Map<string, string>;
    description: Map<string, string>;
    keywords: WidgetKeyword[];
    lang: string;
    w: number;
    h: number;
    maxW?: number;
    maxH?: number;
    minW?: number;
    minH?: number;
    url: string;
    configUrl?: string;
    extraUrl?: Map<string, string>;
};
export declare class Widget {
    readonly name: string;
    /**
     * 组件标题，显示在界面上的，
     * https://zh.m.wikipedia.org/zh-hans/ISO_639-1
     */
    readonly title: Map<string, string>;
    /**
     * 组件介绍
     */
    readonly description: Map<string, string>;
    readonly keywords: WidgetKeyword[];
    /**
     * 组件默认语言
     */
    readonly lang: string;
    readonly w: number;
    readonly h: number;
    readonly maxW: number;
    readonly maxH: number;
    readonly minW: number;
    readonly minH: number;
    readonly url: string;
    readonly configUrl?: string | null;
    /**
     * 组件其他页面的url在这注册
     */
    readonly extraUrl: Map<string, string>;
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
    toJSON(): {
        name: string;
        title: {
            [k: string]: string;
        };
        description: {
            [k: string]: string;
        };
        keywords: WidgetKeyword[];
        lang: string;
        w: number;
        h: number;
        maxW: number;
        maxH: number;
        minW: number;
        minH: number;
        url: string;
        configUrl: string | null | undefined;
        extraUrl: {
            [k: string]: string;
        };
    };
    static parse(json: string): Widget;
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
