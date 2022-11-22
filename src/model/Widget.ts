type WidgetOptions = {
    name: string,
    title: Map<string, string>,
    description: Map<string, string>,
    keywords: WidgetKeyword[],
    lang: string,
    w: number,
    h: number,
    maxW?: number,
    maxH?: number,
    minW?: number,
    minH?: number,
    url: string,
    configUrl?: string,
    extraUrl?: Map<string, string>,
}

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
    readonly description: Map<string, string>;
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
    /**
     * 组件其他页面的url在这注册
     */
    readonly extraUrl: Map<string, string>;

    constructor(options: WidgetOptions) {
        this.name = options.name;
        this.title = options.title;
        this.description = options.description;
        this.keywords = options.keywords;
        this.lang = options.lang;
        this.w = options.w;
        this.h = options.h;
        this.maxW = options.maxW ?? options.w;
        this.maxH = options.maxH ?? options.h;
        this.minW = options.minW ?? options.w;
        this.minH = options.minH ?? options.h;
        this.url = options.url;
        this.configUrl = options.configUrl;
        this.extraUrl = options.extraUrl ?? new Map<string, string>();
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
    getDescription(lang?: string): string | undefined {
        return lang ? this.description.get(lang) : this.description.get(this.lang);
    }

    toJSON() {
        return {
            name: this.name,
            title: Object.fromEntries(this.title),
            description: Object.fromEntries(this.description),
            keywords: this.keywords,
            lang: this.lang,
            w: this.w,
            h: this.h,
            maxW: this.maxW,
            maxH: this.maxH,
            minW: this.minW,
            minH: this.minH,
            url: this.url,
            configUrl: this.configUrl,
            extraUrl: Object.fromEntries(this.extraUrl),
        }
    }

    static parse(json: string): Widget {
        const object = JSON.parse(json);
        return new Widget({
            configUrl: object["configUrl"],
            description: new Map<string, string>(Object.entries(object["description"])),
            extraUrl: new Map<string, string>(Object.entries(object["extraUrl"])),
            h: object["h"],
            keywords: object["keywords"],
            lang: object["lang"],
            maxH: object["maxH"],
            maxW: object["maxW"],
            minH: object["minH"],
            minW: object["minW"],
            name: object["name"],
            title: new Map<string, string>(Object.entries(object["title"])),
            url: object["url"],
            w: object["w"]
        })
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


