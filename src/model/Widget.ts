export class Widget {
    //组件名称,名称与包名类似，e.g. com.example.countdown
    readonly name: string;

    /**
     * 组件标题，显示在界面上的，
     * https://zh.m.wikipedia.org/zh-hans/ISO_639-1
     */
    readonly title: Map<string, string>;
    /**
     * 组件介绍
     */
    readonly desc: Map<string, string>;
    readonly keywords: WidgetKeyword[];
    /**
     * 组件默认语言
     */
    readonly lang: string = "zh";
    readonly w: number;
    readonly h: number;
    readonly maxW: number;
    readonly maxH: number;
    readonly minW: number;
    readonly minH: number;
    readonly url: string;
    //组件配置url
    readonly configUrl?: string | null;
    readonly debugUrl?: string;

    constructor(name: string, title: Map<string, string>, desc: Map<string, string>, keywords: WidgetKeyword[], lang: string, w: number, h: number, maxW: number, maxH: number, minW: number, minH: number, url: string, configUrl?: string | null, debugUrl?: string) {
        this.name = name;
        this.title = title;
        this.desc = desc;
        this.keywords = keywords;
        this.lang = lang;
        this.w = w;
        this.h = h;
        this.maxW = maxW;
        this.maxH = maxH;
        this.minW = minW;
        this.minH = minH;
        this.url = url;
        this.configUrl = configUrl;
        this.debugUrl = debugUrl;
    }

    /**
     * 获取组件标题
     * @param lang 语言环境，不传则获取默认语言
     */
    getTitle(lang?: string): string | undefined {
        return lang ? this.title.get(lang) : this.title.get(this.lang);
    }

    /**
     * 获取组件标描述
     * @param lang 语言环境，不传则获取默认标题
     */
    getDesc(lang?: string): string | undefined {
        return lang ? this.desc.get(lang) : this.desc.get(this.lang);
    }

    stringify(): string {
        const jsonObject = JSON.parse(JSON.stringify(this));
        jsonObject["title"] = Object.fromEntries(this.title);
        jsonObject["desc"] = Object.fromEntries(this.desc);
        return JSON.stringify(jsonObject);
    }
}


export enum WidgetKeyword {
    RECOMMEND = "recommend",
    TOOLS = "tools",
    EFFICIENCY = "efficiency",
    PICTURE = "picture",
    LIFE = "life",
    SHORTCUT = "shortcut",
    COUNTDOWN = "countdown",
    TIMER = "timer",
    INFO = "info",
    DASHBOARD = "dashboard",
}


