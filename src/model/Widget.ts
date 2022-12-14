import {HostedMode} from "./HostedMode";

type WidgetOptions = {
    name: string,
    title: { [key: string]: string },
    description: { [key: string]: string },
    keywords: WidgetKeyword[],
    lang: string,
    width: number,
    height: number,
    maxWidth?: number,
    maxHeight?: number,
    minWidth?: number,
    minHeight?: number,
    url: string,
    configUrl?: string,
    packageName?: string,
    extraUrl?: { [key: string]: string },
    supportHostedMode?: HostedMode;
    /**
     * 组件拉伸后，是否强制刷新组件
     */
    refreshWhenResided?: boolean
}

export class Widget {
    //组件名称,名称与包名类似，e.g. com.example.countdown
    readonly name: string;

    /**
     * 组件标题，显示在界面上的，
     * https://zh.m.wikipedia.org/zh-hans/ISO_639-1
     */
    readonly title: { [key: string]: string };
    /**
     * 组件介绍
     */
    readonly description: { [key: string]: string };
    readonly keywords: WidgetKeyword[];
    /**
     * 组件默认语言
     */
    readonly lang: string = "zh";
    readonly width: number;
    packageName?: string | null;
    readonly height: number;
    readonly maxWidth: number;
    readonly maxHeight: number;
    readonly minWidth: number;
    readonly minHeight: number;
    readonly url: string;
    readonly supportHostedMode: number;
    /**
     * 组件配置路由
     */
    readonly configUrl?: string | null;
    /**
     * 组件拉伸后，是否强制刷新组件
     */
    readonly refreshWhenResided: boolean
    /**
     * 组件其他页面的url在这注册
     */
    readonly extraUrl: { [key: string]: string };

    constructor(options: WidgetOptions) {
        this.name = options.name;
        this.title = options.title;
        this.description = options.description;
        this.keywords = options.keywords;
        this.lang = options.lang;
        this.width = options.width;
        this.height = options.height;
        this.maxWidth = options.maxWidth ?? options.width;
        this.maxHeight = options.maxHeight ?? options.height;
        this.minWidth = options.minWidth ?? options.width;
        this.minHeight = options.minHeight ?? options.height;
        this.url = options.url;
        this.packageName = options.packageName;
        this.configUrl = options.configUrl;
        this.refreshWhenResided = options.refreshWhenResided ?? false;
        this.extraUrl = options.extraUrl ?? {};
        this.supportHostedMode = options.supportHostedMode ?? HostedMode.NORMAL | HostedMode.OVERLAP;
    }

    /**
     * 获取组件标题
     * @param lang 语言环境，不传则获取默认语言
     */
    getTitle(lang?: string): string | undefined {
        return lang ? this.title[lang] ?? this.title[this.lang] : this.title[this.lang];
    }

    /**
     * 获取组件标描述
     * @param lang 语言环境，不传则获取默认标题
     */
    getDescription(lang?: string): string | undefined {
        return lang ? this.description[lang] : this.description[this.lang];
    }


    static parseJSON(json: string): Widget {
        const object = JSON.parse(json);
        return this.parseObject(object);
    }

    static parseObject(obj: any): Widget {
        return new Widget({
            ...obj
        })
    }

    /**
     * 是否支持悬浮窗
     */
    isSupportOverlap(): boolean {
        return (this.supportHostedMode & HostedMode.OVERLAP) > 0;
    }

    /**
     * 是否支持普通模式
     */
    isSupportNormal() {
        return (this.supportHostedMode & HostedMode.NORMAL) > 0;
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


